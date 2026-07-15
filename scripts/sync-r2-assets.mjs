/**
 * R2 (MinIO) から public/{namespace}/ へコンテンツと画像を同期するスクリプト
 * 使い方: node scripts/sync-r2-assets.mjs
 * 環境変数:
 *   R2_ENDPOINT
 *   R2_BUCKET (default: cms)
 *   R2_ACCESS_KEY_ID
 *   R2_SECRET_ACCESS_KEY
 */

import { writeFile, mkdir } from 'fs/promises';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand
} from '@aws-sdk/client-s3';
dotenv.config();

const R2_URL = process.env.R2_ENDPOINT || 'http://localhost:9000';
const BUCKET = process.env.R2_BUCKET || 'cms';
const ROOT = join(fileURLToPath(import.meta.url), '..', '..');
const PUBLIC = join(ROOT, 'public');

const NAMESPACES = ['blog', 'portfolio'];
const IMAGE_EXTENSIONS = new Set(['.png', '.svg', '.jpg', '.jpeg', '.webp']);

const s3 = new S3Client({
  endpoint: R2_URL,
  region: 'auto',
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
  }
});

// key: R2上のオブジェクトキー(例: "blog/contents/all.json")
// destPath: 保存先のローカル絶対パス
async function download(key, destPath) {
  const res = await s3.send(new GetObjectCommand({ Bucket: BUCKET, Key: key }));
  const buf = Buffer.from(await res.Body.transformToByteArray());
  await mkdir(dirname(destPath), { recursive: true });
  await writeFile(destPath, buf);
  console.log('  ✓', destPath.replace(ROOT, ''));
}

async function listAllKeys(prefix) {
  const keys = [];
  let continuationToken;

  do {
    const res = await s3.send(
      new ListObjectsV2Command({
        Bucket: BUCKET,
        Prefix: prefix,
        ContinuationToken: continuationToken
      })
    );
    for (const obj of res.Contents ?? []) {
      keys.push(obj.Key);
    }
    continuationToken = res.IsTruncated ? res.NextContinuationToken : undefined;
  } while (continuationToken);

  return keys;
}

async function syncContents(namespace) {
  console.log(`\n[${namespace}/contents]`);
  for (const file of ['all.json', 'category.json', 'tag.json']) {
    const key = `${namespace}/contents/${file}`;
    await download(key, join(PUBLIC, namespace, 'contents', file)).catch((e) =>
      console.warn(`  ! skip ${key}:`, e.message)
    );
  }
}

async function syncImages(namespace) {
  const prefix = `${namespace}/images/`;
  console.log(`\n[${namespace}/images] listing ${prefix} ...`);

  let keys;
  try {
    keys = await listAllKeys(prefix);
  } catch (e) {
    console.warn(`  ! skip ${namespace} images (list failed):`, e.message);
    return;
  }

  const imageKeys = keys.filter((key) =>
    IMAGE_EXTENSIONS.has(extname(key).toLowerCase())
  );
  console.log(`  found ${imageKeys.length} images`);

  for (const key of imageKeys) {
    const relativePath = key.replace(`${namespace}/`, ''); // "images/category/backend.svg"
    const destPath = join(PUBLIC, namespace, relativePath);

    await download(key, destPath).catch((e) =>
      console.warn(`  ! skip ${key}:`, e.message)
    );
  }
}

async function syncNamespace(namespace) {
  console.log(`\n=== Syncing ${namespace} ===`);
  await syncContents(namespace);
  await syncImages(namespace);
}

async function main() {
  for (const namespace of NAMESPACES) {
    await syncNamespace(namespace);
  }
  console.log('\nDone.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

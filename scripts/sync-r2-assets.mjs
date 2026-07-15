/**
 * R2 (MinIO) から public/{namespace}/ へコンテンツと画像を同期するスクリプト
 * 使い方: node scripts/sync-r2-assets.mjs
 * 環境変数:
 *   R2_URL (default: http://localhost:9000)
 *   R2_BUCKET (default: cms)
 *   R2_ACCESS_KEY_ID
 *   R2_SECRET_ACCESS_KEY
 */

import { writeFile, mkdir } from 'fs/promises';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

const R2_URL = process.env.R2_ENDPOINT || 'http://localhost:9000';
const BUCKET = process.env.R2_BUCKET || 'cms';
const ROOT = join(fileURLToPath(import.meta.url), '..', '..');
const PUBLIC = join(ROOT, 'public');

const NAMESPACES = ['blog', 'portfolio'];

// 同期対象とする画像拡張子
const IMAGE_EXTENSIONS = new Set(['.png', '.svg', '.jpg', '.jpeg', '.webp']);

const s3 = new S3Client({
  endpoint: R2_URL,
  region: 'auto',
  forcePathStyle: true, // MinIO/R2はパススタイルが必要
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
  }
});

async function download(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(destPath), { recursive: true });
  await writeFile(destPath, buf);
  console.log('  ✓', destPath.replace(ROOT, ''));
}

// prefix配下のオブジェクトキーを全件(ページネーション対応)取得する
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

async function syncContents(namespace, base) {
  console.log(`\n[${namespace}/contents]`);
  for (const file of ['all.json', 'category.json', 'tag.json']) {
    await download(
      `${base}/contents/${file}`,
      join(PUBLIC, namespace, 'contents', file)
    ).catch((e) =>
      console.warn(`  ! skip ${namespace}/contents/${file}:`, e.message)
    );
  }
}

// {namespace}/images/ 配下を再帰的に全部同期する
async function syncImages(namespace, base) {
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
    // key例: "blog/images/category/nextjs.svg"
    const relativePath = key.replace(`${namespace}/`, ''); // "images/category/nextjs.svg"
    const url = `${base.replace(`/${namespace}`, '')}/${key}`; // R2_URL/BUCKET/key
    const destPath = join(PUBLIC, namespace, relativePath);

    await download(url, destPath).catch((e) =>
      console.warn(`  ! skip ${key}:`, e.message)
    );
  }
}

async function syncNamespace(namespace) {
  const base = `${R2_URL}/${BUCKET}/${namespace}`;
  console.log(`\n=== Syncing ${namespace} from ${base} ===`);
  await syncContents(namespace, base);
  await syncImages(namespace, base);
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

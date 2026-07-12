/**
 * R2 (MinIO) から public/blog/ へコンテンツと画像を同期するスクリプト
 * 使い方: node scripts/sync-r2-assets.mjs
 * 環境変数: R2_URL (default: http://localhost:9000), R2_BUCKET (default: cms)
 */

import { writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const R2_URL = process.env.R2_URL || 'http://localhost:9000';
const BUCKET = process.env.R2_BUCKET || 'cms';
const ROOT = join(fileURLToPath(import.meta.url), '..', '..');
const PUBLIC = join(ROOT, 'public');

const BASE = `${R2_URL}/${BUCKET}/blog`;

async function download(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(destPath), { recursive: true });
  await writeFile(destPath, buf);
  console.log('  ✓', destPath.replace(ROOT, ''));
}

async function syncContents() {
  console.log('\n[contents]');
  for (const file of ['all.json', 'category.json', 'tag.json']) {
    await download(
      `${BASE}/contents/${file}`,
      join(PUBLIC, 'blog', 'contents', file)
    );
  }
}

async function syncImages() {
  console.log('\n[images] reading all.json ...');
  const allJson = await fetch(`${BASE}/contents/all.json`).then((r) => r.json());
  const articles = allJson.all ?? [];

  const categories = [...new Set(articles.map((a) => a.summary.category))];
  const tags = [...new Set(articles.flatMap((a) => a.summary.tags))];

  console.log(`  categories: ${categories.join(', ')}`);
  console.log(`  tags: ${tags.join(', ')}`);

  for (const name of categories) {
    await download(
      `${BASE}/images/category/${name}.svg`,
      join(PUBLIC, 'blog', 'images', 'category', `${name}.svg`)
    ).catch((e) => console.warn(`  ! skip category/${name}.svg:`, e.message));
  }

  for (const name of tags) {
    await download(
      `${BASE}/images/tag/${name}.svg`,
      join(PUBLIC, 'blog', 'images', 'tag', `${name}.svg`)
    ).catch((e) => console.warn(`  ! skip tag/${name}.svg:`, e.message));
  }
}

async function main() {
  console.log(`Syncing from ${BASE} ...`);
  await syncContents();
  await syncImages();
  console.log('\nDone.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

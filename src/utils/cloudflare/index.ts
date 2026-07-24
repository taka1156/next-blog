export function getBaseUrl(): string {
  // 2. Cloudflare Pages環境なら、そのデプロイ固有のURLを使う
  if (process.env.CF_PAGES_URL) {
    return process.env.CF_PAGES_URL;
  }

  return process.env.BASE_URL;
}

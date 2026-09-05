export function getBaseUrl(): string {
  if (
    process.env.CF_PAGES_BRANCH === 'master' &&
    process.env.NEXT_PUBLIC_CUSTOM_DOMAIN
  ) {
    return `https://${process.env.NEXT_PUBLIC_CUSTOM_DOMAIN}`;
  }
  if (process.env.CF_PAGES_URL) {
    return process.env.CF_PAGES_URL;
  }
  return process.env.BASE_URL ?? 'http://localhost:3000';
}

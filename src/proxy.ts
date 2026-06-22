// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const BLOG_HOST = process.env.NEXT_PUBLIC_BLOG_HOST;
const PORTFOLIO_HOST = process.env.NEXT_PUBLIC_PORTFOLIO_HOST;

export function proxy(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') || '';
  const isBlog = hostname === BLOG_HOST;
  const isPortfolio = hostname === PORTFOLIO_HOST;

  if (isBlog) {
    return NextResponse.rewrite(new URL(`/site/blog${url.pathname}`, req.url));
  }
  if (isPortfolio) {
    return NextResponse.rewrite(new URL(`/site/portfolio${url.pathname}`, req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|api|img|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|json|xml|txt)$).*)'
  ]
};

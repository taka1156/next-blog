import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'article ogp image';
export const size = {
  width: 128,
  height: 128
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(<div style={{ fontSize: '120px' }}>{'🫖'}</div>, {
    ...size
  });
}

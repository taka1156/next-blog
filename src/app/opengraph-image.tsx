import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'top ogp image';
export const size = {
  width: 128,
  height: 128
};

export const contentType = 'image/png';

export default async function Image() {
  const ogpBaseImageData = await readFile(
    join(process.cwd(), 'public/img/icon/utils/logo-no-title.png')
  );

  const ogpImageBase64 = `data:image/png;base64,${ogpBaseImageData.toString('base64')}`;

  return new ImageResponse(
    <img
      src={ogpImageBase64}
      alt={alt}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}
    />,
    {
      ...size
    }
  );
}

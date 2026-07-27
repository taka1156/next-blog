import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { getClassification } from '@/utils/ssg/brite';

export const dynamic = 'force-static';
export const alt = 'article ogp image';
export const size = {
  width: 128,
  height: 128
};

export const contentType = 'image/png';

export const generateStaticParams = async () => {
  const tags = await getClassification('blog', 'tag');
  return tags ? tags.map(({ name }) => ({ id: name })) : [];
};

const getStaticTag = async (
  id: string
): Promise<CommonClassificationItem | undefined> => {
  const tags = await getClassification('blog', 'tag');
  return tags.find((tag) => tag.name === id);
};

export default async function Image(props: { params: { id: string } }) {
  const { id } = await props.params;
  const { image } = (await getStaticTag(id)) || { image: 'img/ui/tag.svg' };

  const ogpBaseImageData = await readFile(join(process.cwd(), `public/${image}`));

  const ogpImageBase64 = `data:image/svg+xml;base64,${ogpBaseImageData.toString('base64')}`;

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

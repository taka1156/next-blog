import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { getClassification } from '@/utils/ssg/brite';

export const dynamic = 'force-static';
export const alt = 'category ogp image';
export const size = {
  width: 128,
  height: 128
};

export const contentType = 'image/png';

export const generateStaticParams = async () => {
  const categories = await getClassification('blog', 'category');
  return categories ? categories.map(({ name }) => ({ id: name })) : [];
};

const getStaticCategory = async (
  id: string
): Promise<CommonClassificationItem | undefined> => {
  const categories = await getClassification('blog', 'category');
  return categories.find((category) => category.name === id);
};

export default async function Image(props: { params: { id: string } }) {
  const { id } = await props.params;
  const { image } = (await getStaticCategory(id)) || {
    image: 'img/ui/category.svg'
  };

  const ogpBaseImageData = await readFile(join(process.cwd(), `public/${image}`));

  const ogpImageBase64 = `data:image/svg+xml;base64,${ogpBaseImageData.toString('base64')}`;

  return new ImageResponse(
    <img
      src={ogpImageBase64}
      alt={alt}
      style={{
        backgroundColor: 'white',
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

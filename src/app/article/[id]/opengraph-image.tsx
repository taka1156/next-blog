import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { getArticleBySlug, getArticles } from '@/utils/ssg/brite';
import { LOGO_TEXT } from '@/constants/';

export const dynamic = 'force-static';
export const alt = 'article ogp image';
export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export const generateStaticParams = async (): Promise<{ id: string }[]> => {
  const articles = await getArticles('blog');
  return articles.map((article) => ({
    id: article.summary.slug
  }));
};

const getStaticArticle = async ({ params }: { params: ArticlePath }) => {
  const { id } = await params;
  const article = await getArticleBySlug('blog', id);
  return article;
};

export default async function Image(props: { params: ArticlePath }) {
  const { summary } = await getStaticArticle(props);

  const fontData = await readFile(
    join(process.cwd(), 'public/fonts/NotoSansJP-Bold.ttf')
  );

  const ogpBaseImageData = await readFile(
    join(process.cwd(), 'public/img/ogp/pablo-ogp.png')
  );

  const ogpLogoImageData = await readFile(
    join(process.cwd(), 'public/img/icon/utils/logo-no-title.png')
  );

  const ogpImageBase64 = `data:image/png;base64,${ogpBaseImageData.toString('base64')}`;
  const ogpLogoImageBase64 = `data:image/png;base64,${ogpLogoImageData.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: 32,
        backgroundImage:
          'linear-gradient(135deg, #6495ED 0%, #8FB8F6 50%, #B8D4FA 100%)'
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          color: 'white',
          padding: 32,
          fontFamily: 'Noto Sans JP'
        }}
      >
        <img
          src={ogpImageBase64}
          alt={alt}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 16
          }}
        />
        <p style={{ marginTop: 64, fontSize: 56 }}>{summary.title}</p>

        <div style={{ display: 'flex', alignItems: 'center', marginTop: 32 }}>
          <img
            src={ogpLogoImageBase64}
            alt={`${LOGO_TEXT} logo`}
            style={{ width: 64, height: 64, marginRight: 8 }}
          />
          <p style={{ fontSize: 40 }}>{LOGO_TEXT}</p>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Noto Sans JP',
          data: fontData,
          style: 'normal',
          weight: 700
        }
      ]
    }
  );
}

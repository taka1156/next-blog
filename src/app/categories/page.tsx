import { Metadata } from 'next';
import axios from 'axios';
import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { ClassificationList } from '@/components/organisms/ClassificationList/ClassificationList';
import { MICRO_CMS, CATEGORY_URL } from '@/constants/setting';
import styles from './Categories.module.css';

type GetCategories = {
  contents: CommonBadges;
};

const getStaticCategories = async () => {
  const PARAMS = { fields: 'id,name,img' };

  const categoriesInfo = await axios
    .get<GetCategories>(CATEGORY_URL, {
      params: PARAMS,
      headers: { 'X-API-KEY': MICRO_CMS }
    })
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((e) => {
      console.error(e);
      return null;
    });

  if (categoriesInfo != null) {
    const { contents } = categoriesInfo;
    return { categories: contents };
  } else {
    return { categories: [] };
  }
};

export const generateMetadata = (): Metadata => {
  const URL = `${process.env.BASE_URL}/categories/`;
  const IMAGE = `${process.env.BASE_URL}/img/ogp/category.png`;
  // メタタグ
  const title = 'カテゴリー 一覧';
  const description =
    'taka1156のブログ。\nVueやTS、electron、Laravelなど技術関連の記事を更新中';
  const type = 'article';
  const url = URL;
  const image = IMAGE;

  return {
    title: title,
    description: description,
    openGraph: {
      type: type,
      title: title,
      description: description,
      images: [image],
      url: url
    }
  };
};

const Categories = async () => {
  const { categories } = await getStaticCategories();

  return (
    <div>
      <BaseHeading hLv='1' extendClass={styles.baseHeading1Categories}>
        Category
      </BaseHeading>
      <ClassificationList routePath='category' items={categories} />
    </div>
  );
};

export default Categories;

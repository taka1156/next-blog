const IMG_PATHS = {
  blog: 'blog/images',
  portfolio: 'portfolio/images'
};

export const resolveBlogImagePath = (
  type: 'article' | 'category' | 'tag',
  filename: string
): string => {
  return `/${IMG_PATHS['blog']}/${type}/${filename}`;
};

export const resolvePortfolioImagePath = (
  type: 'development',
  filename: string
): string => {
  return filename.replace('./', '/');
};

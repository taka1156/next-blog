type ArticleSummary = {
  slug: string;
  title: string;
  thumbnail: string;
  summaryText: string;
  category: string;
  tags: string[];
  created_at: string;
  updated_at: string;
};

// common type for tag and category classification
type ArticleClassified = {
  [key: string]: ArticleSummary[];
};

type ArticleElement = {
  summary: ArticleSummary;
  content: string;
};

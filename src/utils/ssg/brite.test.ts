import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getArticles, getClassification, getArticleBySlug } from './brite';

const mockArticleAll = {
  all: [
    {
      summary: {
        slug: 'test-article',
        title: 'テスト記事',
        thumbnail: 'https://example.com/img.png',
        category: { name: 'tech', image: 'https://example.com/tech.png', posts: [] },
        tags: [],
        created_at: '2023-01-01T00:00:00Z',
        updated_at: '2023-01-02T00:00:00Z'
      },
      content: '## 内容'
    }
  ]
};

const mockClassification: ArticleClassified[] = [
  { name: 'tech', image: 'https://example.com/tech.png', posts: [] }
];

const makeFetchOk = (data: unknown) =>
  vi.fn().mockResolvedValue({
    text: vi.fn().mockResolvedValue(JSON.stringify(data))
  });

const makeFetchFail = () => vi.fn().mockRejectedValue(new Error('Network Error'));

describe('getArticles', () => {
  beforeEach(() => {
    vi.unstubAllGlobals();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('正常なレスポンスから記事一覧を返す', async () => {
    vi.stubGlobal('fetch', makeFetchOk(mockArticleAll));
    const result = await getArticles('blog');
    expect(result).toHaveLength(1);
    expect(result[0].summary.slug).toBe('test-article');
  });

  it('fetch が失敗したとき空配列を返す', async () => {
    vi.stubGlobal('fetch', makeFetchFail());
    const result = await getArticles('blog');
    expect(result).toEqual([]);
  });

  it('portfolio contentType でも動作する', async () => {
    vi.stubGlobal('fetch', makeFetchOk(mockArticleAll));
    const result = await getArticles('portfolio');
    expect(result).toHaveLength(1);
  });
});

describe('getClassification', () => {
  it('正常なレスポンスから分類一覧を返す', async () => {
    vi.stubGlobal('fetch', makeFetchOk(mockClassification));
    const result = await getClassification('blog', 'category');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('tech');
  });

  it('fetch が失敗したとき空配列を返す', async () => {
    vi.stubGlobal('fetch', makeFetchFail());
    const result = await getClassification('blog', 'tag');
    expect(result).toEqual([]);
  });
});

describe('getArticleBySlug', () => {
  it('slug に一致する記事を返す', async () => {
    vi.stubGlobal('fetch', makeFetchOk(mockArticleAll));
    const result = await getArticleBySlug('blog', 'test-article');
    expect(result.summary.slug).toBe('test-article');
  });
});

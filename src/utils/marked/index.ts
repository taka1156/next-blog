import { Marked } from 'marked';
import { highlight as hljs } from './highlight';
import { markedHighlight } from 'marked-highlight';

// 目次生成
let index = 0;
let tocs: TocItems = [];

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
).use({
  breaks: true,
  gfm: true,
});

const markedWrap = (md: string) => {
  // 初期化
  index = 0;
  tocs = [];
  const result = marked.parse(md);
  index++;
  tocs.push({ index, anchor: 'anchor_relative', escapedText: '関連記事' });
  return result;
};

export { tocs, markedWrap };

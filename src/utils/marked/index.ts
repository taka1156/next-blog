import { Marked } from 'marked';
import { highlight as hljs } from './highlight';
import { markedHighlight } from 'marked-highlight';

type MarkedResult = {
  tocs: TocItems;
  htmlText: string;
};

// 目次生成
let index = 0;
let tocs: TocItems = [];

const renderer = {
  heading(text: string, level: number) {
    const escapedText = text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '');
    if (level === 2) {
      index++;
      const anchor = 'anchor_' + index;
      tocs.push({ index, anchor, escapedText });
      return (
        '<h' + level + ' id="' + anchor + '">' + text + '</h' + level + '>'
      );
    } else {
      return '<h' + level + '>' + text + '</h' + level + '>';
    }
  },
};

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  })
).use({
  renderer,
  breaks: true,
  gfm: true,
});

const markedWrap = async (md: string): Promise<MarkedResult> => {
  // 初期化
  index = 0;
  tocs = [];
  const htmlText = await marked.parse(md);
  index++;
  tocs.push({ index, anchor: 'anchor_relative', escapedText: '関連記事' });
  return {
    tocs,
    htmlText,
  };
};

export { markedWrap };

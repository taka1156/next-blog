import { Marked } from 'marked';
import { highlight as hljs } from './highlight';
import { markedHighlight } from 'marked-highlight';

type MarkedResult = {
  tocs: TocItems;
  htmlText: string;
};

const createMarkedInstance = () =>
  new Marked(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      }
    })
  );

const markedWrap = async (
  md: string,
  anchorPrefix: string = ''
): Promise<MarkedResult> => {
  // 呼び出しごとにローカルな状態を持つ(グローバル変数を廃止)
  let index = 0;
  const tocs: TocItems = [];

  const renderer = {
    heading(text: string, level: number) {
      const escapedText = text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '');
      if (level === 2) {
        index++;
        // プレフィックスを付けて記事ごとに一意にする
        const anchor = `${anchorPrefix}anchor_${index}`;
        tocs.push({ index, anchor, escapedText });
        return '<h' + level + ' id="' + anchor + '">' + text + '</h' + level + '>';
      } else {
        return '<h' + level + '>' + text + '</h' + level + '>';
      }
    }
  };

  const marked = createMarkedInstance().use({
    renderer,
    breaks: true,
    gfm: true
  });

  const htmlText = await marked.parse(md);

  return {
    tocs,
    htmlText
  };
};

export { markedWrap };

// markedWrap.ts
import { Marked, type RendererObject, type Tokens } from 'marked';
import markedShiki from 'marked-shiki';
import markedAlert from 'marked-alert';
import markedDetails from './markedDetails';
import { getHighlighter, resolveLang } from './shiki';

type MarkedResult = {
  tocs: TocItems;
  htmlText: string;
};

const createMarkedInstance = () =>
  new Marked()
    .use(
      markedShiki({
        async highlight(code, lang) {
          const highlighter = await getHighlighter();
          return highlighter.codeToHtml(code, {
            lang: resolveLang(lang),
            theme: 'github-dark'
          });
        }
      })
    )
    .use(markedAlert())
    .use(markedDetails());

const markedWrap = async (
  md: string,
  anchorPrefix: string = ''
): Promise<MarkedResult> => {
  let index = 0;
  const tocs: TocItems = [];

  const renderer: RendererObject = {
    heading(token: Tokens.Heading) {
      const text = this.parser.parseInline(token.tokens);
      const escapedText = text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '');
      const level = token.depth;

      if (level === 2) {
        index++;
        const anchor = `${anchorPrefix}anchor_${index}`;
        tocs.push({ index, anchor, escapedText });
        return `<h${level} id="${anchor}">${text}</h${level}>`;
      }

      return `<h${level}>${text}</h${level}>`;
    }
  };

  const marked = createMarkedInstance().use({
    renderer,
    breaks: true,
    gfm: true
  });

  const htmlText = await marked.parse(md);

  return { tocs, htmlText };
};

export { markedWrap };

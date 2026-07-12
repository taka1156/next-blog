'use client';
import { useState, useEffect } from 'react';
import { markedWrap } from '@/utils/marked';

const useMarked = (markdownText: string, anchorPrefix?: string) => {
  const [articleBodyTocs, setArticleBodyTocs] = useState<TocItems>([]);
  const [articleBodyText, setArticleBodyText] = useState<string>('');
  const [parseCompleted, setParseCompleted] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { tocs, htmlText } = await markedWrap(markdownText, anchorPrefix);
      setArticleBodyText(htmlText);
      setArticleBodyTocs(tocs);
      setParseCompleted(true);
    })();
  }, [markdownText, anchorPrefix]);

  return {
    parseCompleted,
    articleBodyTocs,
    articleBodyText
  };
};

export { useMarked };

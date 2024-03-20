'use client';
import { useState, useEffect } from 'react';
import { markedWrap } from '@/utils/marked';

const useMarkedStateHook = (markdownText: string) => {
  const [articleBodyTocs, setArticleBodyTocs] = useState<TocItems>([]);
  const [articleBodyText, setArticleBodyText] = useState<string>('');
  const [parseCompleted, setParseCompleted] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { tocs, htmlText } = await markedWrap(markdownText);
      setArticleBodyText(htmlText);
      setArticleBodyTocs(tocs);
      setParseCompleted(true);
    })();
  }, [markdownText]);

  return {
    parseCompleted,
    articleBodyTocs,
    articleBodyText
  };
};

export { useMarkedStateHook };

// shiki-highlighter.ts
import { createHighlighterCore, type HighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

// 使う言語だけを個別インポート(highlight.jsのlib/core + registerLanguageと同じ考え方)
const langs = [
  import('@shikijs/langs/markdown'),
  import('@shikijs/langs/css'),
  import('@shikijs/langs/scss'),
  import('@shikijs/langs/javascript'),
  import('@shikijs/langs/typescript'),
  import('@shikijs/langs/python'),
  import('@shikijs/langs/c'),
  import('@shikijs/langs/cpp'),
  import('@shikijs/langs/go'),
  import('@shikijs/langs/rust'),
  import('@shikijs/langs/moonbit'),
  import('@shikijs/langs/sql'),
  import('@shikijs/langs/shellscript'), // shell
  import('@shikijs/langs/makefile'),
  import('@shikijs/langs/nginx'),
  import('@shikijs/langs/dockerfile'),
  import('@shikijs/langs/yaml'),
  import('@shikijs/langs/json'),
  import('@shikijs/langs/xml')
];

const themes = [
  import('@shikijs/themes/github-light'),
  import('@shikijs/themes/github-dark')
];

// モジュールスコープでシングルトン化(呼び出しのたびに作り直さない)
let highlighterPromise: Promise<HighlighterCore> | null = null;

export const getHighlighter = (): Promise<HighlighterCore> => {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      langs,
      themes,
      // Web/バンドルサイズ重視ならJS RegExpエンジン(高速・軽量、ただし一部文法で精度がOniguruma劣る)
      // サーバー用途で精度優先ならcreateOnigurumaEngine(import('shiki/wasm'))推奨
      engine: createJavaScriptRegexEngine()
    });
  }
  return highlighterPromise;
};

// highlight.jsのplaintextフォールバックと同じ役割
const supportedLangs = new Set([
  'plaintext',
  'markdown',
  'css',
  'scss',
  'javascript',
  'typescript',
  'php',
  'ruby',
  'python',
  'c',
  'cpp',
  'java',
  'csharp',
  'go',
  'dart',
  'swift',
  'kotlin',
  'sql',
  'shellscript',
  'shell',
  'bash',
  'sh',
  'makefile',
  'nginx',
  'dockerfile',
  'yaml',
  'json',
  'xml'
]);

export const resolveLang = (lang?: string): string =>
  lang && supportedLangs.has(lang) ? lang : 'plaintext';

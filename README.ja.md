# Webspaces

Next.js で構築し、Cloudflare Pages にデプロイした個人ブログサイトです。

[English version](README.md)

## 技術スタック

| カテゴリ               | 技術                             |
| ---------------------- | -------------------------------- |
| フレームワーク         | Next.js 16 (App Router)          |
| 言語                   | TypeScript                       |
| スタイリング           | vanilla-extract                  |
| テスト                 | Vitest, Testing Library          |
| コンポーネントカタログ | Storybook                        |
| デプロイ               | Cloudflare Pages (wrangler 経由) |

## コンテンツ管理

- 記事は**プライベートリポジトリ**で管理し、作者自身が開発した SSG/CMS ツール [brite](https://github.com/taka1156/brite)（ドッグフーディング）で静的 JSON に変換
- 生成した JSON ファイルは **Cloudflare R2** に保存され、ビルド時に取得される
- ビルド時は環境変数 `R2_URL` / `R2_BUCKET` で R2 エンドポイントを指定し、未設定の場合は `public/` ディレクトリにフォールバック

## ディレクトリ構成

```
src/
  app/           # Next.js App Router ページ
  components/
    blog/        # ブログ固有のコンポーネント（記事一覧・ページネーション・タグなど）
    layout/      # グローバルレイアウト（ナビバー・ナビゲーション・スプラッシュ・フッター）
    profile/     # プロフィールページのコンポーネント
    shared/      # 汎用 UI コンポーネント
  constants/     # アプリ共通の定数（BASE_URL, LOGO_TEXT, ルートなど）
  hooks/         # カスタム React フック
  types/         # TypeScript 型定義
  utils/
    ssg/         # R2 からのデータ取得 (brite.ts)
    marked/      # Markdown レンダリング (marked + shiki)
    cloudflare/  # Cloudflare 固有のユーティリティ (getBaseUrl)
    dayjs/       # 日付ユーティリティ
scripts/
  sync-r2-assets.mjs  # R2 からアセットを public/ に同期
```

## コマンド

```bash
yarn dev          # 開発サーバー起動（ポート 8000）
yarn build        # Next.js ビルド
yarn deploy       # ビルド + Cloudflare Pages デプロイ
yarn sync         # R2 アセットを public/ に同期
yarn test         # Vitest テスト実行
yarn storybook    # Storybook 起動（ポート 6006）
yarn lint         # ESLint + Prettier チェック
yarn format:fix   # Prettier による自動フォーマット
```

## ページ一覧

| ルート           | 説明               |
| ---------------- | ------------------ |
| `/`              | 記事一覧（トップ） |
| `/article/[id]`  | 記事詳細           |
| `/categories`    | カテゴリ一覧       |
| `/category/[id]` | カテゴリ別記事     |
| `/tags`          | タグ一覧           |
| `/tag/[id]`      | タグ別記事         |
| `/profile`       | プロフィール       |

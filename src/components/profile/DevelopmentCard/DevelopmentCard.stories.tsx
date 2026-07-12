import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { DevelopmentCard } from './DevelopmentCard';
import '@/app/layout.css';

const meta: Meta<typeof DevelopmentCard> = {
  component: DevelopmentCard
};

export default meta;

type Story = StoryObj<typeof DevelopmentCard>;

const dummyArticle: ArticleElement = {
  summary: {
    slug: 'dummy-project',
    title: 'ダミープロジェクト',
    thumbnail: 'https://placehold.jp/300x200.png',
    description:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダこの文章はダミーです。この文章はダこの文章はダミーです。',
    category: 'web',
    tags: ['react', 'typeScript'],
    created_at: '2024-01-01',
    updated_at: '2024-06-01'
  },
  content: `
## 概要

GitHub CodespacesやVS CodeのDevcontainerの3ファイルを専用のスキーマに従った構成で作成することができます。

<details>

<summary> codesapcegen.json内容 </summary>

\`\`\`json
{
  "$schema": "codespacegen.schema.json",
  "common": {
    "timezone": "Asia/Tokyo",
    "locale": {
      "lang": "ja_JP.UTF-8",
      "language": "ja_JP:ja",
      "lcAll": "ja_JP.UTF-8"
    },
    "vscodeExtensions": [
      "MS-CEINTL.vscode-language-pack-ja",
      "GitHub.copilot",
      "GitHub.copilot-chat",
      "streetsidesoftware.code-spell-checker",
      "username.errorlens"
    ]
  },
  "langs": [
    {
      "profileName": "go",
      "image": "golang:1.24-alpine",
      "vscodeExtensions": [
        "golang.Go"
      ]
    },
    {
      "profileName": "node:biome",
      "image": "node:24-alpine",
      "vscodeExtensions": [
        "biomejs.biome"
      ]
    },
    {
      "profileName": "node:eslint",
      "image": "node:24-alpine",
      "vscodeExtensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode"
      ]
    },
    {
      "profileName": "node:react",
      "image": "node:24-alpine",
      "vscodeExtensions": [
        "jawandarajbir.react-vscode-extension-pack",
        "dbaeumer.vscode-eslint",
        "stylelint.vscode-stylelint",
        "esbenp.prettier-vscode"
      ]
    },
    {
      "profileName": "rust",
      "image": "rust:1.72-alpine",
      "vscodeExtensions": [
        "Zerotaskx.rust-extension-pack"
      ]
    },
    {
      "profileName": "moonbit",
      "image": "ubuntu:24.04",
      "runCommand": "curl -fsSL https://cli.moonbitlang.com/install/unix.sh | bash",
      "vscodeExtensions": [
        "moonbit.moonbit-lang"
      ]
    },
  ]
}
\`\`\`

</details>

https://github.com/taka1156/codespacegen/blob/master/codespacegen.schema.json

操作フローは、以下になります。

\`\`\`shell
# 初期化してcodespacegen.jsonを作成
csg init

# ファイルの登録しておきたいセットを記載しておきます

# 書き終わったら以下で叩き、対話モードでセットアップする
csg

プロジェクト名を入力してください（必須）: sample
言語を入力してください（未入力で alpine 固定）: go
ワークスペースを入力してください（未入力で /workspace）:
サービス名を入力してください（未入力で app）: sandbox
公開ポートを入力してください (例: 3000 または 3000:3000、不要ならEnter): 3000
タイムゾーンを入力してください（未入力で Asia/Tokyo）: 

# 生成し終えたファイルを元に拡張子してVS CodeやCodespacesで動かしてください。
\`\`\`

## 使用技術

- Go
- go-i18n
- go-github-selfupdate

## こだわったポイント

- commonエリアとのマージ処理
- ubuntu/alpineの切り替え
- Github Copilotの活用
- タグを打つと自動でCDが走り、各種環境に合わせてクロスコンパイルされる点

## 関連リンク

- https://github.com/taka1156/codespacegen
- https://github.com/taka1156/codespace-template
- https://zenn.dev/taka1156/articles/282ff1dc1a4ce3
`
};

export const Basic: Story = {
  args: {
    article: dummyArticle
  },
  render: (args) => <DevelopmentCard {...args} />
};

export const ThreeTags: Story = {
  args: {
    article: dummyArticle
  },
  render: (args) => {
    args.article.summary.tags = ['react', 'typeScript', 'nextjs'];
    return <DevelopmentCard {...args} />;
  }
};

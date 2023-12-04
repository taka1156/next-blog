# JAMStack形式のNuxt2.jsをNext.jsへの移行する
移行対象リポジトリは以下です。
https://github.com/taka1156/nuxt-blog

移行先
https://github.com/taka1156/next-blog

## Nuxt２で使っている技術の洗い出し
 Nuxt2で使っているモジュールとNextで使うモジュールの洗い出しをします。

 基本的に、cssと、フレームワークに依存しない部分はそのままコードベースを移行できそうです。

 以下の二つは、必須対応としてサイトマップはアナリティクス寄りの機能でメインの機能とは別対応とします。

 - 遅延読み込み
 - 見出しタグのアンカーをつけた場所に自度スクロールする

|モジュール名|Nuxt2＋JS|Next＋TS|代替モジュール|
|---|---|---|---|
|github-markdown-css|⚪︎|⚪︎|
|normalize.css|⚪︎|⚪︎|
|marked.js|⚪︎|⚪︎|
|firebase |⚪︎|⚪︎|
|highlight.js|⚪|×|
|vue-lazyload|⚪︎|×|next/imageというデフォルト機能で可能|
|vue-scrollto|⚪︎|×|react-anchor-link-smooth-scroll|
|transition|vueデフォルト機能|×|react-transition-groupを使う|
|@nuxtjs/sitemap|⚪︎|×|今回は対応しない|


## nextプロジェクトの作成

以下のコマンドを叩いてプロジェクトを作ります。

```
yarn create next-app
✔ What is your project named? … next-blog
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … No
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … Yes
✔ What import alias would you like configured? … @/*
```

上記設定の内容は以下になります

TypeScript構成でcssはとりあえずピュアなもの(CSS Module)を使います。

|設定項目|内容|
|---|---|
|project名|next-blog
|ESlit|使う
|Tailwind CSS|使わない
|src/ディレクトリはきる?|切る
|App Router使う？|使う
|import alias|使う
|import aliasの設定は？|@/*


##　 移行作業

### ディレクトリ構成
ディレクトリ構成は以下のようにしました。
今回App Routerを利用しているのでpageではなくappというフォルダが生成されます。

```
src
 |_ app
 |_ components
 |_ constants
 |_ hooks
 |_ types
 |_ utils
```

以下主な役割
- app
  ページのルーティングと対応したページ内容を表示します。
- components
  大まかにAtomic Designのような区分けをしています。
- constants
  固定のURLや固定のテキストを管理する箇所です。
- hooks
  ナビゲーションの開閉管理やPC/SP判定、ページネーションなどの状態に近い処理を切り出して管理しています。
  今回、App Routerを利用する関係上、ページ内では基本的にHooksを使うことができないため、
  `use client`という記載を追加して、CSR内で動作するようにしています。
- types
  TSの型を管理しています。分類としては、axiosやブログ内の型とSSGに利用するパスなどの管理をしています。
- utils
  どれにも該当しない雑多なファイルが分類されます。markedやdayjsの設定やssgの取得処理を記載しています。


### 作業の流れ、注意点
主な作業としては、以下のようになっています。
1. VueファイルをAppとcomponents内に全て持ってくる。
2. `scoped css`の箇所を`*.modules.css`というファイルに移動させる。
3. `*.tsx`、`page.tsx`に拡張子を変えて`<template>`内をJSXし、状態を持つ処理はhooksにする。
4. cssをモジュールとしてインポートする。
5. `class`を`className`に書き換えて、`styles.~`という記載に変更する。


基底コンポーネントは、親の変更を受け取るために、`<slot />`や`base-link--extend`などの記載がありますが、こちらは全てReactで使えるように変更します。

- `<slot />` は、`ReactNode型を持つchildren`というPropsに変更し呼出しも`<children>`に変更
- `base-link--extend`は、`string型を持つextendClass`というPropsに変更し親のもっているcss classを適用できるように変更


propsの定義としては、元々VueのProps型のようなものを入れていたのでそちらを参考に、任意であれば、null許容を利用しつつ定義していきます。

<details>
<summary>コード</summary>

```tsx
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import styles from './ArticleBadge.module.css';

type ArticleBadge = {
  routePath: string;
  badge: CommonBadge;
  extendClass?: string;
};

const ArticleBadge = ({ routePath, badge, extendClass = '' }: ArticleBadge) => {
  return (
    <BaseLink routeTo={`/${routePath}/${badge.id}`}>
      <div className={`${styles.articleBadge} ${extendClass}`}>
        <span className={styles.articleBadgeText}>{badge.name}</span>
        <BaseImg
          size="sm"
          imgUrl={badge.img.url}
          imgAlt={`${badge.name}の画像`}
        />
      </div>
    </BaseLink>
  );
};

export { ArticleBadge };
```

```html
<template>
  <base-link
    :route-to="{
      name: routePath,
      params: { id: badge.id }
    }"
  >
    <div class="article-badge article-badge--extend">
      <span class="article-badge__text">
        {{ badge.name }}
      </span>
      <base-img-lazy
        size="sm"
        :img-url="badge.img.url"
        :img-alt="`${badge.name}の画像`"
      />
    </div>
  </base-link>
</template>

<script>
import BaseLink from '../../atoms/BaseLink/BaseLink';
import BaseImgLazy from '../../atoms/BaseImgLazy/BaseImgLazy';

export default {
  name: 'ArticleBadge',
  components: {
    BaseLink,
    BaseImgLazy
  },
  props: {
    /**
     * 遷移先のルート情報
     */
    routePath: {
      type: String,
      required: true
    },
    /**
     * バッジの情報
     * (id、バッジ名、画像URL)
     */
    badge: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
/* css reset */
p {
  padding: 0;
  margin: 0;
}

/* css reset */
.article-badge {
  display: flex;
  justify-content: center;
  padding: 2px;
  cursor: pointer;
  border-radius: 20px;
}

.article-badge__text {
  font-size: 12px;
  line-height: 30px;
}
</style>

```

</details>


### Page RouteとApp Router の違い

#### データ取得に関して
Pages Routerの時は、`getStaticProps`でデータを取得し静的かする流れですが、
App Routerの場合は、デフォルトがSSRとしての動きをするため`getStaticParams`でページのルーティングリストを生成し、
そのルーティングリストに対応するデータも生成されるようです。

#### SEO(metadata)
メタデータ生成も`next/head`から`export generateMetadata`というような関数を作り動的に生成する
もしくは、`export metadata`として静的な変数として出力させることもできるようです。

#### ルーティングについて
`next/router`ではなく`next/navigation`というのが新しく追加されており、主にこちらを利用して、
`useSearchParams`、`usePathname`、`useParams`を利用するようです。
今回は、現在参照しているルーティング番号を取得するのに`useParams`を利用しています。


## 詰まった点
- ページネーションありのページとなしのページの出し分け
  nuxt2の時は `example.com/articles/1`(ルーティングありTop)と`example.com`(ルーティングなしTop)でそれぞれ同じ内容を表示させたいというときに
  Page Component定義は同じものを指しつつも手動でTopページの定義を追加するようなことを行っていました。

  ```js
  export default {
      router: {
      trailingSlash: true,
      middleware: 'redirect',
      extendRoutes(routes, resolve) {
        routes.push({
          name: 'page-pageid',
          path: '/page/:pageid',
          component: resolve(__dirname, 'pages/index.vue')
        });
        routes.push({
          name: 'category-id-pageid',
          path: '/category/:id/:pageid',
          component: resolve(__dirname, 'pages/category/_id/index.vue')
        });
        routes.push({
          name: 'tag-id-pageid',
          path: '/tag/:id/:pageid',
          component: resolve(__dirname, 'pages/tag/_id/index.vue')
        });
      }
    },
  }
  ```

  nextではこれができないようなので、`/articles/[page]/page.tsx`と`/page.tsx`の両方を定義するという方法を行いました。
  本番運用では、ページ評価の分散を避けるために`canonical`をつけることになるのでこちらの方がより定義しやすい形になったと思います。

- トランジションについて
  アニメーションについてVueに頼りっきりで、少し悩みましたが、Reactにも`react-transition-group`という
  近いことができるモジュールがあって助かりました。
  フェードインなどページ遷移時のアニメーションも後々追加して行きたいと思います。
  また、コンポーネントとして持って置けることで、何種類かテンプレを作っておくのもありだと思いました。

- `next/image`をSSGで利用する方法について
  `next/image`はnextのデフォルト機能として存在するコンポーネントで、遅延描画や画像最適化などの様々なことを行なってくれるコンポーネントです。
  こちらをSSGでも使いたいとおもましたがそのまま利用するとbuild時などに以下のように出てしまいデフォルトでは使えません。
  
  > default loader is not compatible with `next export`.

  対応としては、以下のように自前のAPIを実装して作成すると問題なく使用できるようになります。
  ※ おそらくNodeサーバーとして動かせない兼ね合い？

  microCMSには画像最適化のためのAPIとして[imgix API](https://microcms.io/features/image-api)が用意されているのでこちらを使います。

  ```ts
    const microCMSLoader = ({ src }: ImageLoaderProps) => {
      return `${src}?auto=format`
    }
  ```

  ```tsx
  'use client';
  import Image from 'next/image';
  import { microCMSLoader } from '@/utils/imgix';
  import styles from './BaseImg.module.css';
  
  type BaseImg = {
    imgUrl: string;
    imgAlt: string;
    size: 'sm' | 'lg' | 'free';
    img?: {
      height: number;
      width: number;
    };
    extendClass?: string;
  };

  const sizeList = {
    sm: {
      size: 20,
    },
    lg: {
      size: 50,
    },
  };

  const BaseImg = ({ imgUrl, imgAlt, size, extendClass = '' }: BaseImg) => {
    if (size !== 'free') {
      return (
        <Image
          loader={microCMSLoader}
          src={imgUrl}
          alt={imgAlt}
          height={sizeList[size].size}
          width={sizeList[size].size}
          className={`${styles.baseImg} ${styles[size]} ${extendClass}`}
        />
      );
    } else {
      return (
        <img
          src={imgUrl}
          alt={imgAlt}
          className={`${styles.baseImg} ${styles[size]} ${extendClass}`}
        />
      );
    }
  };

  export { BaseImg };
  ```

## 残った課題
以下今回の残タスクとして残ったものです。
少しずつ改善する予定なので機会があれば、閲覧などよろしくお願いします。

 - sitemap
 - test、storybookの更新
 - axios => microCMS公式のモジュールを利用する。

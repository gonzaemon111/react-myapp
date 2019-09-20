# React入門 リポジトリ

1. Reactって何者？

Reactは、Webサイト上のUIパーツを構築するためのものJSライブラリです。

Facebookが開発し、OSSとして公開しています。

Reactには、主に3つの大きな特徴があります(公式サイトにデカデカと記載されています)。

- Declarative

JSが「手続き的な」言語であることに対して、reactは「宣言的な」ライブラリなのです。

この特徴によって、「宣言的な」言語であるHTMLを得意とするWebデザイナーにとっても、Reactは比較的とっつきやすいライブラリだと言われています。

- Component-Based

これは、言葉の通り「コンポーネントベースである」と言うことを意味します。

Reactでは様々なコンポーネントを組み合わせてUIを構築します。

コンポーネントを正しく理解することの近道になります。

- Learn Once, Write Anywhere

これは「一度覚えてしまえばどこにだって書ける」と言うことを意味します。

2. 何が優れているの?

Reactは「仮装DOM」と言う仕組みを備えているため、非常に高速なレンダリングを行うことができます。


3. どうやって使うの？

先に説明した通りReactは「ライブラリ」なので、インストールと言う概念はありません。

## コンポーネントについて

Reactではあらかじめ定義しておいたコンポーネントを必要に応じて利用します。

JavaやC#などのオブジェクト指向言語の経験がある方は「クラスの定義 ~インスタンスの生成、利用~」に非常によく似たイメージになると捉えてください。

次に、コンポーネントには、**プロパティ**と**ステート**と言う概念があります。プロパティはコンポーネントに与える属性のようなものです。

処理の内部で変数のように自由にアクセスできますが、コンポーネント自身が値を変更することはできません。

そして、ステートはコンポーネントの内部で扱う変数のようなもので、外部からアクセスすることはできません。

コンポーネント生成の際に初期化し、主にコンポーネントの状態(ステータス)を保持するために使用します。

コンポーネントの例

例: プロパティ
```javascript
// Componentの定義
class MyComponent extends React.Component {
  render() {
    // h1タグにプロパティの値を表示する。
    return React.createElement('h1', null, this.props.val)
  }
}

//componentの利用
ReactDOM.render(
  // プロパティ「val」に'hoge'をセットする。
  React.createElement(MyComponent, {val: 'hoge'}),
  document.getElementById('main')
);
```


例: ステート

```javascript
// Componentの定義

class MyComponent extends React.Component {
  constructor(props, context, updater) {
    super(props, context, updater)
    this.state = { status: 'Ready' }
  }

  render() {
    // h1タグにステートの値を表示する。
    return React.createElement('h1', null, this.state.status)
  }
}
```

---

## JSXについて

JSXとは、「JavaScript XML」の略で、一種のプログラミング言語です。JSXを使うことにより、「JavaScriptの中にHTMLを記述する」ような感覚でReactのコンポーネントを記述することが可能になります。

なお、JSXはReactの一部ではなく完全に独立した言語であるため、Reactプログラミングにおいて必ず使わなければならないと言うわけではありません。

しかしながら、JSXには圧倒的な利用価値があるため、よほどのことがない限りは利用される傾向にあります。

例: JSXを使ったHello World

```javascript
ReactDOM .render(
  React.createElement('h1', null, 'Hello World!!!'), document.getElementById('main')
);
```

```jsx
ReactDOM.render(
  <h1>Hello World!</h1>,
  document.getElementById('main')
);
```

### classではなく、className

Reactでは、JSの文法の一つであるclassと区別するために



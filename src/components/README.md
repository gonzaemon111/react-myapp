## 投稿機能

あらかた見た目が出来たところで、機能を追加していく。

投稿機能では、親コンポーネント（App）と子コンポーネント（Form）で以下のように役割を分担する

- App
  - データ(state)を管理
  - データ保存用関数の定義
  - 子コンポーネントへデータ保存用関数を受け渡し
- Form
  - 親コンポーネントの関数をpropsで受け取り実行

### `App.jsx`

状態管理(state)は親コンポーネントに行わせるようになるので、`src/components/App.jsx`を修正。

```jsx
import React, { Component } from 'react';
import Form from './Form';
import List from  './List';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: []
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  // データ保存
  handleAdd(e){
    console.log(e.target.title.value);
    e.preventDefault(); //これを書かないとリダイレクトされてしまう
  }
  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
        <Form handleAdd={this.handleAdd}/>
        <div className="siimple-rule"></div>
        <List/>
      </div>
    );
  }
}
```

`constructor`とデータ保存を行う関数`handleAdd`を定義。

`this.handleAdd = this.handleAdd.bind(this);`この部分ですが、定義した`handleAdd`関数内でthisを使用出来るようにする為に`constructor`内に定義しています。

`handleAdd(e)`として定義されていれば、受け取ったeを使って`e.target.子コンポーネントで定義したフォーム要素のname属性.value`で値を取得出来る。

### `Form.jsx`

#### inputに入力しデータを`console.log`に出力

`src/components/Form.sx`を修正
`form`タグにイベントハンドラ`onSubmit`を追記する。

```jsx
import React, { Component } from 'react';

const Form = (props) => (
  <form className="siimple-form" onSubmit={props.handleAdd}>
    <div className="siimple-form-field">
      <label className="siimple-label siimple--color-white">Your todo:</label>
      <input name="title" type="text" className="siimple-input"/>　<input type="submit" value="Add" className="siimple-btn siimple-btn--teal"/>
    </div>
  </form>
);

export default Form;
```

#### データ保存処理を書く。

`console.log`でフォームからデータが渡ってきていることを確認したら、保存処理を書いていきます。
`src/components/App.jsx`の`handleAdd`関数を以下のように書き換えます。

投稿機能の完成です。

しかし、まだ投稿したデータが表示されていないので、`List`を編集していきます。

### 保存されたデータを表示する

保存されたデータ(state)を表示するには、まず`src/components/App.jsx`を編集していきます。

```jsx
import React, { Component } from 'react';
import Form from './Form';
import List from  './List';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: []
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  // データ保存
  handleAdd(e){
    e.preventDefault();
    // フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
    this.state.todo.push({title: e.target.title.value});
    // setStateを使ってstateを上書き
    this.setState({todo: this.state.todo});
    // inputのvalueを空に
    e.target.title.value = '';
  }
  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
        <Form handleAdd={this.handleAdd}/>
        <div className="siimple-rule"></div>
        <List todos={this.state.todo}/>
      </div>
    );
  }
}
```


`<List todos={this.state.todo}/>` のように変更し、`state`の`todo`を子コンポーネントへ`todos`という変数名で受け渡します。

#### `List.jsx`

`src/components/List.jsx`を以下のように編集

```jsx
import React, { Component } from 'react';

let style = { maxWidth: '700px' };
let btn = { cursor: 'pointer' };

const List = (props) => (
  <ul className="siimple-list">
    {props.todos.map((todo, i) => {
      return <li key={i} className="siimple-list-item siimple--bg-white" style={style}>{todo.title} <span className="siimple-tag siimple-tag--error siimple-hover" style={btn}>Delete</span></li>
    })};
  </ul>
);

export default List;
```

親コンポーネント(App.jsx)でtodosを渡したので、子コンポーネント(List.jsx)でpropsを使い受け取り、ループを回しています。

この際にReactのルールでループで処理した要素には一意なKeyを指定する必要があります。なので、key={i}としています。


### 削除処理

投稿機能、表示機能まで作成したので、最後に削除機能を作成していきましょう。





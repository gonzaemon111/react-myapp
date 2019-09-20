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
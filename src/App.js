import React, { Component } from 'react';
import './App.css';
import AddTodo from './containers/AddTodo'
import TodoListContainer from './containers/TodoListContainer'
import FooterContainer from './containers/FooterContainer'

class App extends Component {
  render () {
    return (
      <div className="App">
        <AddTodo/>
        <TodoListContainer/>
        <FooterContainer/>
      </div>
    );
  }
}

export default App;

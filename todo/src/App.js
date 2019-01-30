import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

export default App;

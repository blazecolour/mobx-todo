import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1 className="app-title">Sick Todo List</h1>
        </div>
        <div className="app-body">
          <TodoForm />
          <TodoFilter />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;

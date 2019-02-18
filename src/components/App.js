import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import TodoFilter from './TodoFilter'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <TodoForm />
          <TodoFilter />
          <TodoList />
        </div>
      </div>
    )
  }
}

export default App

import React, { Fragment } from 'react'
import { observer, inject } from 'mobx-react'
import { compose, withProps } from 'recompose'
import TodoItem from './TodoItem'

export const TodoList = ({ todoStore: { filteredTodos } }) => (
  <Fragment>
    <div>
      {filteredTodos.map(todo => (
        <TodoItem
        key={todo.id}
        todo={todo}
        />
      ))}
    </div>
    {!filteredTodos.length && <h3>No todos</h3>}
  </Fragment>
)

const TodoListComposed = compose(
  inject('todoStore'),
  observer,
  withProps(({ todoStore: { filteredTodos } }) => (
    { todoStore: { filteredTodos } }
  ))
)(TodoList)

export default TodoListComposed

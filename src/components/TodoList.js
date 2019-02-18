import React, { Fragment } from 'react'
import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import TodoItem from './TodoItem'

export const TodoList = ({ todoStore }) => (
  <Fragment>
    <div>
      {todoStore.filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
    ))}
    </div>
      {
        !todoStore.filteredTodos.length &&
          <h3>
            No todos
          </h3>
      }
  </Fragment>
)

const TodoListComposed = compose(
  inject('todoStore'),
  observer
)(TodoList)

export default TodoListComposed

import React, { Fragment } from 'react'
import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import TodoDeleteButton from './TodoDeleteButton'
import TodoCompletedButton from './TodoCompletedButton'

export const TodoItem = ({ todo, todoStore }) => (
  <Fragment>
    <input
      className="matter-textfield-standard"
      value={todo.title}
      onChange={e => todo.setTitle(e.target.value)}
    />
    <div>
      <TodoCompletedButton
        onToggle={() => todo.toggleCompleted()}
        isCompleted={todo.isCompleted}
      />
      <TodoDeleteButton
      onDelete={() => todoStore.deleteTodo(todo.id)}
      />
    </div>
  </Fragment>
)

const TodoItemComposed = compose(
  inject('todoStore'),
  observer
)(TodoItem)

export default TodoItemComposed

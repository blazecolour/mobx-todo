import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import TodoDeleteButton from './TodoDeleteButton'
import TodoCompletedButton from './TodoCompletedButton'
import cx from 'classnames'

@inject('todoStore')
@observer
class TodoItem extends Component {
  render() {
    const { todo, todoStore } = this.props
    const cn = cx(
      {
        completed: todo.isCompleted
      },
      'todo-item'
    )

    return (
      <div className={cn}>
        <div className="todo-item-title">
          <input
            className="matter-textfield-standard"
            value={todo.title}
            onChange={e => todo.setTitle(e.target.value)}
          />
          <div className="input-highlight" />
        </div>
        <div className="options">
          <TodoCompletedButton
            onToggle={() => todo.toggleCompleted()}
            isCompleted={todo.isCompleted}
          />
          <TodoDeleteButton onDelete={() => todoStore.deleteTodo(todo.id)} />
        </div>
      </div>
    )
  }
}

export default TodoItem

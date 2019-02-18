import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import TodoItem from './TodoItem'

@inject('todoStore')
@observer
class TodoList extends Component {
  render() {
    const { todoStore } = this.props
    return (
      <div>
        <div>
              {todoStore.filteredTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                />
              ))
            }
        </div>
        {
          !todoStore.filteredTodos.length &&
            <h3>
              No todos
            </h3>
        }
      </div>
    );
  }
}

export default TodoList

import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './TodoForm.css'
import './Button.css'

@inject('todoStore')
@observer
class TodoForm extends Component {
  state = {
    newTitle: ''
  }

  onAddClick(e) {
    e.preventDefault()
    this.props.todoStore.addTodo(this.state.newTitle)
    this.setState({
      newTitle: ''
    })
  }
  
  changeTitle(e) {
    this.setState({
      newTitle: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.onAddClick(e)}>
        <input
          className="matter-textfield-standard"
          type="text"
          placeholder='Add todo...'
          required
          value={this.state.newTitle}
          autoFocus
          onChange={(e) => this.changeTitle(e)}
        />
        <button
          className="matter-button-outlined"
          type="submit">
          Add todo
        </button>
        </form>
      </div>
    );
  }
}

export default TodoForm

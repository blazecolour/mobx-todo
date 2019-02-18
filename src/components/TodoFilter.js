import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import FilterTypes from '../constants/FilterTypes'
import TodoFilterItem from './TodoFiltertem'

@inject('todoStore')
@observer
class TodoFilter extends Component {

  onFilterChange(filter) {
    this.props.todoStore.changeFilter(filter)
  }

  onSearchChange(e) {
    this.props.todoStore.changeSearch(e.target.value)
  }

  render() {
    const { todoStore } = this.props;
    return (
      <div>
        <ul>
          {
            Object.keys(FilterTypes).map(type => (
              <TodoFilterItem
                key={type}
                filterType={type}
                onClick={() => this.onFilterChange(type)}
                isActive={type === todoStore.filter}
              />
            ))
          }
        </ul>
        <div>
          <input
            className="matter-textfield-standard"
            placeholder='Search...'
            value={todoStore.search}
            onChange={(e) => this.onSearchChange(e)}
          />
        </div>
      </div>
    );
  }
}

export default TodoFilter

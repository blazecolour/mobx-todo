import { observable, computed, action } from 'mobx'
import _ from 'lodash'
import FilterTypes from '../constants/FilterTypes';

class Todo {
  @observable id = null
  @observable title = ''
  @observable isCompleted = false

  constructor({ title, id }) {
    this.title = title
    this.id = id
  }

  @action toggleCompleted() {
    this.isCompleted = !this.isCompleted
  }

  @action setTitle(title = '') {
    this.title = title
  }
}

class Todos {

  // @observable id = null
  // @observable title = ''
  // @observable isCompleted = false

  @observable todosMap = {}
  @observable filter = FilterTypes.ALL
  @observable search = ''

  @computed get todos() {
    return Object.keys(this.todosMap).map(id => this.todosMap[id])
  }
  @computed get searchedTodos() {
    return this.todos.filter(todo => todo.title.toLowerCase().includes(this.search))
  }
  @computed get filteredTodos() {
    switch (this.filter) {
      case FilterTypes.ALL:
        return this.searchedTodos
      case FilterTypes.ACTIVE:
        return this.searchedTodos.filter(todo => !todo.isCompleted)
      case FilterTypes.COMPLETED:
        return this.searchedTodos.filter(todo => todo.isCompleted)
      default:
        return this.searchedTodos
    }
  }

  @action addTodo(title) {
    const id = _.uniqueId()
    this.todosMap = {
      ...this.todosMap,
      [id]: new Todo({ title, id })
    //  [id]: {title, id}
    }
  }

  @action deleteTodo(id) {
    this.todosMap = _.omit(this.todosMap, id)
  }

  @action changeFilter(filter) {
    if (FilterTypes[filter]) {
      this.filter = filter
    }
  }

  @action changeSearch(term) {
    this.search = term.toLowerCase();
  }

  // @action toggleCompleted(completed = !this.isCompleted) {
  //   this.isCompleted = !!completed
  // }

  // @action setTitle(title) {
  //   this.title = title || ''
  // }

}

export default {
  todoStore: new Todos()
}

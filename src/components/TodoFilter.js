import React, { Fragment } from 'react'
import { observer, inject } from 'mobx-react'
import { compose, withHandlers, withProps } from 'recompose'
import FilterTypes from '../constants/FilterTypes'
import TodoFilterItem from './TodoFiltertem'

// @inject('todoStore')
// @observer
// class TodoFilter extends Component {

// onFilterChange(filter) {
//   this.props.todoStore.changeFilter(filter)
// }

// onSearchChange(e) {
//   this.props.todoStore.changeSearch(e.target.value)
// }

//   render() {
//     const { todoStore } = this.props;
//     return (
//       <div>
//         <ul>
//           {
//             Object.keys(FilterTypes).map(type => (
//               <TodoFilterItem
//                 key={type}
//                 filterType={type}
//                 onClick={() => this.onFilterChange(type)}
//                 isActive={type === todoStore.filter}
//               />
//             ))
//           }
//         </ul>
//         <div>
//           <input
//             className="matter-textfield-standard"
//             placeholder='Search...'
//             value={todoStore.search}
//             onChange={(e) => this.onSearchChange(e)}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default TodoFilter

export const TodoFilter = ({ todoStore }) => (
  <Fragment>
    <ul>
      {Object.keys(FilterTypes).map(type => (
        <TodoFilterItem
          key={type}
          filterType={type}
          onClick={() => this.onFilterChange(type)}
          isActive={type === todoStore.filter}
        />
      ))}
    </ul>
    <div>
      <input
        className="matter-textfield-standard"
        placeholder="Search..."
        value={todoStore.search}
        onChange={e => this.onSearchChange(e)}
      />
    </div>
  </Fragment>
)

const TodoFilterComposed = compose(
  inject('todoStore'),
  observer,
  withProps(({ todoStore: { filter, search, changeFilter, changeSearch } }) => ({
    todoStore: { filter, search, changeFilter, changeSearch }
  })),
  withHandlers({
    onFilterChange: filter => changeFilter(filter),
    onSearchChange: e => changeSearch(e.target.value)
  })
)(TodoFilter)

export default TodoFilterComposed

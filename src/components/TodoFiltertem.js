import React from 'react'
import './TodoFilterItem.css'

const TodoFilterItem = ({ onClick, filterType }) => {
  return (
    <li>
      <span>
        <input
          type="radio"
          name="filterType"
          value={filterType}
          onChange={onClick} />
        {filterType}
      </span>
    </li>
  )
}

export default TodoFilterItem

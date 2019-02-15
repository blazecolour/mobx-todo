import React from 'react'
import classnames from 'classnames'

export default ({ isActive, onClick, filterType }) => {
  const classes = classnames({
    'is-active': isActive
  }, 'filter-item')

  return (
    <li
      onClick={onClick}
      className={classes}
    >
      {filterType}
    </li>
  )
}

import React from 'react'
import cx from 'classnames'
import './Button.css'

const TodoCompletedButton = ({ onToggle, isCompleted }) => (
  <button
    className={cx(
      { 'is-checked': isCompleted },
      'matter-button-outlined'
      )}
    onClick={onToggle}
  >
    completed
  </button>
)

export default TodoCompletedButton

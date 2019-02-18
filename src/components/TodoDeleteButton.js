import React from 'react'
import './Button.css'

const TodoDeleteButton = ({ onDelete }) => (
  <button
    className="matter-button-outlined"
    onClick={onDelete}>
      clear
  </button>
)

export default TodoDeleteButton

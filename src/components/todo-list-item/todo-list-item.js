import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  }

  return (
    <span className='todo-list-item'>
      <span
        className='todo-list-item-label'
        style={style}>
        {label}
      </span>

      <button tyoe='button' className='btn btn-outline-danger btn-sm float-right'>
        <i className='fa fa-trash-o'></i>
      </button>

      <button tyoe='button' className='btn btn-outline-success btn-sm float-right'>
        <i className='fa fa-exclamation'></i>
      </button>
      
    </span>
  )
}

export default TodoListItem; 
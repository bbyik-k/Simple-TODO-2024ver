import React from 'react';
import { BsTrash3 } from 'react-icons/bs';

export default function TodoItem({ id, name, completed, handleDelete, handleCheck }) {
  return (
    <li className='todo-item'>
      <input type='checkbox' className='todo-checkbox' checked={completed} onChange={() => handleCheck(id)} />

      <span className='todo-text'>{name}</span>
      <button className='delete-button'>
        <BsTrash3 className='delete-button-icon' onClick={() => handleDelete(id)} />
      </button>
    </li>
  );
}

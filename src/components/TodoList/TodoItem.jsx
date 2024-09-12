import React from 'react';
import { BsTrash3 } from 'react-icons/bs';

export default function TodoItem({ id, name, completed, handleDelete, handleCheck }) {
  // handleCheck 등의 logic 을 여기서 작성할 것!
  return (
    <li className='todo-item'>
      <input type='checkbox' className='todo-checkbox' checked={completed} onChange={() => handleCheck(id)} />
      {/* input & label 구조가 더 적합
        고유 id 생성 시 useId 훅 개발됨
      */}
      <span className='todo-text'>{name}</span>
      <button className='delete-button'>
        <BsTrash3 className='delete-button-icon' onClick={() => handleDelete(id)} />
      </button>
    </li>
  );
}

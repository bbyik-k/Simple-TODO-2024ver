import React, { useState } from 'react';
import '../../styles/AddTodo.css';

export default function AddTodo({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  const handleAddClick = () => {
    if (inputValue.trim() === '') return;
    console.log(inputValue);
    onAddTodo(inputValue);
  };
  return (
    <div className='todo-footer'>
      <input type='text' placeholder='Add Todo' onChange={handleChange} className='todo-input' value={inputValue} />
      <button className='todo-add-button' onClick={handleAddClick}>
        ADD
      </button>
    </div>
  );
}

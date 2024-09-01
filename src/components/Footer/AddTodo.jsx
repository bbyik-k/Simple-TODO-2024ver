import React, { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  const handleAddClick = () => {
    console.log(inputValue);
    onAddTodo(inputValue);
  };
  return (
    <div>
      <input type='text' placeholder='Add Todo' onChange={handleChange} className='todo-input' value={inputValue} />
      <button className='todo-add-button' onClick={handleAddClick}>
        ADD
      </button>
    </div>
  );
}

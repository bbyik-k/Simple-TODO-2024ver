import React from 'react';
import ModeToggle from './ModeToggle';
import FilterButtons from './FilterButtons';
import '../../styles/Header.css';

export default function Header({ handleState, todoState }) {
  return (
    <div className='todo-header'>
      <ModeToggle />
      <FilterButtons handleState={handleState} todoState={todoState} />
    </div>
  );
}

import React from 'react';
import '../../styles/Header.css';

export default function FilterButtons({ handleState, todoState }) {
  // const getButtonClass(state)=>{
  // return todoState ==
  // }
  return (
    <ul className='filter-container'>
      <li
        className={`filter-button ${todoState === 'all' ? 'active' : ''}`}
        onClick={() => {
          handleState('all');
        }}
      >
        All
      </li>
      <li
        className={`filter-button ${todoState === 'active' ? 'active' : ''}`}
        onClick={() => {
          handleState('active');
        }}
      >
        Active
      </li>
      <li
        className={`filter-button ${todoState === 'completed' ? 'active' : ''}`}
        onClick={() => {
          handleState('completed');
        }}
      >
        Completed
      </li>
    </ul>
  );
}

import React from 'react';
import '../../styles/Header.css';

export default function FilterButtons({ handleState }) {
  return (
    <ul className='filter-container'>
      <li
        className='filter-button'
        onClick={() => {
          handleState('all');
        }}
      >
        All
      </li>
      <li
        className='filter-button'
        onClick={() => {
          handleState('active');
        }}
      >
        Active
      </li>
      <li
        className='filter-button'
        onClick={() => {
          handleState('completed');
        }}
      >
        Completed
      </li>
    </ul>
  );
}

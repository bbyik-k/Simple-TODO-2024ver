import React from 'react';
import '../../styles/Header.css';

export default function FilterButtons() {
  return (
    <ul className='filter-container'>
      <li className='filter-button'>All</li>
      <li className='filter-button'>Active</li>
      <li className='filter-button'>Completed</li>
    </ul>
  );
}

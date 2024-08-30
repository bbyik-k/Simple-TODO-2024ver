import React, { Component } from 'react';
import { BsTrash3 } from 'react-icons/bs';
import './AppTodo.css';

class AppTodo extends Component {
  render() {
    return (
      <div className='todo-app-container'>
        <ul>
          <li className='todo-item'>
            <input type='checkbox' className='todo-checkbox' />
            <span className='todo-text'>공부</span>
            <button className='delete-button'>
              <BsTrash3 className='delete-button-icon' />
            </button>
          </li>
          <li>식사</li>
          <li>운동</li>
        </ul>
      </div>
    );
  }
}

export default AppTodo;

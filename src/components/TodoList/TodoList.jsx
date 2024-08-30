import React from 'react';
import TodoItem from './TodoItem';
import '../../styles/TodoList.css';

export default function TodoList() {
  return (
    <div className='todo-app-container'>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
}

const initialTodo = {
  id: '1',
  name: '운동',
  completed: false,
};

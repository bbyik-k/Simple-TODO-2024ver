import React, { useState } from 'react';
import TodoItem from './TodoItem';
import '../../styles/TodoList.css';

export default function TodoList() {
  const [todoList, setTodo] = useState(initialTodo);
  const handleDelete = (id) => {
    console.log('delete!');
    console.log(id);

    setTodo((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div className='todo-app-container'>
      <ul>
        {todoList.map((todo) => (
          <TodoItem id={todo.id} name={todo.name} handleDelete={handleDelete} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

const initialTodo = [
  { id: '1', name: '운동', completed: true },
  { id: '2', name: '공부', completed: false },
  { id: '3', name: '야마', completed: true },
];

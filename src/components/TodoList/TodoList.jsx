import React, { useState } from 'react';
import TodoItem from './TodoItem';
import '../../styles/TodoList.css';

export default function TodoList({ todoList, handleDelete }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem id={todo.id} name={todo.name} handleDelete={handleDelete} key={todo.id} />
      ))}
    </ul>
  );
}

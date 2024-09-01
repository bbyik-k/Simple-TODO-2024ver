import React, { useState } from 'react';
import './styles/AppTodo.css';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/Footer/AddTodo';

export default function AppTodo_() {
  const [todoList, setTodo] = useState(initialTodo);

  const handleDelete = (id) => {
    console.log('delete!');
    console.log(id);
    setTodo((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };
  const handleAdd = (name) => {
    setTodo((prev) => {
      return [...prev, { id: Date.now().toString(), name, completed: false }];
    });
  };

  return (
    <div className='todo-app-container'>
      <TodoList todoList={todoList} handleDelete={handleDelete} />
      <AddTodo onAddTodo={handleAdd} />
    </div>
  );
}

const initialTodo = [
  { id: '1', name: '운동', completed: true },
  { id: '2', name: '공부', completed: false },
  { id: '3', name: '야마', completed: true },
];

import React, { useState } from 'react';
import './styles/AppTodo.css';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/Footer/AddTodo';
import Header from './components/Header/Header';
import { ThemeProvider } from './context/ThemeContext';

export default function AppTodo_() {
  const [todoList, setTodo] = useState(initialTodo);
  // const [todoState, setTodoState] = useState('active');
  const [todoState, setTodoState] = useState('all');
  // const [todoState, setTodoState] = useState('completed');

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

  const handleState = (state) => {
    setTodoState(state);
  };

  return (
    <ThemeProvider>
      <div className='todo-app-container'>
        <Header handleState={handleState} todoState={todoState} />
        <TodoList todoList={todoList} handleDelete={handleDelete} todoState={todoState} />
        <AddTodo onAddTodo={handleAdd} />
      </div>
    </ThemeProvider>
  );
}

const initialTodo = [
  { id: '1', name: '운동', completed: true },
  { id: '2', name: '공부', completed: false },
  { id: '3', name: '야마', completed: true },
];

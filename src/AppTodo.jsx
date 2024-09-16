import React, { useState } from 'react';
import './styles/AppTodo.css';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/Footer/AddTodo';
import Header from './components/Header/Header';
import { ThemeProvider } from './context/ThemeContext';

export default function AppTodo_() {
  const initialTodo = JSON.parse(localStorage.getItem('todoList') || '[]');
  const [todoList, setTodo] = useState(initialTodo);

  console.log(initialTodo);

  // const [todoState, setTodoState] = useState('active');
  //filter list 를 array로 지정해두면 안전할 것
  const [todoState, setTodoState] = useState('all');
  // const [todoState, setTodoState] = useState('completed');

  const setLocal = (arr) => {
    // console.log('setLocal');
    // console.log(todoList);
    if (!arr) return;
    localStorage.setItem('todoList', JSON.stringify(arr));
  };

  // 이중 구조? or 바로 setTodoState 호출
  const handleState = (state) => {
    setTodoState(state);
  };

  const handleDelete = (id) => {
    setTodo((prev) => {
      const delArr = prev.filter((todo) => todo.id !== id);

      setLocal(delArr);
      return delArr;
    });
  };
  const handleAdd = (name) => {
    setTodo((prev) => {
      const addArr = [...prev, { id: Date.now().toString(), name, completed: false }];

      setLocal(addArr);
      return addArr;
    });
  };

  const handleCheck = (id) => {
    setTodo((prev) => {
      const checkArr = prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));

      setLocal(checkArr);
      return checkArr;
    });
  };

  return (
    <ThemeProvider>
      <div className='todo-app-container'>
        <Header handleState={handleState} todoState={todoState} />
        <TodoList todoList={todoList} handleDelete={handleDelete} todoState={todoState} handleCheck={handleCheck} />
        <AddTodo onAddTodo={handleAdd} />
      </div>
    </ThemeProvider>
  );
}

const initialTodo_ = [
  { id: '1', name: '운동', completed: true },
  { id: '2', name: '공부', completed: false },
  { id: '3', name: '야마', completed: true },
];

// console.log(initialTodo_);

const initStr = initialTodo_.toString();
// console.log(JSON.parse(initStr));

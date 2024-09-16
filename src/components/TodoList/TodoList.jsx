import React from 'react';
import TodoItem from './TodoItem';
import '../../styles/TodoList.css';

export default function TodoList({ todoList, handleDelete, todoState, handleCheck }) {
  //필터링 함수로 분리! + 단순화 가능
  const filteredTodos = todoList.filter((todo) => {
    if (todoState === 'all') return true;
    if (todoState === 'active') return !todo.completed;
    if (todoState === 'completed') return todo.completed;
    return false;
  });

  return (
    <ul className='todo-list'>
      {filteredTodos.map((todo) => (
        <TodoItem id={todo.id} name={todo.name} handleDelete={handleDelete} key={todo.id} completed={todo.completed} handleCheck={handleCheck} />
      ))}
    </ul>
  );
}

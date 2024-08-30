import React, { Component } from 'react';
import { BsTrash3 } from 'react-icons/bs';
import './styles/AppTodo.css';
import TodoList from './components/TodoList/TodoList';

class AppTodo extends Component {
  render() {
    return <TodoList />;
  }
}

export default AppTodo;

import React from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import '../../styles/Header.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function ModeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return <div>{darkMode ? <MdDarkMode className='toggle-button' onClick={() => toggleTheme()} /> : <MdOutlineLightMode className='toggle-button' onClick={() => toggleTheme()} />}</div>;
}

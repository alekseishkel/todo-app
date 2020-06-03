import React from 'react';

import AppHeader from '../app-header'
import ItemStatusFilter from '../item-status-filter'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'

import './app.css';

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', id: 1 },
    { label: 'Make Awesome App', id: 2 },
    { label: 'Make a Lunch', id: 3 }
  ]

  return (
    <div className='todo-app'>
      <AppHeader toDo={1} done={3} />
      <div className='top-panel'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
}

export default App;
import React, { Component } from 'react';

import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddItem from '../item-add'

import './app.css';

export default class App extends Component {
  constructor() {
    super();
    this.maxId = 100;

    this.state = {
      todoData: [
        { label: 'Drink Coffee', id: 1 },
        { label: 'Make Awesome App', id: 2 },
        { label: 'Make a Lunch', id: 3 }
      ]
    };

    this.deleteItem = (id) => {
      this.setState(({ todoData }) => {
        console.log(todoData);
        const index = todoData.findIndex((el) => el.id === id);

        const newTodoData = [...todoData.slice(0, index), ...todoData.slice(index + 1)];

        return {
          todoData: newTodoData
        };
      });
    };

    this.addItem = (text) => {
      const newItem = {
        label: text, id: this.maxId++
      };

      this.setState(({ todoData }) => {
        const newTodoData = [...todoData, newItem];

        return {
          todoData: newTodoData
        };
      });
    };
  };

  render() {
    return (
      <div className='todo-app'>
        <AppHeader toDo={1} done={3} />
        <div className='top-panel'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem} />
        <AddItem onItemAdd={this.addItem} />
      </div>
    );
  };
};

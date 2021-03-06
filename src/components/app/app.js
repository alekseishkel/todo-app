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

    this.createTodoItem = (label) => {
      return {
        label: label,
        important: false,
        done: false,
        id: this.maxId++,
      }
    };

    this.state = {
      todoData: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Make a Lunch')
      ],
      term: '',
      filter: 'all'
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
      const newItem = this.createTodoItem(text);

      this.setState(({ todoData }) => {
        const newTodoData = [...todoData, newItem];

        return {
          todoData: newTodoData
        };
      });
    };

    this.toggleProperty = (arr, id, propName) => {
      const index = arr.findIndex((el) => el.id === id);

      const oldItem = arr[index];
      const newItem = {
        ...oldItem, 
        [propName]: !oldItem[propName]
      };

      return [
        ...arr.slice(0, index), 
        newItem,
        ...arr.slice(index + 1)
      ];
    }

    this.onToggleImportant = (id) => {
      this.setState(({todoData}) => {
        return {
          todoData: this.toggleProperty(todoData, id, `important`)
        };
      });
    };

    this.onToggleDone = (id) => {
      this.setState(({todoData}) => {
        return {
          todoData: this.toggleProperty(todoData, id, `done`)
        };
      });
    };
    
    this.onSearchChange = (evt) => {
      this.setState(({term: evt.target.value}));
    };

    this.onFilterChange = (filter) => {
      this.setState({filter});
    };

    this.search = (items, term) => {
      return items.filter((item) => item.label.toLowerCase().includes(term.toLowerCase()));
    }

    this.filter = (items, filter) => {
      switch (filter) {
        case 'all':
          return items;
        case 'active':
          return items.filter((item) => !item.done);
        case 'done':
          return items.filter((item) => item.done);
        default:
          return items;
      }
    } 
  };

  render() {
    const { todoData, term, filter } = this.state;

    const visibleElements = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className='top-panel'>
          <SearchPanel 
            term={term}
            onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter 
            filter = {filter}
            onFilterChange = {this.onFilterChange}/>
        </div>
        <TodoList
          todos={visibleElements}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <AddItem onItemAdd={this.addItem} />
      </div>
    );
  };
};

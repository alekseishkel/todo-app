import React, { Component } from 'react';

import './item-add.css'

export default class AddItem extends Component {
  constructor() {
    super();

    this.state = {
      label: ''
    };

    this.onInputChange = (evt) => {
      this.setState({
        label: evt.target.value
      });
    };

    this.onSubmit = (evt) => {
      evt.preventDefault();
      this.props.onItemAdd(this.state.label);
      this.setState({
        label: ''
      });
    };
  };

  render() {
    return (
      <form className="item-add" onSubmit={this.onSubmit}>
        <input 
          type='text'
          className='form-control'
          onChange={this.onInputChange}
          placeholder='What needs to be done'
          value={this.state.label}
          />
        <button 
          className='btn btn-outline-secondary'>
            Add Item
        </button>
      </form>
    )
  };
};

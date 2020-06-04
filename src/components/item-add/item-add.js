import React, { Component } from 'react';

import './item-add.css'

export default class AddItem extends Component {
  render() {
    return (
      <div className="item-add">
        <button 
          className='btn btn-outline-secondary'
          onClick={() => this.props.onItemAdd('hello')}>Add Item</button>
      </div>
    )
  };
};

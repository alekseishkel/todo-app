import React from 'react';
import './search-panel.css'

const SearchPanel = ({onSearchChange}) => {
  const searchText = `Type here to search`
  return <input 
          className='form-control search-input' 
          placeholder={searchText} 
          onChange={onSearchChange}
          />;
}

export default SearchPanel;
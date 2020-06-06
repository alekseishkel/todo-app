import React from 'react';
import './search-panel.css'

const SearchPanel = ({term, onSearchChange}) => {
  const searchText = `Type here to search`
  return <input 
          className='form-control search-input' 
          placeholder={searchText} 
          onChange={onSearchChange}
          value={term}
          />;
}

export default SearchPanel;
import React from 'react';

function SearchBar({ searchTerm, onSearch }) {
  const handleSearchChange = (event) => {
    onSearch(event.target.value); 
  };

  return (
    <input
      
      value={searchTerm}
      onChange={handleSearchChange}
      className="search-input"
    />
  );
}

export default SearchBar;

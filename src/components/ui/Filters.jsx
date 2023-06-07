import React from 'react';
import Filter from './Filter';

function Filters({ filters, onClear }) {
  return (
    <div className="filters-container">
        <div>
      {filters.map((filter => <Filter key={filter} filter={filter} /> ))}
      </div>
        <button onClick={() => onClear()}> Clear</button>
    </div>
  )
}

export default Filters;

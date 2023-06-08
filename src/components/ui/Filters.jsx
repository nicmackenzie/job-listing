import Filter from './Filter';

function Filters({ filters, onClear }) {
  return (
    <div className="filter-container">
      <div>
        {filters.map(filter => (
          <Filter key={filter} filter={filter} />
        ))}
      </div>
      <button className="clear-button" onClick={() => onClear()}>
        {' '}
        Clear
      </button>
    </div>
  );
}

export default Filters;

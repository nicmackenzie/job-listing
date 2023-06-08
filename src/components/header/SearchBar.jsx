function SearchBar({ searchTerm, onSearch }) {
  const handleSearchChange = event => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search filters"
      value={searchTerm}
      onChange={handleSearchChange}
      className="search-input"
    />
  );
}

export default SearchBar;

import Navbar from '../navbar/Navbar';
import Filters from '../ui/Filters.jsx';
import SearchBar from './SearchBar';

function Header({ user, filters, onClear, onLogout, onSearch, searchTerm }) {
  return (
    <header className="-full h-36 bg-primary p-4">
      <Navbar user={user} onLogout={onLogout} />
      <SearchBar onSearch={onSearch} searchTerm={searchTerm} />
      {filters.length > 0 && <Filters filters={filters} onclear={onClear} />}
    </header>
  );
}

export default Header;

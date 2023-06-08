import { useContext } from 'react';
import JobListing from '../components/JobListing';
import Header from '../components/header/Header';
import { AppContext } from '../context/app-context';

function App() {
  const { filters, userDetails, onClearFilters, onLogout } =
    useContext(AppContext);
  return (
    <>
      <Header
        filters={filters}
        user={userDetails}
        onClear={onClearFilters}
        onLogout={onLogout}
      />
      <JobListing />
    </>
  );
}

export default App;

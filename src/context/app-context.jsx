import { useState, useEffect, createContext } from 'react';

const AppContext = createContext({
  jobListings: [],
  users: [],
  userDetails: {},
  onLogin: () => {},
  filters: [],
  onAddFilter: () => {},
  onAddJob: () => {},
  onClearFilters: () => {},
  onClearFilter: () => {},
  onLogout: () => {},
});

const AppProvider = ({ children }) => {
  const [jobListings, setJobListings] = useState([]);
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState();
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/jobs')
      .then(rs => rs.json())
      .then(jobs => setJobListings(jobs));

    fetch('http://localhost:8001/users')
      .then(rs => rs.json())
      .then(users => setUsers(users));
  }, []);

  const onLogin = user => {
    setUserDetails(user);
  };

  const onAddFilter = filter => {
    setFilters(state => {
      if (state.includes(filter)) {
        return state;
      } else {
        return [...state, filter];
      }
    });
  };

  const onAddJob = job => {
    setJobListings(state => [job, ...state]);
  };

  const onClearFilters = () => {
    setFilters([]);
  };

  const onClearFilter = filter => {
    const i = filters.findIndex(elm => elm === filter);
    const clonedFilters = [...filters];
    clonedFilters.splice(i, 1);
    setFilters(clonedFilters);
  };

  const onLogout = () => {
    setUserDetails(null);
  };

  return (
    <AppContext.Provider
      value={{
        jobListings,
        users,
        userDetails,
        onLogin,
        onAddFilter,
        filters,
        onAddJob,
        onClearFilters,
        onClearFilter,
        onLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

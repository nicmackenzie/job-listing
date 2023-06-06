import { useState, useEffect, createContext } from 'react';

const AppContext = createContext({
  jobListings: [],
  users: [],
  userDetails: {},
  onLogin: () => {},
  filters: [],
  onAddFilter: () => {},
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

  return (
    <AppContext.Provider
      value={{ jobListings, users, userDetails, onLogin, onAddFilter, filters }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

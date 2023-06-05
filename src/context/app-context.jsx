import { useState, useEffect, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [jobListings, setJobListings] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/jobs')
      .then(rs => rs.json())
      .then(jobs => setJobListings(jobs));

    fetch('http://localhost:8001/users')
      .then(rs => rs.json())
      .then(users => setUsers(users));
  }, []);

  return (
    <AppContext.Provider value={{ jobListings, users }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

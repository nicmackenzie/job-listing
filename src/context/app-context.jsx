import { useState, useEffect, createContext } from 'react';

const AppContext = createContext({
  jobListings: [],
  users: [],
  userDetails: {},
  onLogin: () => {},
});

const AppProvider = ({ children }) => {
  const [jobListings, setJobListings] = useState([]);
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState();

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

  return (
    <AppContext.Provider value={{ jobListings, users, userDetails, onLogin }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

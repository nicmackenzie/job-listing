import { useState, useEffect, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/jobs')
      .then(rs => rs.json())
      .then(jobs => setJobListings(jobs));
  }, []);

  return (
    <AppContext.Provider value={{ jobListings }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

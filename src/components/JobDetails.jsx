import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/app-context';
import Navbar from './navbar/Navbar';

function JobDetails() {
  const [job, setJob] = useState();
  const { jobListings, onLogout, userDetails } = useContext(AppContext);
  const { id } = useParams();
  
  useEffect(() => {
    if (jobListings.length > 0) {
      const found = jobListings.find(listing => +listing.id === +id);
      if (!found) {
        throw new Error('not found');
      } else {
        setJob(found);
      }
    }
  }, [id, jobListings]);
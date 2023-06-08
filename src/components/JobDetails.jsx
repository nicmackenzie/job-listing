import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/app-context';
import Navbar from './navbar/Navbar';

function JobDetails() {
  const [job, setJob] = useState();
  const { jobListings, onLogout, userDetails } = useContext(AppContext);
  const { id } = useParams();
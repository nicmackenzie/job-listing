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

  return (
    <div>
      <header className="-full h-36 bg-primary p-4">
        <Navbar user={userDetails} onLogout={onLogout} />
      </header>
      {job && (
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl lg:text-4xl text-primary-700 font-bold mb-4">
                {job.position}.
              </h1>
              <div className="text-lg">
                <span className="font-semibold">Company:</span> {job.company}.
              </div>
              <div className="text-lg">
                <span className="font-semibold">Location:</span> {job.location}.
              </div>
              <div className="text-lg">
                <span className="font-semibold">Role:</span> {job.role}.
              </div>
              <div className="text-lg">
                <span className="font-semibold">Level:</span> {job.level}.
              </div>
              <div className="text-lg">
                <span className="font-semibold">Contract:</span> {job.contract}.
              </div>
              <div className="text-lg">
                <span className="font-semibold">Salary:</span> {job.salary}.
              </div>
            </div>
            <img
              src={job.logo}
              alt={job.company}
              className="hidden lg:inline-flex w-32 h-32"
            />
          </div>
          <div className="mt-6">
            <h3 className="underline text-3xl font-bold mb-3 text-primary">
              Duties and Responsibilities
            </h3>
            {job.dutiesAndRoles.map(duty => (
              <p key={duty}>- {duty}</p>
            ))}

            <h3 className="underline text-3xl font-bold mb-3 text-primary mt-12">
              Skills Required
            </h3>
            {job.skillsRequired.map(skill => (
              <p key={skill}>- {skill}</p>
            ))}

            <h3 className="underline text-3xl font-bold mb-3 text-primary mt-12">
              Qualifications
            </h3>
            {job.qualifications.map(qualification => (
              <p key={qualification}>- {qualification}</p>
            ))}
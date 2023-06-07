import { useContext } from 'react';
import Listing from './Listing';
import { AppContext } from '../context/app-context';

function JobListing() {
  const { jobListings } = useContext(AppContext);
  return (
    <div className="flex flex-col gap-4 mt-4">
      {jobListings.map(job => {
        return <Listing key={job.id} job={job} />;
      })}
    </div>
  );
}

export default JobListing;

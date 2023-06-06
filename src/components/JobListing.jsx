import React from 'react'
import Listing from './Listing'

function JobListing({jobs}) {
  console.log(jobs)
  return (
    <div>
      {jobs.map((job)=>{
        return <Listing key={job.id} job={job}/>
      })}
    </div>
  )
}

export default JobListing
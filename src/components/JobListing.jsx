import React,{useContext} from 'react'
import Listing from './Listing'
import { AppContext } from '../context/app-context'

function JobListing() {
  // console.log(jobs)
 const {jobListings}= useContext(AppContext)
  return (
    <div className=' flex flex-col gap-2'>
      {jobListings.map((job)=>{
        return <Listing key={job.id} job={job}/>
      })}
    </div>
  )
}

export default JobListing
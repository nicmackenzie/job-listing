import React,{useContext} from 'react'
import { AppContext } from '../context/app-context'
function Listing({job}) {
  const {onAddFilter}=useContext(AppContext)
  function handleClick(e){
    onAddFilter(e.target.textContent)
  }
  return (
    <div className="card">
      <div className="flex gap-4 items-center">
<img src={job.logo} alt="company logo" className="w-14 h-14 rounded-full"/>
  <div className="flex flex-col gap-1 mt-5 lg:mt-0">
    <div className="flex gap-1 items-center">
  <p className="text-primary text-[12px]">{job.company}</p>
  </div>
      <div>
      <p className="text-primary text-[15px] font-bold">{job.position}</p>
      </div>
          <div className="flex items-center gap-4 text-[12px] text-primary-600">
            <div>{job.postedAt}</div>
            <div>{job.contract}</div>
            <div>{job.location}</div>
          </div>
        </div>
      </div>
              <div className="flex gap-2 items-center flex-wrap" >
                <span onClick={handleClick} className="filter-pills role">{job.role}</span>
                <span onClick={handleClick} className="filter-pills level">{job.level}</span>
                {job.languages.map((language)=>{
                  return <span onClick={handleClick} className="filter-pills language" key={language}>{language}</span>
                })}
              </div>
    </div>
  )
}

export default Listing
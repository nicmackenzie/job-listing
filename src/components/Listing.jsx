import React from 'react'

function Listing({job}) {
  
  return (
    <div className="">
<img src={job.logo} alt="company logo"/>
  <div className="">
  <p>{job.company}</p>
  </div>
      <div>
      <h4>{job.position}</h4>
      </div>
          <div>
            <p>{job.postedAt}</p>
            <p>{job.contract}</p>
            <p>{job.locaion}</p>
          </div>
              <div>
                <button>{job.role}</button>
                <button>{job.level}</button>
                {job.languages.map((language)=>{
                  return <button key={language}>{language}</button>
                })}
              </div>
    </div>
  )
}

export default Listing
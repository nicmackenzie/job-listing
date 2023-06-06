import React from 'react'

function Listing({job}) {
  
  function handleClick(e){
    console.log(e.target)
  }
  return (
    <div className="">
<img src={job.logo} alt="company logo"/>
  <div className="">
  <p>{job.company}</p>
  </div>
      <div>
      <h3>{job.position}</h3>
      </div>
          <div>
            <p>{job.postedAt}</p>
            <p>{job.contract}</p>
            <p>{job.location}</p>
          </div>
              <div >
                <button onClick={handleClick}>{job.role}</button>
                <button onClick={handleClick}>{job.level}</button>
                {job.languages.map((language)=>{
                  return <button onClick={handleClick} key={language}>{language}</button>
                })}
              </div>
    </div>
  )
}

export default Listing
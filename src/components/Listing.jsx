import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/app-context';

function Listing({ job }) {
  const { onAddFilter } = useContext(AppContext);
  const clickHandler = e => {
    onAddFilter(e.target.textContent);
  };
  return (
    <div className="card">
      <div className="flex gap-4 items-center">
        <img
          src={job.logo}
          alt="company logo"
          className="w-14 h-14 rounded-full"
        />
        <div className="flex flex-col gap-1 mt-5 lg:mt-0">
          <div className="flex gap-1 items-center">
            <p className="text-primary text-[12px]">{job.company}</p>
          </div>
          <p className="text-primary text-[15px] font-bold">{job.position}</p>
          <div className="flex items-center gap-4 text-[12px] text-primary-600">
            <div>{job.postedAt}</div>
            <div>{job.contract}</div>
            <div>{job.location}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center flex-wrap">
          <span className="filter-pills role" onClick={clickHandler}>
            {job.role}
          </span>
          <span className="filter-pills level" onClick={clickHandler}>
            {job.level}
          </span>

          {job.languages.map(language => (
            <span
              className="filter-pills language"
              key={language}
              onClick={clickHandler}
            >
              {language}
            </span>
          ))}
        </div>
        <Link
          to={'/jobs/' + job.id}
          className="btn self-end py-1 text-primary border border-solid border-primary rounded transition-all hover:text-white hover:bg-primary-600 hover:border-primary-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Listing;

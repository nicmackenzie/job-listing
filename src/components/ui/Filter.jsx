import { useContext } from 'react';
import { AppContext } from '../../context/app-context';

function Filter({ filter }) {
  const { onClearFilter } = useContext(AppContext);
  return (
    <div className="flex">
      <div className="bg-primary-200 text-primary text-small flex items-center px-1">
        {filter}
      </div>
      <button className="remove-filter" onClick={() => onClearFilter()}>
        &times;
      </button>
    </div>
  );
}

export default Filter;

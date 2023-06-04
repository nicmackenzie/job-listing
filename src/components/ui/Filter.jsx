function Filter({ filter }) {
  return (
    <div className="flex">
      <div className="bg-primary-200 text-primary text-small flex items-center px-1">
        {filter}
      </div>
      <button className="remove-filter">&times;</button>
    </div>
  );
}

export default Filter;

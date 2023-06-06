
import React from 'react'

function Filter({ filter }) {
  return (
    <div>
      <h3>Filters</h3>
      {filter.map((filter, id) => {
        <Filter key={id} filter={filter} />
      })}
    </div>
  )
}

export default Filter
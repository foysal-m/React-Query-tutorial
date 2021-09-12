import React, { useState, Fragment } from 'react'

import { useQuery } from 'react-query'
import Planet from './Planet'

const fetchPlanets = async (page) => {
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`)
  return res.json()
}

function Planets() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(true)
  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(
      ['planets', page],
      () => fetchPlanets(page),
      {
        refetchInterval: 60000,
      },
      {
        keepPreviousData: true,
      },
    )

  function renderDom1() {
    if (isLoading) return <div>Loading data...</div>
    else if (isError) return <div>Error :{error.message}</div>
  }

  return (
    <div className="cardh2">
      <h2>Planets</h2>
      <Fragment>
        <button
          onClick={() => setPage((pre) => Math.max(pre - 1, 1))}
          disabled={page === 1}
        >
          Previous page
        </button>
        <span>{page}</span>
        <button
          onClick={() => setPage((pre) => pre + 1)}
          // disabled={data.results.length < page * 10}

          // Disable the Next Page button until we know a next page is available
        >
          Next page
        </button>

        {renderDom1() ||
          data.results.map((planet) => (
            <Planet planet={planet} key={planet.name} />
          ))}
      </Fragment>
    </div>
  )
}

export default Planets

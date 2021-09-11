import React, { useState } from 'react'

import { useQuery } from 'react-query'
import Planet from './Planet'

const fetchPlanets = async (page) => {
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`)
  return res.json()
}

function Planets() {
  const [page, setPage] = useState(1)
  const { data, status } = useQuery(
    ['planets', page],
    () => fetchPlanets(page),
    {
      refetchInterval: 60000,
    },
  )

  function renderDom1() {
    if (status === 'loading') return <div>Loading data...</div>
    else if (status === 'error') return <div>Error fetching data</div>
  }

  return (
    <div className="cardh2">
      <h2>Planets</h2>
      <button onClick={() => setPage((pre) => pre + 1)}></button>

      {renderDom1() ||
        data.results.map((planet) => (
          <Planet planet={planet} key={planet.name} />
        ))}
    </div>
  )
}

export default Planets

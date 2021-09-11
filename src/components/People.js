import React from 'react'

import { useQuery } from 'react-query'
import Person from './Person'

const fetchPeople = async () => {
  const res = await fetch('http://swapi.dev/api/people/')
  return res.json()
}

function People() {
  const { data, status } = useQuery('people', fetchPeople)
  console.log(data)

  function renderDom1() {
    if (status === 'loading') return <div>Loading data...</div>
    else if (status === 'error') return <div>Error fetching data</div>
  }

  return (
    <div className="cardh2">
      <h2>People</h2>
      {renderDom1() ||
        data.results.map((person) => (
          <Person person={person} key={person.name} />
        ))}
    </div>
  )
}

export default People

import React from 'react'

function Navbar({ setPage }) {
  return (
    <div>
      <nav>
        <button onClick={() => setPage('planets')}>Planets</button>
        <button onClick={() => setPage('people')}>People</button>
        <button onClick={() => setPage('foysal')}>Foysal</button>
      </nav>
    </div>
  )
}

export default Navbar

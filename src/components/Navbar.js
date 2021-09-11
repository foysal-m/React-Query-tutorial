import React from 'react'

function NavBar({ setPage }) {
  return (
    <>
      <nav>
        <button onClick={() => setPage('planet')}>Planet</button>
        <button onClick={() => setPage('people')}>People</button>
        <button onClick={() => setPage('foysal')}> Foysal</button>
      </nav>
    </>
  )
}

export default NavBar

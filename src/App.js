import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Planets from './components/Planets'
import People from './components/People'
import Foysal from './components/Foysal'
function App() {
  const [page, setPage] = useState('planets' || 'people' || 'foysal')
  function renderCom() {
    if (page === 'planets') return <Planets />
    else if (page === 'foysal') return <Foysal />
    else return <People />
  }
  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />
      <div className="content">{renderCom()}</div>
    </div>
  )
}

export default App

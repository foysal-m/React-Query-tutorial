import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Foysal from './components/Foysal'
import NavBar from './components/NavBar'
import People from './components/People'
import Planets from './components/Planets'
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const [page, setPage] = useState('planet' || 'people' || 'foysal')
  const queryClient = new QueryClient()

  function renderDom() {
    if (page === 'planet') return <Planets />
    else if (page === 'people') return <People />
    else return <Foysal />

    //OR
    //  {page === 'planet' ? (
    //   <Planets />
    // ) : page === 'people' ? (
    //   <People />
    // ) : (
    //   <Foysal
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1> Star Wars Info</h1>
        <NavBar page={page} setPage={setPage} />
        <ReactQueryDevtools initialIsOpen={false} />
        <div>{renderDom()}</div>
      </div>
    </QueryClientProvider>
  )
}

export default App

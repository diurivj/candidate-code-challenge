import React, { Suspense, useState } from 'react'
import { Spinner } from '@chakra-ui/core'
import Container from './components/Container'
import Artwork from './components/Artwork'
import Navbar from './components/Navbar'

function App() {
  const [filter, setFilter] = useState(false)

  return (
    <>
      <Navbar filter={filter} onChange={() => setFilter(!filter)} />
      <Container>
        <Suspense fallback={<Spinner />}>
          <Artwork filter={filter} />
        </Suspense>
      </Container>
    </>
  )
}

export default App

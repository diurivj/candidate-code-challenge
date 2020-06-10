import React from 'react'
import useSWR from 'swr'
import { SimpleGrid, Spinner } from '@chakra-ui/core'
import Card from '../components/Card'
import ARTWORK_SERVICE, { ENDPOINT } from '../services'

function Artwork({ filter }) {
  const { data } = useSWR(ENDPOINT, ARTWORK_SERVICE.GET_ARTWORKS)

  const sortByName = (a, b) => a.name.localeCompare(b.name)

  if (!data) return <Spinner size="xl" />

  return (
    <SimpleGrid columns={[1, 2, 3, 3]} spacing={10}>
      {!filter && data.map(artwork => <Card key={artwork.id} artwork={artwork} />)}
      {filter && [...data].sort(sortByName).map(artwork => <Card key={artwork.id} artwork={artwork} />)}
    </SimpleGrid>
  )
}

export default Artwork

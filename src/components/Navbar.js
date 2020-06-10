import React from 'react'
import { Box, Switch, Heading, Stack, Text } from '@chakra-ui/core'

function Navbar({ filter, onChange }) {
  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      boxSizing="border-box"
      px={10}
      py={5}
    >
      <Heading as="h1" size="lg">
        SuperRare
      </Heading>
      <Stack isInline spacing={5}>
        <Text>Filter by name</Text>
        <Switch color="black" onChange={onChange} value={filter} size="md" />
      </Stack>
    </Box>
  )
}

export default Navbar

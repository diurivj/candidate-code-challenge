import React from 'react'
import { Box } from '@chakra-ui/core'

function Container({ children }) {
  return (
    <Box
      as="main"
      w="100%"
      minH="100vh"
      boxSizing="border-box"
      p={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  )
}

export default Container

import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Image, Text, Divider, Stack, Avatar } from '@chakra-ui/core'

function Card({ artwork }) {
  return (
    <Flex direction="column" border="1px solid black" w="352px" key={artwork.id}>
      <Image alt={artwork.name} w="352px" h="350px" src={artwork.image} />
      <Text ml={5} mt={5} fontSize="lg" fontWeight="semibold" lineHeight="short">
        {artwork.name}
      </Text>
      <Divider w="90%" alignSelf="center" />
      <Flex p={5} align="center" justify="space-between">
        <Flex mt={2} direction="column" w="50%">
          <Text mb={2} fontSize="xs" color="gray.500">
            ARTIST
          </Text>
          <Stack align="center" isInline>
            <Avatar size="xs" name={artwork.creator.user.username} src={artwork.creator.user.avatar} />
            <Text isTruncated>{artwork.creator.user.username}</Text>
          </Stack>
        </Flex>
        <Flex pl={5} mt={2} direction="column" w="50%">
          <Text mb={2} fontSize="xs" color="gray.500">
            OWNER
          </Text>
          <Stack align="center" isInline>
            <Avatar size="xs" name={artwork.owner.user.username} src={artwork.owner.user.avatar} />
            <Text isTruncated>{artwork.owner.user.username}</Text>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  )
}

Card.propTypes = {
  artwork: PropTypes.object.isRequired
}

export default Card

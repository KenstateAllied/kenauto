import React from 'react'
import { Flex } from '@chakra-ui/react'
const NavbarContainer = ({ children, ...props }) => {
  return (
    <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        bg={["primary.500", "primary.500", "transpaWanted", "transpaWanted"]}
        color={["white", "white", "primary.700", "primary.700"]}
        {...props}
    >
        {children}
    </Flex>
  )
}

export default NavbarContainer
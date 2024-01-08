import { Divider,Flex,Text } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <>
      {/* <Divider orientation='horizontal'/> */}
      <Flex
        h={['10vh','6vh']}
        w={'100vw'}
        // bg={'gray.900'}
        // borderColor={'red'}
        // borderTop={'.1px solid gray'}
        // borderTop={'.1px solid red'}
        justifyContent={'center'}

        alignItems={'center'}
        color={'gray.400'}
        flexDirection={'row'}
        gap={4}
        px={3}
        overflowY={'hidden'}
        fontSize={['sm','md']}

      >
        <Text>
          Created by Kushal with &hearts;
        </Text>
        <Text>

          All Rights Reserved &copy; {currentYear}
        </Text>

      </Flex>
    </>
  )
}

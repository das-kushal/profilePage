import { Badge, Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import skillSet from '../../data/skillset'



// FIXME: do it in mobile version also this does not look good in the mobile one 

const SetSkill = ({ name, x, y }) => {
  return (
    <motion.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        padding: '.5rem',
        // rounded: 'full',
        // borderRadius: '10% 10% 10% 10% ',
        // backgroundColor: 'black',
        // color: 'white',
        cursor: 'pointer',
        fontWeight: 'bold',
        // boxShadow:"0px 0px 10px rgba(255, 255, 255, 0.3)"
        // boxShadow: '0.2em 0.2em 0.2em 0.2em rgba(255, 255, 255, .61),0.2em 0.2em .2em 0.2em rgba(255, 255, 255, 0.35) '


        // border:'1px solid red',
      }}

      // whileHover={{
      //   scale: 1.2,
      //   backgroundColor: 'black',
      //   color: 'white',
      //   transition: {
      //     duration: .5
      //   }
      // }}
      initial={{ opacity: 0, x: 0, y: 0 }}
      whileInView={{ opacity: 1, x, y, transition: { duration: .5, delay: .4 } }}

    >
      <Badge colorScheme='whiteAlpha' textDecoration={'none'} variant={'subtle'}  fontSize={'xl'} _hover={{ transform: 'scale(1.1)', transition: '.3s all ease-in-out' }} >

        {name}
      </Badge>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <>
      {/* TODO: laptop version and pc version */}
      <Flex
        id="skills"
        h={'100vh'}
        w={'100vw'}
        // justifyContent={'flex-start'}
        alignItems={'center'}
        flexDirection={'column'}
        // bg={'black'}
        bgGradient={'linear(to-t,black,gray.900)'}
        display={['none', 'flex']}
      // overflow={'hidden'}


      // bgGradient="linear(to-b,black 85%, white)"
      >




        <Text fontSize={['4xl', '6xl']} fontWeight={'light'} textAlign={'center'} color='red'>

          Skills
        </Text>
        <Flex
          // bgGradient={'repeating-radial-gradient(rgba(30 ,39 ,40,.8) 2px,rgba(23,25,35,.1) 5px , rgba(23,25,35,.2) 100px)'}
          bgGradient={'repeating-radial-gradient(rgba(255,0,0,.3) 2px,rgba(23,25,35,.1) 5px , rgba(23,25,35,.2) 100px)'}
          h={'90vh'}
          w={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
          // opacity={.3}
          position={'relative'}
          // rounded={'full'}
          borderRadius={'50%'}
          // shadow={'dark-lg'}
          // zIndex={-10}
        // ml={'5rem'}
        // mr={'5rem'}
        >
          {
            skillSet.map((skill, index) => {
              return (
                <SetSkill name={skill.name} x={skill.x} y={skill.y} key={index} />
              )
            })
          }

        </Flex>
      </Flex>



      {/* TODO: mobile version  */}
      <Flex

        // id="skills"
        h={['100vh', 0]}
        w={'100vw'}
        // justifyContent={'flex-start'}
        alignItems={'center'}
        flexDirection={'column'}
        bgGradient={'linear(to-t,black,gray.900)'}
        display={['flex', 'none']}
        // border={'1px solid red'}
        pt={'2rem'}

      >

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: .2, delay: .3 } }}
        >
          <Text fontSize={['4xl', '6xl']} fontWeight={'light'} textAlign={'center'} color='red'>Skills</Text>
        </motion.div>
        <Flex   h={'100vh'} w={'100vw'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>

        {
          skillSet.map((skill, index) => {
            return (
              <motion.div key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: .2, delay: skill.id * .01 } }}
              style={{ overflowY: 'scroll', scrollBehavior: 'smooth',}}
              >
                <Badge colorScheme='whiteAlpha' textDecoration={'none'} variant={'subtle'}  w={'90vw'}  mb={1} p={1} shadow={'dark-lg'} textAlign={'center'} >{skill.name}</Badge>
              </motion.div>
            )
          })
        }
        </Flex>
      </Flex>
    </>


  )
}

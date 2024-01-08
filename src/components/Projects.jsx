import { Box,Flex,Text,VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import MyCard from './MyCard'

import projectData from '../../data/projectData'


export default function Projects() {
  return (
    <>
      <Flex
        id="projects"
        // h={'100vh'}
        overflowY={'scroll'}
        scrollBehavior={'smooth'}
        w={'100vw'}
        // justifyContent={'center'}
        // alignItems={'center'}
        // bgGradient={'linear(to-t,gray.900,black )'}
        // bg={'black'}
        flexDir={'column'}
      >
        <motion.div
          initial={{ opacity: 0,x: -100 }}
          whileInView={{ x: 0,opacity: 1,transition: { duration: .5,delay: 1 } }}
          // viewport={{once:true}}
          // onViewportLeave={{ opacity: 0, x: -100 ,transition: { duration: .5,delay:.5 } }}
          width={'100vw'}
        >


          <Text fontSize={['4xl','6xl']} fontWeight={'light'} textAlign={'center'} color='red' mt={'2vw'}>
            Projects  </Text>


        </motion.div>
        <VStack
          // h={'100vh'}
          overflowY={'scroll'}
          scrollBehavior={'smooth'}
          w={'100vw'}
          pb={[0,10]}
          pt={[0,4]}
        >
          {
            projectData.map((project,index) => {
              return (
                <MyCard
                  name={project.name}
                  desc={project.desc}
                  githubLink={project.githubLink}
                  key={index}
                  id={project.id}
                  iconLink={project.iconLink}
                  icon={project.icon}
                  skills={project.skills}
                />
              )
            })
          }

          {/* <MyCard direc="left"/> 

          <MyCard direc={'right'}/> 
          <MyCard direc={'left'}/> 
          <MyCard direc={'right'}/>  */}


        </VStack>
      </Flex>
    </>
  )
}

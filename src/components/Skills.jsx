import { Badge,Box,Button,Flex,Text,Grid,Card,CardBody,Image,Spacer } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import skillSet from '../../data/skillset'



// FIXME: do it in mobile version also this does not look good in the mobile one 

const SetSkill = ({ name,imgUrl,id }) => {
  return (
    <motion.div
      whileHover={{ color: 'red',cursor: 'pointer',transition: { duration: .5 } }}
      whileTap={{ color: "red",cursor: 'pointer',transition: { duration: .5 } }}
      initial={{ opacity: 0,y: -50 }}
      // animate={{ opacity: 1,y: 0 }}
      whileInView={{ x: 0,opacity: 1,transition: { duration: .2,delay: .3 } }}
      transition={{ duration: 0.5 }}
    // borderRadius="md"
    // border="1px solid #E2E8F0"
    // boxShadow="md"
    // bg="white"
    // p={6}
    // flexDir={'column'}

    // style={{ border: "1px solid #E2E8F0",textAlign: 'center',flex: 1,alignItems: 'center',justifyContent: 'center',padding: '2rem',borderRadius: '10px' }}
    >
      <Card
        bg={'gray.900'}
        color={'white'}
        shadow={'dark-lg'}
        // border={'1px solid #E2E8F0'}
        width={'100%'}
        height={'130px'}
      >
        <CardBody
          flex={1}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Flex flex={1} h={'60px'} justifyContent={'center'} alignItems={'center'}>

            <Image
              src={imgUrl}
              objectFit='fill'
              // h={'200px'}
              w={'60px'}
              alt='...'
              borderRadius='lg'
            // border={'1px solid #E2E8F0'}
            />
          </Flex>
          <Spacer h={2} />
          <Text fontWeight={'bold'}
            // border={'1px solid #E2E8F0'} 
            textAlign={'center'}
            _hover={{
              color: 'red'
            }}>{name}</Text>
        </CardBody>
      </Card>
      {/* <Box mt={2}> 
      </Box> */}
    </motion.div >
  )
}

export default function Skills() {
  return (
    <>
      {/* TODO: laptop version and pc version */}
      <Flex
        id="skills"
        // h={'100vh'}
        w={'100vw'}
        // justifyContent={'flex-start'}
        alignItems={'center'}
        flexDirection={'column'}
        // bg={'black'}
        // bgGradient={'linear(to-t,black,gray.900)'}
        display={['none','flex']}
      // overflow={'scroll'}


      // bgGradient="linear(to-b,black 85%, white)"
      >




        <Text fontSize={['4xl','6xl']} fontWeight={'light'} textAlign={'center'} color='red'>

          Skills <span style={{ color: 'yellow' }}><i>({skillSet.length})</i></span>
        </Text>
        {/* <Flex
          // bgGradient={'repeating-radial-gradient(rgba(30 ,39 ,40,.8) 2px,rgba(23,25,35,.1) 5px , rgba(23,25,35,.2) 100px)'}
          // bgGradient={'repeating-radial-gradient(rgba(255,0,0,.3) 2px,rgba(23,25,35,.1) 5px , rgba(23,25,35,.2) 100px)'}
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
        > */}

        <Grid
          templateColumns="repeat(4,1fr)"
          gap={5}
          p={4}

          mt={12}
          mx={'auto'}
          // mb={10}


          style={{ width: '90%',justifyContent: 'center',alignItems: 'center',flex: 1,}}
        >
          {
            skillSet.map((skill,index) => {
              return (
                <SetSkill name={skill.name} imgUrl={skill.imageUrl} key={index} id={skill.id} />
                // <Button key={index}>{skill.name}</Button>
              )
            })
          }

        </Grid>

        {/* </Flex> */}
      </Flex>



      {/* TODO: mobile version  */}
      <Grid

        // id="skills"
        h={['100vh',0]}
        w={'100vw'}
        // justifyContent={'flex-start'}
        alignItems={'center'}
        flexDirection={'column'}
        // bgGradient={'linear(to-t,black,gray.900)'}
        display={['flex','none']}
        // border={'1px solid red'}
        pt={'2rem'}

      >

        <motion.div
          initial={{ opacity: 0,x: 100 }}
          whileInView={{ x: 0,opacity: 1,transition: { duration: .2,delay: .3 } }}
        >
          <Text fontSize={['4xl','6xl']} fontWeight={'light'} textAlign={'center'} color='red'>
            Skills <span style={{ color: 'yellow' }}><i>({skillSet.length})</i></span>
          </Text>
        </motion.div>
        <Flex h={'100vh'} w={'100vw'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>

          {
            skillSet.map((skill,index) => {
              return (
                <motion.div key={index}
                  initial={{ opacity: 0,x: 100 }}
                  whileInView={{ x: 0,opacity: 1,transition: { duration: .2,delay: skill.id * .01 } }}
                  style={{ overflowY: 'scroll',scrollBehavior: 'smooth',}}
                >
                  <Badge color='white' bg='transparent' textDecoration={'none'} variant={'subtle'} w={'90vw'} mb={1} p={1} shadow={'dark-lg'} textAlign={'left'} >
                    <span style={{ color: 'red' }}>{index + 1}.</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {skill.name}
                    <Image src={skill.imageUrl} height={'20px'} width={'20px'} float={'right'} />
                  </Badge>
                </motion.div>
              )
            })
          }
        </Flex>
      </Grid>
    </>


  )
}

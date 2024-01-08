import { Flex,Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import ContactForm from './ContactForm'
import { Image } from '@chakra-ui/react'
import contactImg from '../assets/contact.svg'

export default function Contact() {

  const arrowVariants = {
    hidden: { opacity: 0,y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1,delay: 0.5 },
    },
    shake: {
      y: [0,-5,5,-5,5,0],
      transition: { duration: 3,repeat: Infinity,repeatType: "loop" },
    },
  };


  return (
    <Flex
      id='contact'
      h={'100vh'}
      w={'100vw'}
      // bgGradient={'linear(to-b,black,gray.900)'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={2}
      flexDir={['column','row']}
      mt={[0,'-25vh']}

    >
      {/* TODO: box 2 side of it in large screen is the pic */}
      <Flex
        w={['100vw','50vw']}
        h={['50vh','50vh']}
        justifyContent={'flex-start'}
        alignItems={'center'}
        flexDirection={'column'}
        // border={'1px solid blue'}
        px={[0,10]}
        display={['none','flex']}

      >
        <motion.div
          initial='visible'
          // animate='shake'
          whileInView={{
            y: [0,-5,5,-5,5,0],
            transition: { duration: 3,repeat: Infinity,repeatType: "loop" }
          }}
          variants={arrowVariants}
          exit={{ opacity: 0 }}

          style={{

            // border:'1px solid red',
          }}
        >

          <Image src={contactImg} />
        </motion.div>
      </Flex>

      {/* TODO: box 1  contact form */}
      <Flex
        w={['100vw','50vw']}
        h={['70vh','50vh']}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        // border={'1px solid red'}
        px={[0,10]}
      >


        {/* TODO: put in the contact form component */}
        <Flex
          h={'100%'}
          w={'100%'}
          // border={'2px solid blue'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
          mb={[4,0]}
        >
          <motion.div
            initial={{ opacity: 0,x: 100 }}
            whileInView={{ x: 0,opacity: 1,transition: { duration: .2,delay: .3 } }}
          // viewport={{once:true}}
          // onViewportLeave={{ opacity: 0, x: -100 ,transition: { duration: .5,delay:.5 } }}
          >


            <Text fontSize={['4xl','6xl']} fontWeight={'light'} textAlign={'center'} color='red'>
              Contact Me  </Text>


          </motion.div>
          <ContactForm />
        </Flex>
      </Flex>





    </Flex>
  )
}

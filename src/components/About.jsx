import { AbsoluteCenter,Box,Center,Flex,Heading,Stack,Text } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ScrollText } from '../../utils/ScrollText';

import EducationTimeline from './EducationTimeline'

// import timelineData from '../../data/timelineData.js'

export default function About() {




  const timelineData = [
    {
      id: 1,
      title: "Intern Analyst",
      place: 'Wells Fargo',
      location: "Bangalore, Karnataka",
      description:
        "Our basic task was to help Wells Fargo increase business by doing various types of analysis on the customer data and predicting the spread on different quotes of the trader. I worked on the frontend(React.js) and the backend(flask) parts. I used Chart.js for charts and used Vite for creating the react application . For unit testing I used Vitest .",

      date: "May 2023 - July 2023",
      icon: "work",
    },
    {
      id: 2,
      title: "Bachelor of Engineering",
      place: 'Jadavpur University',
      location: "Kolkata, West Bengal",
      description:
        "Joined Jadavpur University after getting a rank of 142 in WBJEE . I am currently pursuing my Bachelors in Computer Science and Engineering. I am currently in my Final year.",

      date: "December 2020 - June 2023",
      icon: "school",
    },
    {
      id: 3,
      title: "Higher Secondary",
      place: 'Hem Sheela Model School',
      location: "Durgapur, West Bengal",
      description:
        "I completed my Higher Secondary from Hem Sheela Model School . I was in CBSE board and passed my AISSCE exam with a percentage of 96.8% . I took PCMB during my school.",

      date: "April 2018 - April 2020",
      icon: "school",
    },
    {
      id: 4,
      title: "Upto Secondary",
      place: 'Hem Sheela Model School',
      location: "Durgapur, West Bengal",
      description:
        "I completed my  Secondary from Hem Sheela Model School . I was in CBSE board and passed my AISCE exam with a percentage of 97.4% . I have been studying at this school since when I was a small kid from nursery to be precise 😅.",

      date: "April 2005 - May 2018",
      icon: "school",
    },

    // Add more timeline items here
  ];

  const aboutMe = [
    "Hello there, I am Kushal , a final year CSE student at Jadavpur University",
    "I am a full stack developer with a keen interest in Data Structures and Algorithms and has solved 1000+ problems on Leetcode alone.",
    "I did my summer internship at Wells Fargo,Bangalore where I worked on React (for frontend) and Flask (for backend)",
    'I am currently exploring cross platform app development using Flutter',
    "I like to code and listen music in my free time",
  ];

  return (
    <Flex id='about' flexDirection={['column','row']} justifyContent={'center'} alignItems={'center'} h={'100vh'} w='100vw'
    // bgGradient="linear(to-b,black,gray.900)"
    >

      <Flex
        // bg="blue.500"
        h={['50vh','100vh']}
        w={['97vw','50vw']}
        pt={[0,10]}
        justifyContent={'normal'}
        alignItems={'center'}
        flexDirection={'column'}
        color={'white'}
      // ml={'2vw'}
      // bgColor={'#000'}

      >
        <motion.div
          initial={{ opacity: 0,x: -100 }}
          whileInView={{ x: 0,opacity: 1,transition: { duration: .5,delay: .2 } }}
        // viewport={{once:true}}
        // onViewportLeave={{ opacity: 0, x: -100 ,transition: { duration: .5,delay:.5 } }}
        >
          <Flex justifyContent={'center'} alignItems={'center'} w={'100vw'}>

            <Text color={'red'} fontSize={['4xl','6xl']} fontWeight={'light'}>
              About  </Text>
            <Text color='red' fontSize={['4xl','6xl']} fontWeight={'light'}>.me</Text>
          </Flex>

        </motion.div>
        {/* here goes the content */}
        <motion.div
          initial={{ opacity: 0,x: 100 }}
          whileInView={{ x: 0,opacity: 1,transition: { duration: .5,delay: .4 } }}
          style={{ overflow: 'scroll',scrollBehavior: 'smooth' }}
        // viewport={{once:true}}
        // onViewportLeave={{ opacity: 0, x: -100 ,transition: { duration: .5,delay:.5 } }}
        >
          <Text
            fontSize={['sm','3xl']}
            px={[0,20]}
            textAlign={['center','left']}
            pt={[0,10]}
          >

            <ScrollText content={aboutMe} />
          </Text>
        </motion.div>
      </Flex>









      <Flex
        // bg="#000"
        h={'100vh'}
        color='#fff'
        w={['100vw','57vw']}
        justifyContent={'center'}
        alignItems={'center'}
        flexDir={'column'}
      // mr={'2vw'}
      // border={'1px solid green'}
      >
        <motion.div
          initial={{ opacity: 0,x: 100 }}
          whileInView={{ x: 0,opacity: 1,transition: { duration: .2,delay: .3 } }}
        // viewport={{once:true}}
        // onViewportLeave={{ opacity: 0, x: -100 ,transition: { duration: .5,delay:.5 } }}
        >


          <Text fontSize={['4xl','6xl']} fontWeight={'light'} textAlign={'center'} color='red'>
            Work Experience & Education  </Text>


        </motion.div>
        <Box h={['50vh','100vh']} overflow={
          'scroll'
        }
          scrollBehavior={'smooth'}
        // border={'1px solid green'}
        >
          <EducationTimeline items={timelineData} />
        </Box>
      </Flex>
    </Flex >
  )
}

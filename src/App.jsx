import React,{ Suspense } from 'react'
const Header = React.lazy(() => import('./components/Header'))
const Landing = React.lazy(() => import('./components/Landing'))
const About = React.lazy(() => import('./components/About'))
const Skills = React.lazy(() => import('./components/Skills'))
const Projects = React.lazy(() => import('./components/Projects'))
const Footer = React.lazy(() => import('./components/Footer'))
const Contact = React.lazy(() => import('./components/Contact'))
import { VStack } from '@chakra-ui/react'

import { Divider,Skeleton } from '@chakra-ui/react'
import MobileEducation from './components/MobileEducation'



export default function App() {
  return (
    <>
      <VStack w={'100vw'} mx={'auto'} p={0} m={0} gap={0} overflowX={'hidden'} scrollBehavior={'smooth'} backgroundColor={'#282E34'} >
        {/* <Suspense fallback={<Skeleton height={'20px'} />}> */}
        <Header />
        {/* </Suspense> */}
        {/* <Suspense fallback={<Skeleton height={'20px'} />}> */}
        <Landing />
        {/* </Suspense> */}
        <Divider />
        <Suspense fallback={<Skeleton height={'20px'} />}>
          <About />
        </Suspense>
        <MobileEducation />
        {/* <br /> */}
        <Divider />
        <Suspense fallback={<Skeleton height={'20px'} />}>
          <Skills />
        </Suspense>
        <Divider />
        <Suspense fallback={<Skeleton height={'20px'} />}>
          <Projects />
        </Suspense >
        <Divider />
        <Suspense fallback={<Skeleton height={'20px'} />}>

          <Contact />
        </Suspense>
        <Suspense fallback={<Skeleton height={'20px'} />}>

          <Footer />
        </Suspense>
      </VStack>
    </>
  )
}

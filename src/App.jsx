import React from 'react'
import Header from './components/Header'
import Landing from './components/Landing'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { VStack } from '@chakra-ui/react'



export default function App() {
  return (
    <VStack w={'100vw'} mx={'auto'} p={0} m={0} gap={0} overflowX={'hidden'} scrollBehavior={'smooth'} backgroundColor={'#282E34'} >
      <Header />
      <Landing />
      <About />
      <Skills />
      {/* <br /> */}
      <Projects />
      <Contact />
      <Footer />
    </VStack>
  )
}

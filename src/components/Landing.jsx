import { Flex,Text,VStack,Avatar,Spacer,Divider,Icon,Box,IconButton,Image,Button,Link,SkeletonCircle } from '@chakra-ui/react'

import landingImg from '../assets/landing.svg'

import '../../styles/Landing.css'

// import { LazyLoadImage } from 'react-lazy-load-image-component'

import { AnimatePresence,motion } from 'framer-motion'
import kushal from '../assets/kushaldas1.jpg'
// import logo from '../../public/icons8-k-67.png'

import { ExternalLinkIcon } from '@chakra-ui/icons'
// import { Link } from 'react-router-dom'

import { HashLink } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'

const variants = {
    hidden: { opacity: 0,scale: 4.4 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.5,
            duration: 1,
        }
    },

};
const variants_desc = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1,
        }
    },

};

const variants_image = {
    hidden: { opacity: 0,y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: .2,
            duration: 1,
        }
    },

};

const arrowVariants = {
    hidden: { opacity: 0,x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1,delay: 0.5 },
    },
    shake: {
        y: [0,-5,5,-5,5,0],
        transition: { duration: 2,repeat: Infinity,repeatType: "loop" },
    },
};



export default function Landing() {

    const resumeLink = 'https://drive.google.com/file/d/1etF3XFAILozDI_JyP1CrDWRrD48Wsef9/view?usp=sharing'

    return (
        <BrowserRouter>

            <Flex
                // border={'3px solid red'}
                height={['100vh','92vh']}
                width={'100vw'}
                overflowX={'hidden'}
                // bgGradient="linear(to-b, gray.900,black)"
                alignItems="center"
                justifyContent={['center',"space-around"]}
                flexDirection={['column',"row"]}
                color="white"
                initial="hidden"
                // whileInView="visible"
                variants={variants}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        delay: 0.5,
                        duration: 0.5,
                    }
                }}

                p={[1,5]}
            // m={4}
            // border={'1px solid blue'}
            // zIndex={10}
            >
                <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} height={'100%'}
                    // border={'1px solid red'}
                    w={['100vw','50vw']}
                >
                    <Box
                        height={'5em'}

                        display={['none','block']}

                    />
                    <motion.div
                        variants={variants_image}
                        initial='hidden'
                        // whileInView='visible'
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: .2,
                                duration: 0.5,
                            }
                        }}

                        viewport={{ once: true }}
                    >
                        <Avatar
                            borderRadius={'full'}
                            boxSize={['100px',"160px"]}
                            name="Kushal Das"
                            src={kushal}
                            loading='lazy'
                            // src={logo}
                            shadow={'dark-lg'}
                            border={'2px solid #EC0000'}
                            _hover={{

                                cursor: 'pointer',
                                // border: '2px solid red'
                            }}

                            placeholder={<SkeletonCircle size={20} />}
                        />

                        {/* <LazyLoadImage
                            src={kushal}
                            alt={'Kushal Das'}
                            effect="blur"
                            width={'160px'}
                            // height={'160px'}
                            style={{
                                // borderRadius: '60%',
                                border: '2px solid #EC0000',
                                boxShadow: 'dark-lg',
                                cursor: 'pointer',
                            }}
                        /> */}
                    </motion.div>
                    <motion.div
                        variants={variants}
                        initial='hidden'
                        // whileInView='visible'
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                delay: 0.5,
                                duration: 0.5,
                            }
                        }}

                        viewport={{ once: true }}

                        style={{

                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2px'
                        }}





                    >
                        {/* <motion.img
                            src={logo}
                            alt="Rotating logo"
                            style={{ width: '60px' }}
                            whileInView={{ rotate: 360 }} // Animation configuration
                            transition={{ ease: 'linear',duration: 10,repeat: Infinity }} // Animation properties
                        /> */}
                        {/* <Image 
                        src={logo} 
                        // size={['xs', "md"]} 
                        transform={'rotate(360deg)'}
                        // _hover={{transform:"rotate(360deg)",transition:'2s all ease-in-out',cursor:'pointer'}}
                        /> */}
                        <Text textAlign={'center'} fontSize={['5xl',"7xl"]} fontWeight={'light'} color={'#FAD700'} _hover={{
                            color: '#357EDD',transition: '.2s all ease-in-out',cursor: 'pointer'
                        }}>Kushal <Text as="span" color='#FAD700' _hover={{ color: "#357EDD" }}>Das</Text></Text>
                    </motion.div>
                    <motion.div
                        variants={variants_desc}
                        initial='hidden'
                        // whileInView='visible'
                        whileInView={{
                            opacity: 1,
                            transition: {
                                delay: 1,
                                duration: .5,
                            }

                        }}

                        viewport={{ once: true }}
                    >
                        <Text textAlign={'center'} fontSize={['2xl',"4xl"]} fontStyle={'normal'} color={'#c3c3c3'}>
                            <Text as="span" color={'#EC0000'}>Web & App Developer , </Text>
                            <br />
                            Final Year CSE Student at <span style={{ color: 'red' }}>Jadavpur University</span>
                        </Text>
                    </motion.div>
                    <motion.div

                        variants={variants_desc}
                        initial='hidden'
                        // whileInView='visible'
                        whileInView={{
                            opacity: 1,
                            transition: {
                                delay: 1,
                                duration: .5,
                            }

                        }}

                        viewport={{ once: true }}

                    >
                        <Flex justifyContent={'center'} alignItems={'center'} gap={['2rem','7rem']} mt={5}>
                            <Link href={resumeLink} isExternal>Resume <ExternalLinkIcon mx='2px' /></Link>
                            <HashLink to='#contact' smooth><Button variant={'outline'} textColor={'white'} borderColor={'#484848'}
                                _hover={{
                                    // textColor: 'gray.700',
                                    // bgColor: 'gray.100',
                                    borderColor: '#F10207',
                                }}
                            >Contact Me</Button></HashLink>

                        </Flex>
                    </motion.div>
                </Flex>

                <motion.div
                    id='landing-image-surround'
                    initial="hidden"
                    // whileInView="visible"
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1,delay: 0.5 },
                    }}

                    viewport={{ once: true }}
                    variants={arrowVariants}
                    exit={{ opacity: 0 }}
                    onViewportLeave={{ opacity: 0 }}

                    style={{
                        // border: '1px solid blue',
                        width: '50vw',
                    }}




                >
                    {/* <AnimatePresence> */}
                    <motion.div
                        id='landing-image'
                        initial='visible'
                        // whileInView='shake'
                        whileInView={{
                            y: [0,-5,5,-5,5,0],
                            transition: { duration: 3,repeat: Infinity,repeatType: "loop" }
                        }}
                        variants={arrowVariants}
                        exit={{ opacity: 0 }}

                        viewport={{ once: true }}



                    >

                        {/* <IconButton
                            variant={'unstyled'}
                            as={BsChevronDoubleDown}
                            _hover={{ color: 'red', cursor: 'pointer' }}
                            onClick={() => {
                                document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
                            }}
                            display={'none'}
                            // bottom={'0'}
                            // position={'absolute'}

                        /> */}

                        <Image loading='lazy' src={landingImg} h={['40vh','60vh']} w={['100vw','40vw']} />
                    </motion.div>


                </motion.div>


            </Flex >
        </BrowserRouter>
    )
}

import { Button,Flex,IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
// import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import SocialLinks from '/utils/SocialLinks';

import socialLinks from '../../data/socialData';
// import navData from '../../data/navData';
import { BrowserRouter } from 'react-router-dom';

export default function Header() {
    const socialVariants = {
        hidden: { opacity: 0,y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                // delay: 0.5,
                duration: 1,
                // staggerChildren: 0.2,
            },
        },


    };

    const navVariants = {
        hidden: { opacity: 0,x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0,x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                // staggerChildren: 0.2,
            }
        },
    };

    return (
        <BrowserRouter>
            <Flex
                id='header'
                justifyContent={'center'}
                pos={'relative'}
                pt={'2vh'}
                alignItems={'flex-start'}
                // backgroundColor={'gray.900'}
                height={'7vh'}
                overflowX={'hidden'}
                width={'100vw'}
                shadow={'md'}
            // border='1px solid red'
            // pt={3}
            // position={'static'}
            >
                <Flex justifyContent={'space-evenly'} alignItems={'center'} gap={['2rem','7rem']}>
                    {socialLinks.map((socialLink,index) => (
                        <motion.a
                            key={index}
                            href={socialLink.href}
                            variants={socialVariants}
                            initial="hidden"
                            // animate="visible"

                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    // delay: 0.5,
                                    duration: 1,
                                    staggerChildren: 0.2,
                                },
                            }}


                        >
                            <SocialLinks text={socialLink.text} icon={socialLink.icon} external={true} />
                        </motion.a>
                    ))}
                </Flex>
                {/* <Flex>
                    {navData.map((nav, index) => (
                        <Link key={index} to={nav.to} smooth>
                            <motion.div variants={itemVariants} initial="hidden" animate="visible">
                                <Button
                                    color="white"
                                    variant="link"
                                    mr={'5'}
                                    _hover={{ color: 'red' }}
                                >
                                    {nav.text}
                                </Button>
                            </motion.div>
                        </Link>
                    ))}
                </Flex> */}
            </Flex>
        </BrowserRouter>
    );
}


















// import { Button, Flex, IconButton } from '@chakra-ui/react'
// import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
// import { HashLink as Link } from 'react-router-hash-link'
// import SocialLinks from '/utils/SocialLinks'


// import socialLinks from '../../data/socialData'
// import navData from '../../data/navData'


// export default function Header() {

//     return (
//         <BrowserRouter>
//             <Flex justifyContent={'space-between'} pos={'relative'} px={'10'} alignItems={'center'} backgroundColor={'gray.900'} height={'50'} width={'100vw'} position={"static"} >
//                 <Flex justifyContent={'space-evenly'} alignItems={'center'}>
//                     {socialLinks.map((socialLink, index) => {
//                         return (
//                             <SocialLinks
//                                 key={index}
//                                 text={socialLink.text}
//                                 icon={socialLink.icon}
//                                 href={socialLink.href}
//                             />
//                         )
//                     })}

//                 </Flex>
//                 <Flex>

//                     {navData.map((nav, index) => {
//                         return (
//                             <Link key={index} to={nav.to} smooth >
//                                 <Button
//                                     color="white"
//                                     variant="link"
//                                     mr={'5'}
//                                     _hover={{ color: 'red' }}
//                                 >
//                                     {nav.text}
//                                 </Button>
//                             </Link>
//                         )
//                     })}

//                 </Flex>
//             </Flex>
//         </BrowserRouter>
//     )
// }






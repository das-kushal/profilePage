import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Box, Link, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import ReactMarkdown from 'react-markdown'


export default function MyCard({ id, name, desc, githubLink, icon, iconLink, skills }) {
    const direc = id & 1 ? 'left' : 'right';
    return (
        <motion.div
            initial={{ opacity: 0, x: direc == 'left' ? -100 : 100 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: .5, delay: .5 } }}
        >

            <Box w={'100vw'} >
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    // variant='outline'
                    maxW={['100%','70%']}
                    // w={'48%'}
                    minH={'40vh'}
                    maxH={'520vh'}
                    // h={['80vh','']}
                    mx={[1,20]}
                    mb={[1,10]}
                    float={direc}
                    outline={'none'}
                    bg={'gray.900'}
                    color={'white'}
                    shadow={'dark-lg'}
                >
                    <Image
                        objectFit='fill'
                        w={{ base: '100%', sm: '50%' }}
                        src={icon == '' ? iconLink : icon}
                        alt='Caffe Latte'
                    />

                    <Stack>
                        <CardBody>
                            <Heading size='md'>{name}</Heading>

                            <Text py='2' ml={3} wordBreak={'keep-all'} textAlign={'left'} fontSize={['sm','sm','sm']}>
                                <ReactMarkdown>
                                    {desc}
                                </ReactMarkdown>

                            </Text>

                            <Flex
                                // mt={'2vh'}
                                justifyContent={'flex-start'}
                                gap={3}
                                mt={4}
                                wrap={'wrap'}
                            >
                                {/* <Button disabled>Hello</Button> */}

                                {
                                    skills.map((skill, index) => {
                                        return (
                                            <Button size={['sm','md']} key={index} variant={'ghost'} bg={'gray.800'} _hover={{ bg: 'gray.700', transition: '.3s all ease-in-out' }} color='whiteAlpha.700' shadow={'dark-lg'}>
                                                {skill}
                                            </Button>
                                        )
                                    })
                                }




                            </Flex>
                        </CardBody>

                        <CardFooter

                        >
                            <Link href={githubLink} isExternal>
                                Github Link <ExternalLinkIcon mx='2px' />
                            </Link>
                        </CardFooter>
                    </Stack>
                </Card>
            </Box>
        </motion.div>
    )
}
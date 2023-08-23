import React from 'react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Flex,
    Input,
    Textarea,
    Button,
    Spacer,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useToast } from '@chakra-ui/react'
import { useForm, ValidationError } from '@formspree/react';
export default function ContactForm() {
    const [state, handleSubmit, reset] = useForm("xqkvqkdo");
    let toast = useToast()
    if (state.succeeded) {
        console.log(state)
        reset()
        toast({
            title: 'Message Sent!.',
            description: "You've sent the message.",
            status: 'success',
            duration: 3000,
            isClosable: true,
        });

    }
    return (
        <Flex
            h={'100%'}
            w={['100%', '80%']}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'flex-start'}
            color={'white'}
            // border={'1px solid red'}
            m={3}

        >
            <form onSubmit={handleSubmit}
                style={{

                    height: '100%',
                    width: '100%',
                    gap: 2,
                    margin: 2,
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: .5, delay: .6 } }}
                    style={{

                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'column',
                        height: '100%',

                    }}
                >
                    <Flex
                        h={'100%'}
                        w={'100%'}
                        justifyContent={'flex-start'}
                        alignItems={'end'}
                        flexDirection={'column'}
                        color={'white'}
                        pl={[3, 0]}
                        pr={[3, 0]}

                    // border={'1px solid green'}
                    // m={3}
                    >

                        <FormControl  >
                            <FormLabel>Enter name</FormLabel>
                            <Input id="name"
                                type="text"
                                name="name"
                                placeholder='Enter your name'
                                variant='flushed'
                                mb={5}
                                focusBorderColor='red.500'
                            />

                        </FormControl>
                        {/* <Spacer /> */}
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />

                        <FormControl  >
                            <FormLabel>Email address</FormLabel>
                            <Input id="email"
                                type="email"
                                name="email"
                                placeholder='Enter your email'
                                variant='flushed'
                                mb={5}
                                focusBorderColor='red.500'

                            />

                        </FormControl>
                        {/* <Spacer /> */}
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />

                        <FormControl>
                            <FormLabel>Write Something</FormLabel>
                            <Textarea placeholder='Enter what you want to tell me' id="message"
                                name="message"
                                size={['sm', 'md']}
                                fontSize={'md'}
                                focusBorderColor='red.500'

                                variant='flushed'

                            />

                        </FormControl>


                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <Button
                            type="submit"
                            disabled={state.submitting}
                            // variant={'solid'}
                            mt={4}
                            w={['100%', '20%']}
                            // _hover={{ bg: 'red.500',color:'white', transition: '.3s all ease-in-out' }}
                            // align={'center'}

                            variant={'outline'} textColor={'gray.400'} _hover={{ textColor: 'gray.700', bgColor: 'gray.100' }}
                        >
                            Submit
                        </Button>
                    </Flex>
                </motion.div>
            </form>
        </Flex>
    )
}

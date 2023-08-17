import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, SimpleGrid, Stack, StackDivider, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Lottie from 'lottie-react'
import Logo from '../assets/lottie/Logo.json'
import Landingl from '../assets/lottie/Landingl.json'
import { useNavigate } from 'react-router-dom'

function Landing() {

    useEffect(() => {
      localStorage.setItem('chakra-ui-color-mode','light');
    //   window.location.reload();
    }, [])
    

        const navigate = useNavigate()
    return (
        <>
            <Box overflow='hidden' bg='rgb(245,240,255)' h='100%' w='100%'>
                <Flex alignItems='center' justifyContent='space-around' color='black' w='100%' h='20%'>
                    <Flex h='80%'><Lottie animationData={Logo}></Lottie></Flex>
                    <Flex><Heading>EduWise</Heading></Flex>
                    <Stack direction='row' spacing={8}>
                        <Button _hover={{ bg: ' rgb(8, 117, 247)', color: 'white' }} color='black' size='lg' colorScheme='purple' variant='ghost'
                            onClick={()=>navigate('/auth/signin')}
                        >
                            Login
                        </Button>
                        <Button
                            color='black'
                            size='lg'
                            _hover={{ bg: ' rgb(8, 117, 247)', color: 'white' }}
                            variant='outline'
                            colorScheme='purple'
                            onClick={()=>navigate('/auth/signup')}
                        >
                            SignUp
                        </Button>
                    </Stack>
                </Flex>
                <Flex
                    flexDirection={{
                        base: 'column',
                        lg: 'row'
                    }}
                    color='black' h='100%' w='100%' >
                    <Flex mx={{
                        base: '20%',
                        lg: '0'
                    }} w={{
                        base: '100%',
                        lg: '50%'
                    }}>
                        <Stack m='5%' spacing={6}>
                            <Heading color='rgb(8,117,247)' as='h1' size='4xl' noOfLines={1}>
                                AI smart tutor
                            </Heading>
                            <Heading as='h2' size='2xl' noOfLines={1}>
                                Get your doubts solved
                            </Heading>
                            <Heading as='h2' size='xl'>
                                Your personal tutor
                            </Heading>
                            <Heading as='h2' size='xl'>
                                 Made using React and GPT3
                            </Heading>
                            <Button _hover={{ bg: ' rgb(43,90,187)', color: 'white' }} h='3.5rem' fontSize='xl' m='auto' w='30%' color='white' bg='rgb(8,117,247)' borderRadius='20px' border='2px' onClick={()=>navigate('/auth/signup')}>Get Started</Button>
                        </Stack>
                    </Flex>
                    <Flex display={{
                        base: 'none',
                        lg: 'block'
                    }} w='50%'>
                        <Lottie animationData={Landingl}></Lottie>
                    </Flex>
                </Flex>
            </Box>
            {/* <Box textAlign='center' bg='white' color='black' w='100%'>
                <Heading>Cards</Heading>
                <Box alignItems='center' >
                    <Flex m='5%' >
                        <Card m='5%'>
                            <CardHeader>
                                <Heading size='md'> Customer dashboard</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter>
                                <Button>View here</Button>
                            </CardFooter>
                        </Card>
                        <Card m='5%'>
                            <CardHeader>
                                <Heading size='md'> Customer dashboard</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter>
                                <Button>View here</Button>
                            </CardFooter>
                        </Card>
                        <Card m='5%'>
                            <CardHeader>
                                <Heading size='md'> Customer dashboard</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter>
                                <Button>View here</Button>
                            </CardFooter>
                        </Card>
                    </Flex>

                </Box>
            </Box> */}
        </>
    )
}

export default Landing

import React from 'react'
import { Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Flex, Avatar, Box, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';


function User() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();

    function handleLogout(){
        localStorage.removeItem('uid')
        navigate('/auth/signin')
        window.location.reload();
        
    }

    return (
        <Flex top={4} right={4} position={"absolute"}>

            <Avatar onClick={onOpen} src='https://bit.ly/sage-adebayo' />

            <Modal onClose={onClose} size='sm' isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    {/* <ModalHeader>Modal Title</ModalHeader> */}
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex alignItems={'center'} justifyContent={'center'} mt={'2%'} >
                            <Avatar src='https://bit.ly/sage-adebayo' />
                            <Box ml='3'>
                                <Text fontWeight='bold'>
                                    Ishaant Singh
                                </Text>
                                <Text fontSize='sm'>UI Engineer</Text>
                            </Box>
                        </Flex>
                        <Flex alignItems={'center'} justifyContent={'center'} mt={'7%'} ><Button colorScheme='red'
                            onClick={handleLogout}
                        >LogOut</Button></Flex>
                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>















            {/* <Popover placement='left' >
                <PopoverTrigger>
                    <Avatar src='https://bit.ly/sage-adebayo' />
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
               
                    <PopoverBody>
                        <Flex alignItems={'center'} justifyContent={'center'} mt={'2%'} >
                            <Avatar src='https://bit.ly/sage-adebayo' />
                            <Box ml='3'>
                                <Text fontWeight='bold'>
                                    Ishaant Reddy
                                </Text>
                                <Text fontSize='sm'>UI Engineer</Text>
                            </Box>
                        </Flex>
                        <Flex alignItems={'center'} justifyContent={'center'} mt={'4%'} ><Button colorScheme='red'>LogOut</Button></Flex>

                    </PopoverBody>
                </PopoverContent>
            </Popover> */}
        </Flex >
    )
}

export default User

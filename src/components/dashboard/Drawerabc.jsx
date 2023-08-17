import React from 'react'
import { Drawer, RadioGroup, Stack, Radio, Button, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { AlertDialogFooter, AlertDialogBody, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, AlertDialog } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'
import ChatHistory from './Chathistory'
import { AddIcon } from '@chakra-ui/icons'
import { useRef } from 'react';



function Drawerabc() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')

    // const { isOpen2, onOpen2, onClose2 } = useDisclosure()
    // const cancelRef = React.useRef()
    return (
        <>
            {/* <AlertDialog
                isOpen2={isOpen2}
                leastDestructiveRef={cancelRef}
                onClose2={onClose2}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Chat
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose2}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={onClose2} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog> */}
            <Button colorScheme='blue' onClick={onOpen}>
                Open
            </Button>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                {/* <DrawerOverlay /> */}
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px' display='flex' justifyContent='space-between'>History <Button><AddIcon /></Button></DrawerHeader>

                    <DrawerBody>
                        <ChatHistory></ChatHistory>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Drawerabc

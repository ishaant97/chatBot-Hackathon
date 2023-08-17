import { Button, Flex, Text, background, AlertDialogFooter, AlertDialogBody, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, AlertDialog } from '@chakra-ui/react';
import React, { useEffect, useState, useRef } from 'react';
import { CloseIcon, DeleteIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react';

function ChatHistory() {
    // const [chatNames, setChatNames] = useState([]);
    const [chatNames, setChatNames] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    const updateChatNames = () => {
        setChatNames(['Sample Chat' , 'Sample Chat' ,'Sample Chat' ,'Sample Chat' ,'Sample Chat' ,'Sample Chat' ,'Sample Chat' ,'Sample Chat' ,'Sample Chat' ,'Sample Chat' ,'Sample Chat' ,'Sample Chat' ,'Sample Chat' ,'Sample Chat' ,'Sample Chat' ,'Sample Chat' ,'John Doe asdlfkjasldkfjlas;dkjflsdkjfls;dkjfl;kdsjf', 'Jane Smith', 'Jane Smith', 'Jane Smith', 'Jane Smith', 'Jane Smith', 'Jane Smith', 'Jane Smith', 'Jane Smith', 'Jane Smith', 'Jane Smith', 'Jane Smith', 'Jane Smith', 'Jane Smith', 'Jane Smith',]);
    };


    const fetchChatNames = () => {
        updateChatNames(chatNames);
    };


    useEffect(() => {
        // Fetch chat names from the text file
        fetchChatNames();
    }, []);

    // const fetchChatNames = async () => {
    //     try {
    //         const response = await fetch('./chat-names.txt');
    //         const data = await response.text();
    //         const chatNamesArray = data.split('\n');
    //         setChatNames(chatNamesArray);
    //     } catch (error) {
    //         console.error('Error fetching chat names:', error);
    //     }
    // };

    return (
        <div>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
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
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={onClose} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
            {chatNames.map((chatName, index) => (
                <Button paddingY='5%' w='100%' m='2%' marginBottom='4%' align='left' key={index} display='flex' justifyContent='space-between'> <Flex w='80%' overflow='hidden'>{chatName}</Flex><Button bg='transparent' h='70%' w='15%' _hover={{ bg: 'red' }} onClick={onOpen}><DeleteIcon /></Button></Button>
            ))}
        </div>
    );
}

export default ChatHistory;

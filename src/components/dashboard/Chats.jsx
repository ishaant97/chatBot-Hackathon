import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';

import React, { useEffect, useRef, useState } from 'react';


function Chats() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const chatContainerRef = useRef(null);
    const [loading, setloading] = useState(false)

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const handleSendMessage = () => {
        const newMessage = {
            content: inputValue,
            sender: 'user',
        };

        setMessages([...messages, newMessage]);
        setInputValue('');

    };

    const botMessage = async () => {
        const configuration = new Configuration({
          apiKey: process.env.REACT_APP_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: inputValue }],
        });
        const botResponse = completion.data.choices[0].message.content;

        setMessages(prevMessages => [...prevMessages, { content: botResponse, sender: 'bot' }]);
    };

    const handleSend = () => {
        handleSendMessage()

        botMessage()
    }
    // useEffect(() => {
    //     // Scroll to the bottom of the chat container when a new message is added
    //     chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    //   }, [messages]);
    return (
        <>
            <Box w='100%' h='100%'>
                {/* <Flex></Flex> */}
                <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' w='100%' h='88%' >

                    {
                        messages == '' ?
                            <Box w='95%' h='85%'  display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                                <Heading textAlign='center' size='lg' fontSize='50px'>
                                    EDUWISE an IntelliChat Bot
                                </Heading>
                                <Heading textAlign='center' size='sm' fontSize='20px'>
                                    Type something To start the chat....
                                </Heading>
                            </Box>
                            : <Box w='95%' display='flex' flexDirection='column' justifyContent='flex-end' className='chatBox' h='85%' borderRadius='15px' padding={'2rem'}>

                                <Box bg='transparent' overflowY='scroll' >
                                    {messages.map((message, index) => (
                                        <Box className='chatAnim' marginY='0.5rem' borderRadius='5px' bg={index % 2 == 0 ?
                                            'linear-gradient(264deg, #0e002f8c 18.43%, #130a17 52.22%)' :
                                            "rgba( 255, 255, 255, 0.09 )"} padding='0.8rem' key={index}>
                                            <span>{message.sender}: </span>
                                            <span>{message.content}</span>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                    }
                    <Text></Text>

                </Box>

                <Box m='auto' display='flex' alignItems='center' justifyContent='space-around' w='100%' h='12%' p='2rem'>
                    <Input h='3.5rem' w='80%' placeholder='Enter A Message' value={inputValue}
                        onChange={handleInputChange} />

                    <Button w='10%' h='3.5rem' background='linear-gradient(to right, #c0392b, #8e44ad)' _hover={{ background: "linear-gradient(to right, #642b73, #c6426e)" }} _active={{ background: "linear-gradient(to right, #cb356b, #bd3f32)" }} onClick={handleSend} variant='solid'>
                        Send
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Chats

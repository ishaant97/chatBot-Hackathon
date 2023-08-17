import { AddIcon } from '@chakra-ui/icons'
import { Flex, Card, CardBody, Text, Box, Button } from '@chakra-ui/react'
import React from 'react'
import ChatHistory from './Chathistory'

function Sidebar() {
    return (
        <>
            <Flex h='100%' w='100%'>
                <Card display='flex' flexDirection='column' justifyContent='space-evenly' w='100%' m='4%' bg='linear-gradient(108.94deg, #16093B 18.43%, #221228 52.22%)' borderRadius='20px' boxShadow='md' >
                    <CardBody h='100%' >

                        <Box h='8%' position="sticky" top="0" borderBottomWidth='3px' display='flex' justifyContent='space-between'>
                            <Text fontSize='1.7rem'>Chat History</Text>
                            <Button mb='3%'><AddIcon /></Button>
                        </Box>

                        <Box h='85%' marginTop='1rem' overflowX='hidden' overflowY='scroll'>
                            <ChatHistory></ChatHistory>
                        </Box>
                    </CardBody>
                </Card>

            </Flex >
        </>
    )
}

export default Sidebar

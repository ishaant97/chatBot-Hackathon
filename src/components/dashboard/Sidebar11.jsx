import { AddIcon } from '@chakra-ui/icons'
import { Flex, Card, CardBody, Text, Box, Button } from '@chakra-ui/react'
import React from 'react'
import ChatHistory from './Chathistory'

function Sidebar() {
    return (
        <>
            <Flex h='100%' w='100%'>
                <Card w='100%' m='4%' borderRadius='20px' boxShadow='md'>
                    <CardBody h='100%'>
                        <Box h='8%' bg='#2d3748' position="sticky" top="0" borderBottomWidth='3px' display='flex' justifyContent='space-between'><Text fontSize='1.7rem'>Chat History</Text><Button mb='3%'><AddIcon /></Button></Box>

                        <Box h='92%' overflowX='hidden' overflowY='scroll'><ChatHistory></ChatHistory></Box>
                    </CardBody>
                </Card>

            </Flex >
        </>
    )
}

export default Sidebar

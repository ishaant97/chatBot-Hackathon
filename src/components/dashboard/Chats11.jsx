import { Box, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'

function Chats() {
    return (
        <>
            <Box w='100%' h='100%'>
                {/* <Flex></Flex> */}
                <Box display='flex' alignItems='center' justifyContent='center' w='100%' h='88%'>
                    <Heading size='lg' fontSize='50px'>
                        IntelliChat
                    </Heading>
                    <Text></Text>
                </Box>
                <Box m='auto' alignItems='center' justifyContent='center' w='65%' h='12%'><Input h='3.5rem' placeholder='Enter A Message' /></Box>
            </Box>
        </>
    )
}

export default Chats

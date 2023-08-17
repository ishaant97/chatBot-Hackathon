import React, { useEffect } from 'react'
import { Box, Flex, Image} from '@chakra-ui/react'
import signupImg from "./signup.png"
import logo from "../assets/images/logo.png"
import Signup from './Signup'
import Signin from './Signin'
import {
  useNavigate,
  useLocation
} from "react-router-dom";

export default function Authentication() {
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {

    localStorage.setItem('chakra-ui-color-mode','light');
    // window.location.reload();
    // Check if UID is present in local storage
    const uid = localStorage.getItem('uid');

    if (uid!=null &&uid.length>5) {
      navigate('/dashboard')
    } else {
      console.log("UID not present")
    }
  },[]);

  return (
      <Box padding={'10'} bg={'rgb(240,238,248)'} h="100vh">
      <Flex bg={'white'}  borderRadius={'10px'} h = "100%">
          <Flex 
            w={{
              base:"100%" ,
              lg: '50%'
            }}
            direction={'column'}
            
          >
              <Flex h={'10%'}><Image src={logo} w={'60px'} ml={'5%'}mt={'2%'}/></Flex>
              
                {location.pathname==='/auth/signin'?<Signin/>:<Signup/>}
              
              <Box h={'15%'} ml={'8%'}>✉️ @SemanticGeeks</Box>
          </Flex>
          <Box 
            display={{
              base: 'none',
              lg:'block'
            }}
            w={{
              base:'50%'
            }}
            
            padding={'2'} >
              <Image src={signupImg} alt='Signup Logo' sx={{width:{sm :'0', md:'60%', lg:'80%', xl:'60%'}}} float={'right'}/>
          </Box>
      </Flex>
      </Box>
  )
}

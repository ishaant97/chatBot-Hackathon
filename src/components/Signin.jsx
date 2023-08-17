import React from 'react'
import { useState } from 'react'
import { Box, Flex, Image, Text, Input,Button,useToast } from '@chakra-ui/react'
import {GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {app} from '../firebase/config'
import google from "../assets/images/google.png"
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  
    const toast = useToast()
    const navigate = useNavigate();
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')


  const handleclicksignin = async ()=>{
    
    console.log(email)

    const auth = getAuth(app);
    await signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        localStorage.setItem('uid',user.uid)
        toast({
            title: 'Login Successfull.',
            // description: "We've created your account for you.",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position:'top'
          })
          const uid = localStorage.getItem('uid');
          if (uid!=null &&uid.length>5) {
            localStorage.setItem('chakra-ui-color-mode','dark');
            navigate('/dashboard')
            window.location.reload();
          } else {
            console.log("UID not present")
          }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode} : ${errorMessage}`)
        toast({
            title: 'Unable To Create Account',
            description: `${errorMessage.split('/')[1].slice(0, -2)}`,
            status: 'error',
            duration: 5000,
            isClosable: true,
            position:'top'
          })
      });


  }

  const signinwithgoogle = ()=>{
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token)
        const user = result.user;
        console.log(user)
        localStorage.setItem('uid',user.uid)
        const uid = localStorage.getItem('uid');
        if (uid!=null &&uid.length>5) {
          localStorage.setItem('chakra-ui-color-mode','dark');
          navigate('/dashboard')
          window.location.reload();
        } else {
          console.log("UID not present")
        }
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });

  }

  return (
    <Flex direction={'column'}  alignItems={'center'} justifyContent={'center'} mt={'6%'}>
        <Box mb={'4'}>
          <Text as={'b'} 
            fontSize={{
              base:'1.5em',
              sm:'2em',
              md:'2.6em',
              lg:'2.5em'
            }}
          >
            Sign in to your account
          </Text>
        </Box>
        <Box mb={'4'}><Text fontSize='lg' color={'#454545'}>Sign in to use our ChatApp!</Text></Box>
        <Flex direction={'column'} width={'55%'}>

            <Text fontWeight={'600'}>Email</Text>
            <Input placeholder='Enter Your Email' bg={'rgb(237,238,249)'} _focus={{bg:'#FFFFFF'}} mt={'1'} mb={'2'}
                onChange={(e)=>setemail(e.target.value)}
            />

            <Text fontWeight={'600'}>Password</Text>
            <Input type='password' placeholder='Enter Password' bg={'rgb(237,238,249)'} _focus={{bg:'#FFFFFF'}} mt={'1'} mb={'4'}
                onChange={(e)=>setpass(e.target.value)}
            />

            <Button bg={'rgb(132,94,241)'} variant='solid' mb={'1'} color={"#FFFFFF"}
                onClick={handleclicksignin}
            >
                Sign In
            
            </Button>
            <Box margin={'auto'}>
                <Text fontWeight={'600'} mb={'1'}>OR</Text>
            </Box>
            <Button bg={'rgb(132,94,241)'} variant='solid' mb={'2'} color={"#FFFFFF"}
                onClick={signinwithgoogle}
            >
                Sign in with Google <Image src={google} w={'8%'} bg={'white'} borderRadius={'50%'} ml={'3'}/>
            </Button>
            
            <Button bg={'rgb(237,238,249)'} border={'2px'} borderColor={'#CDD1EE'} variant='solid' mb={'8%'}
            onClick={()=>navigate('/auth/signup')}
            >
            Create Account
            </Button>

        </Flex>
    </Flex>
  )
}

import React from 'react'
import { useState } from 'react'
import { Box, Flex, Text, Input,Button, useToast } from '@chakra-ui/react'
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {app} from '../firebase/config'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  
  const navigate = useNavigate();
  const toast = useToast()

  const [Signupemail, setSignupemail] = useState('')
  const [Signuppass, setSignuppass] = useState('')

  const [passMatched,setpassMatched] = useState(true)

  const [userPass, setUserPass] = useState('')

  const [loading, setLoading] = useState(false)

  const matchPass = (e) =>{
    // setSignuppass(e)
    setSignuppass(e)
    userPass===e?setpassMatched(true):setpassMatched(false)
  }

  const handleclicksignup = async ()=>{
    
    console.log(Signuppass)

    setLoading(true)
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, Signupemail, Signuppass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        localStorage.setItem('uid',user.uid)
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
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

      setLoading(false)
  }

  return (
    <Flex direction={'column'}  alignItems={'center'} justifyContent={'center'}>
        <Box mb={'4'}><Text fontSize='4xl' as={'b'} >Create an account</Text></Box>
        <Box mb={'4'}><Text color={'#454545'}
          fontSize={{
            base:'sm',
            sm:'md',
            lg:'lg'
          }}
        >Sign up now and unlock exclusive access!</Text></Box>
        
        <Flex direction={'column'} width={'55%'}>
            <Text fontWeight={'600'}>Name</Text>
            <Input placeholder='Enter Your Full Name' bg={'rgb(237,238,249)'} _focus={{bg:'#FFFFFF'}} autoFocus mt={'1'} mb={'2'}/>

            <Text fontWeight={'600'}>Email</Text>
            <Input placeholder='Enter Your Email' bg={'rgb(237,238,249)'} _focus={{bg:'#FFFFFF'}} mt={'1'} mb={'2'}
                onChange={(e)=>setSignupemail(e.target.value)}
            />

            <Text fontWeight={'600'}>Password</Text>
            <Input type='password' placeholder='Enter Password' bg={'rgb(237,238,249)'} _focus={{bg:'#FFFFFF'}} mt={'1'} mb={'4'}
                onChange={(e)=>setUserPass(e.target.value)}
            />
            
            <Text fontWeight={'600'}>Confirm Password</Text>
            <Input type='password' placeholder='Re-enter Password' bg={'rgb(237,238,249)'} _focus={{bg:'#FFFFFF'}} focusBorderColor="none" mt={'1'} mb={'4'}
                onChange={(e)=>matchPass(e.target.value)}
                isInvalid={passMatched?false:true}
            />

            <Button bg={'rgb(132,94,241)'} variant='solid' mb={'2'} color={"#FFFFFF"}
                onClick={handleclicksignup}
                isLoading={loading?true:false}
                isDisabled={passMatched?false:true}
            >
                Create Account
            </Button>
            <Button bg={'rgb(237,238,249)'} border={'2px'} borderColor={'#CDD1EE'} variant='solid'
              onClick={()=>navigate('/auth/signin') } mb={'4%'}
              fontSize={{
                base:'0.65em',
                sm:'1em'
              }}
            >
                Already have an account? Sign In
            </Button>

        </Flex>
    </Flex>
  )
}

import { Drawer, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Drawerabc from './dashboard/Drawerabc'
import User from './dashboard/User'
import Sidebar from './dashboard/Sidebar'
import Chats from './dashboard/Chats'
import Gpt from './Gpt'
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const navigate = useNavigate();
  
  useEffect(() => {

    localStorage.setItem('chakra-ui-color-mode','dark');
    // window.location.reload();
    // Check if UID is present in local storage
    const uid = localStorage.getItem('uid');

    if (localStorage.getItem('uid') == null || uid.length<5) {
      navigate('/auth/signin')
    }
  },[]);
  

  return (
    <>
      {/* <Drawerabc></Drawerabc> */}
      <Flex w='100%' h='100%' bg='linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C;'>
        <User></User>

        <Flex w='25%'><Sidebar></Sidebar></Flex>

        <Flex w='75%'><Chats></Chats></Flex>
      </Flex>
      {/* <Gpt/> */}
    </>
  )
}
export default Dashboard

import React, { useState } from 'react'

import { Box} from '@mui/material'



import DisplayMsg from './DisplayMsg';

import { useSelector } from 'react-redux';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';

const Right = () => {
  
  const selectedContact=useSelector((state)=>state.contacts1.selectedcontact)
 
  return (
    
    <Box sx={{ border: 1,height:"100vh",display:"flex",flexDirection:"column"}}>
    
    { 
      selectedContact ?
      <>
      <ChatHeader  />
      <DisplayMsg />
      <ChatFooter />

    
     </>
     :
     <img src="./frontpage.jpeg" alt="React Image" height={"100%"} />
    }

    </Box>
   
    
    )

}

export default Right



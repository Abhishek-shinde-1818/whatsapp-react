import React, { useState } from 'react'

import { Box,Typography, Stack,Paper,TextField, IconButton,Menu,MenuItem} from '@mui/material'

import MoodIcon from '@mui/icons-material/Mood';

import DisplayMsg from './DisplayMsg';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';

import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';

const Right = (props) => {
  
  
  return (
    
    <Box sx={{ border: 1,height:"100vh",display:"flex",flexDirection:"column"}}>
    
    { 
      props.selectedContact ?
      <>
      <ChatHeader selectedContact={props.selectedContact} onBackButton={props.onBackButton}/>
      <DisplayMsg selectedContact={props.selectedContact}/>
      <ChatFooter onSendMsg={props.onSendMsg}/>

    
     </>
     :
     <img src="./frontpage.jpeg" alt="React Image" height={"100%"} />
    }

    </Box>
   
    
    )

}

export default Right



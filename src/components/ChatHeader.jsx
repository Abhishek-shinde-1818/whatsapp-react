import React from 'react'
import { Box,Avatar,Typography, Stack} from '@mui/material'
import Menulist from './Menulist';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
const ChatHeader = (props) => {
  return (
    <Box sx={{height:"6vh",display:"flex",flexDirection:"row",padding:"10px"}} bgcolor={"#F0F2F5"} justifyContent={'space-between'} >
    <Stack direction="row" spacing={2} alignItems={"center"}>
    
    <ArrowBackIcon sx={{display:{xs:props.selectedContact ? 'block':'none',sm:'none'}}} onClick={props.onBackButton}/>
    <Avatar alt="Remy Sharp" src={props.selectedContact.profile} />
     <Typography>{props.selectedContact.contactName}</Typography>
    </Stack>
    <Stack direction={'row'} spacing={4} alignItems={"center"} color={'GrayText'}>
    <VideocamIcon />
    <SearchIcon />
    <Menulist/>
    
    </Stack>
 </Box>
  )
}

export default ChatHeader
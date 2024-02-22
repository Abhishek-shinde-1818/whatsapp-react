import React from 'react'
import { Box,Avatar,Typography, Stack} from '@mui/material'
import Menulist from './Menulist';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { onBackButton } from '../Slices/contactsSlice';

const ChatHeader = (props) => {
  
  let selectedContact=useSelector((state) => state.contacts1.selectedcontact)
  let dispatch=useDispatch()
  return (
    <Box sx={{height:"6vh",display:"flex",flexDirection:"row",padding:"10px"}} bgcolor={"#F0F2F5"} justifyContent={'space-between'} >
    <Stack direction="row" spacing={2} alignItems={"center"}>
    
    <ArrowBackIcon sx={{display:{xs:selectedContact ? 'block':'none',sm:'none'}}} onClick={()=>dispatch(onBackButton())}/>
    <Avatar alt="Remy Sharp" src={selectedContact.profile} />
     <Typography>{selectedContact.contactName}</Typography>
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
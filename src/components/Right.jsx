import React from 'react'
import { Box,Avatar,Typography, Stack,Paper,TextField } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoodIcon from '@mui/icons-material/Mood';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DisplayMsg from './DisplayMsg';
import MicIcon from '@mui/icons-material/Mic';

const Right = (props) => {
  
  return (
    <Box sx={{ border: 1,height:"90vh",display:"flex",flexDirection:"column"}}>
    
     <Box sx={{height:"6vh",display:"flex",flexDirection:"row",padding:"10px"}} bgcolor={"#F0F2F5"} justifyContent={'space-between'} >
        <Stack direction="row" spacing={2} alignItems={"center"}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
         <Typography>{props.selectedContact.contactName}</Typography>
        </Stack>
        <Stack direction={'row'} spacing={4} alignItems={"center"} color={'GrayText'}>
        <VideocamIcon />
        <SearchIcon />
        <MoreVertIcon/>
        </Stack>
     </Box>
     <DisplayMsg selectedContact={props.selectedContact}/>
     <Stack height={"9vh"} direction="row" spacing={3} alignItems={"center"} bgcolor={"#F0F2F5"} color={"GrayText"} paddingLeft={"15px"}>
      
      <MoodIcon fontSize='medium'/>
      <AddOutlinedIcon fontSize='medium'/>
      <Paper  elevation={0} sx={{height:"5.5vh",width:"85%",borderRadius:"10px"}} alignItems={'center'}>
      <TextField 
          fontSize={15}
          sx={{paddingLeft:"10px",width:"95%",textAlign:"center"}}
            variant="standard" 
            
            placeholder="type a message"
            InputProps={{
            disableUnderline: true
            }}
            
      />
      </Paper>
      <MicIcon/>
     </Stack>
    </Box>
  )
}

export default Right
import React, { useState } from 'react'
import { Box,Typography, Stack,Paper,TextField, IconButton,Menu,MenuItem} from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoodIcon from '@mui/icons-material/Mood';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';

import onSendMsg from '../ActionCreators/actions';


const ChatFooter = () => {
  


  const[sendText,setSendtext]=useState("")
  const[sendBtEnabled,setSendBtEnabled]=useState(false)
  function sendmsg(text){
    setSendBtEnabled(true)
    setSendtext(text)
    
  }
  const dispatch=useDispatch()
  function onsubmit()
  {
    setSendBtEnabled(false)
    dispatch(onSendMsg(sendText))
    
    setSendtext({msg:"",time:""})
    
  }
  
  return (
    <Stack height={"11vh"} direction="row" spacing={3} alignItems={"center"} bgcolor={"#F0F2F5"} color={"GrayText"} paddingLeft={"15px"}>
      
      <MoodIcon fontSize='medium'/>
      <AccountMenu/>
      
      <Paper  elevation={0} sx={{height:"5.5vh",width:"85%",borderRadius:"10px"}} alignItems={'center'}>
      <TextField 
       onKeyUp={(e)=>{if(e.key==="Enter")
       {onsubmit()}}}
       onChange={(e)=>sendmsg(e.target.value)}
       value={sendText.msg}
          fontSize={15}
          sx={{paddingLeft:"10px",width:"95%",textAlign:"center"}}
            variant="standard" 
            
            placeholder="type a message"
            InputProps={{
            disableUnderline: true
            }}
            
      />
      </Paper>
      
      {
        
        sendBtEnabled===false || sendText.msg=="" ? <MicIcon/> 
        :
        <IconButton 
        onKeyUp={(e)=>{if(e.key==="Enter")
       {onsubmit()}}}
       onClick={()=>onsubmit()}><SendIcon/></IconButton>
      }
      
      
     </Stack>
  )
}

export default ChatFooter

function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <>
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <AddOutlinedIcon fontSize='medium'/>
            </IconButton>
          
        
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: -6,
              ml:20,
              borderRadius:"10px",
            
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                bottom: 1,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
          
          <svg height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clip-rule="evenodd" d="M2 0C0.9 0 0.01 0.9 0.01 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6.83C16 6.3 15.79 5.79 15.41 5.42L10.58 0.59C10.21 0.21 9.7 0 9.17 0H2ZM9 6V1.5L14.5 7H10C9.45 7 9 6.55 9 6ZM4 10C3.44772 10 3 10.4477 3 11C3 11.5523 3.44772 12 4 12H12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10H4ZM10 15C10 14.4477 9.55228 14 9 14H4C3.44772 14 3 14.4477 3 15C3 15.5523 3.44772 16 4 16H9C9.55228 16 10 15.5523 10 15Z" fill="blue"></path></svg>
           <Typography sx={{marginLeft:"10px"}}>Documents</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clip-rule="evenodd" d="M20 14V2C20 0.9 19.1 0 18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14ZM9.4 10.53L11.03 12.71L13.61 9.49C13.81 9.24 14.19 9.24 14.39 9.49L17.35 13.19C17.61 13.52 17.38 14 16.96 14H7C6.59 14 6.35 13.53 6.6 13.2L8.6 10.53C8.8 10.27 9.2 10.27 9.4 10.53ZM0 18V5C0 4.45 0.45 4 1 4C1.55 4 2 4.45 2 5V17C2 17.55 2.45 18 3 18H15C15.55 18 16 18.45 16 19C16 19.55 15.55 20 15 20H2C0.9 20 0 19.1 0 18Z" fill="blue"></path></svg>
          <Typography sx={{marginLeft:"10px"}}>Photos and videos</Typography>
          
          </MenuItem>
          <MenuItem onClick={handleClose}>
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.9999 13.04C8.16657 13.04 6.67479 11.5482 6.67479 9.71486C6.67479 7.88153 8.16657 6.38976 9.9999 6.38976C11.8332 6.38976 13.325 7.88153 13.325 9.71486C13.325 11.5482 11.8332 13.04 9.9999 13.04Z" fill="var(--attachment-type-camera-color)"></path><path fillRule="evenodd" clip-rule="evenodd" d="M14.606 1.6763C14.9347 2.23849 15.5121 2.60821 16.1634 2.60821H16.2429C18.3177 2.60821 20 4.29014 20 6.36531V14.8157C20 16.8902 18.3177 18.5725 16.2429 18.5725H3.7571C1.68226 18.5725 0 16.8902 0 14.8157V6.36531C0 4.29014 1.68226 2.60821 3.7571 2.60821H3.83661C4.48792 2.60821 5.06535 2.23849 5.39398 1.6763C5.98035 0.673833 7.06697 0 8.3126 0H11.6874C12.933 0 14.0193 0.673833 14.606 1.6763ZM9.9999 4.73333C7.25322 4.73333 5.01837 6.96818 5.01837 9.71486C5.01837 12.4615 7.25322 14.6964 9.9999 14.6964C12.7466 14.6964 14.9814 12.4615 14.9814 9.71486C14.9814 6.96818 12.7466 4.73333 9.9999 4.73333Z" fill="red"></path></svg>
          <Typography sx={{marginLeft:"10px"}}>Camera</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clip-rule="evenodd" d="M12 4C12 6.21 10.21 8 8 8C5.79 8 4 6.21 4 4C4 1.79 5.79 0 8 0C10.21 0 12 1.79 12 4ZM0 14C0 11.34 5.33 10 8 10C10.67 10 16 11.34 16 14V15C16 15.55 15.55 16 15 16H1C0.45 16 0 15.55 0 15V14Z" fill="blue"></path></svg>
          <Typography sx={{marginLeft:"10px"}}>contact</Typography>
           
          </MenuItem>
          <MenuItem onClick={handleClose}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clip-rule="evenodd" d="M0 2C0 0.895431 0.895431 0 2 0H11C12.1046 0 13 0.895431 13 2C13 3.10457 12.1046 4 11 4H2C0.89543 4 0 3.10457 0 2ZM0 8C0 6.89543 0.895431 6 2 6H14C15.1046 6 16 6.89543 16 8C16 9.10457 15.1046 10 14 10H2C0.895431 10 0 9.10457 0 8ZM2 12C0.895431 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16H8C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12H2Z" fill="yellow"></path></svg>
          <Typography sx={{marginLeft:"10px"}}>Poll</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clip-rule="evenodd" d="M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23ZM17.25 15.75C17.25 15.3358 17.5858 15 18 15C18.4142 15 18.75 15.3358 18.75 15.75V17.25H20.25C20.6642 17.25 21 17.5858 21 18C21 18.4142 20.6642 18.75 20.25 18.75H18.75V20.25C18.75 20.6642 18.4142 21 18 21C17.5858 21 17.25 20.6642 17.25 20.25V18.75H15.75C15.3358 18.75 15 18.4142 15 18C15 17.5858 15.3358 17.25 15.75 17.25H17.25V15.75Z" fill="var(--attachment-type-stickers-color)"></path><path fillRule="evenodd" clip-rule="evenodd" d="M2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V12.2547C20.8662 11.4638 19.4872 11 18 11C14.134 11 11 14.134 11 18C11 19.4872 11.4638 20.8662 12.2547 22H7C4.23858 22 2 19.7614 2 17V7ZM14 9.5L14.7812 7.78125L16.5 7L14.7812 6.21875L14 4.5L13.2188 6.21875L11.5 7L13.2188 7.78125L14 9.5ZM8 8.5L9.25 11.25L12 12.5L9.25 13.75L8 16.5L6.75 13.75L4 12.5L6.75 11.25L8 8.5Z" fill="green"></path></svg>
          <Typography sx={{marginLeft:"10px"}}>New Sticker</Typography>
          </MenuItem>
         
        </Menu>
      </>
    );
  }
  
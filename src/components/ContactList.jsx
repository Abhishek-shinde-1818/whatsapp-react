
import React from 'react'
import { Box,Divider,List,Drawer, Stack} from '@mui/material'
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Right from './Right';

const Person = (props) =>{
    
  let color1;
  if (props.person.mobileNo === props.selectedContact.mobileNo) {
    color1 = "#F0F2F5"
  } else {
    color1 = 'white'
  }
  let lastText=(props.person.messages.length)-1
  let msg=props.person.messages[lastText].msg
  let msglen=msg.length
  
     return(
     <> 
      <ListItem alignItems="flex-start" onClick={()=>props.selectContact(props.person)} sx={{backgroundColor:color1,cursor:"pointer"}} >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={props.person.profile} sx={{height:"50px",width:"50px"}}/>
        </ListItemAvatar>
        <ListItemText
         sx={{ml:2,mt:2}}
         >
         <Stack direction={'row'} justifyContent={'space-between'}>
         <Typography>{props.person.contactName}</Typography>
         <Typography sx={{fontSize:"12px"}}>{props.person.messages[lastText].time}</Typography>
         </Stack>
         
         <Typography>{msglen < 35 ? msg : msg.slice(0,35) + "..."}</Typography>
         </ListItemText>
      </ListItem>
      <Divider  variant="inset" component="li"/>
      </>
      
       
     )
}
const ContactList = (props) => {
  let searchText=props.searchText
  let clonedArray = [...props.contacts]

  function displayList()
  {
    if (searchText !== undefined) {
      clonedArray = clonedArray.filter(user => user.contactName.includes(searchText));
    }
    
    let contactArr=[]
     for(let i=0;i<clonedArray.length;i++)
     {
       contactArr.push(<Person person={clonedArray[i]} selectContact={props.selectContact} selectedContact={props.selectedContact} key={clonedArray[i].mobileNo}/>)
     }
     return contactArr
  }
  return (
    
    <Box sx={{height:"80vh",overflow:'scroll', overflowX:'hidden',scrollbarWidth:"thin"}} >
    
     <List sx={{ width: '100%',bgcolor: 'background.paper' }}>
        {
            displayList()
        }
      </List>
       
    </Box>
  
  )
}

export default ContactList


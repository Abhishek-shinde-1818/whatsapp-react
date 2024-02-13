
import React from 'react'
import { Box,Divider,List,Drawer} from '@mui/material'
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Person = (props) =>{
     return(
     <> 
      <ListItem alignItems="flex-start" onClick={()=>props.selectContact(props.person)}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{height:"50px",width:"50px"}}/>
        </ListItemAvatar>
        <ListItemText
         sx={{ml:2}}
          primary={props.person.contactName}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline'}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
             
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider  variant="inset" component="li"/>
      </>
      
       
     )
}
const ContactList = (props) => {
  function displayList()
  {
    console.log("ccccc",props.contacts);
    let contactArr=[]
     for(let i=0;i<props.contacts.length;i++)
     {
       contactArr.push(<Person person={props.contacts[i]} selectContact={props.selectContact}/>)
     }
     return contactArr
  }
  return (
    
    <Box sx={{height:"78vh",overflow:'scroll', overflowX:'hidden',scrollbarWidth:"thin"}} >
    
     <List sx={{ width: '100%',bgcolor: 'background.paper' }}>
        {
            displayList()
        }
      </List>
       
    </Box>
  
  )
}

export default ContactList
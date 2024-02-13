import React from 'react'
import Box from '@mui/material/Box';

import Toolbar1 from './Toolbar1';
import ContactList from './ContactList';


const Left = (props) => {
  return (
   <Box sx={{ border: 1,height:"90vh",display:"flex",flexDirection:"column"}}>
   
    <Toolbar1 />
    <ContactList contacts={props.contacts} selectContact={props.selectContact}/>
      
   </Box>
  )
}

export default Left
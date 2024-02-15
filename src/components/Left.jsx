import React, { useState } from 'react'
import Box from '@mui/material/Box';

import Toolbar1 from './Toolbar1';
import ContactList from './ContactList';


const Left = (props) => {

  const[searchText,setSearchText]=useState("")
  function handleInputChange(text)
  {
    setSearchText(text)
  }
  return (
   <Box sx={{ border: 1,height:"100vh",display:"flex",flexDirection:"column"}}>
   
    <Toolbar1 handleInputChange={handleInputChange}/>
    <ContactList contacts={props.contacts} selectContact={props.selectContact} selectedContact={props.selectedContact} searchText={searchText}/>
      
   </Box>
  )
}

export default Left
import React, { useState } from 'react'
import Box from '@mui/material/Box';

import Toolbar1 from './Toolbar1';
import ContactList from './ContactList';


const Left = () => {

  
  return (
   <Box sx={{ border: 1,height:"100vh",display:"flex",flexDirection:"column"}}>
   
    <Toolbar1 />
    <ContactList />
      
   </Box>
  )
}

export default Left
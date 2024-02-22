import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Left from './components/Left'
import Right from './components/Right';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

function App() {

  let selectedContact=useSelector((state)=>state.contacts1.selectedcontact)
  
  
  return (
   <Grid container direction={'row'} height={"100%"} >
    <Grid item lg={3.5} xs={12} sm={5} md={4} xl={4} sx={{display:{xs:(selectedContact)? 'none':'block',sm:'block'}}}>
    <Left  />
    </Grid>
    <Grid item lg={8.5} xs={12} sm={7} md={8} xl={8}  sx={{display:{xs:(selectedContact)? 'block':'none',sm:'block'}}} >
    <Right   />
    </Grid>
   </Grid>
  );
}

export default App;

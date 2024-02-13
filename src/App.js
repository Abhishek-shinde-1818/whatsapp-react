import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Left from './components/Left'
import Right from './components/Right';
import { Grid } from '@mui/material';
import { blue, red } from '@mui/material/colors';
function App() {

  const[contacts,setContacts]=useState([
    {
      contactName:"rohan",
      mobileNumber:9889898989,
      messages:["hii","how are you"]
    },
    {
      contactName:"shrikant",
      messages:["hii","how are you"]
    },
    {
      contactName:"Ashish",
      messages:["hii","how are you"]
    },
    {
      contactName:"rohan",
      messages:["hii","how are you"]
    },
    {
      contactName:"shrikant",
      messages:["hii","how are you"]
    },
    {
      contactName:"Ashish",
      messages:["hii","how are you"]
    },{
      contactName:"rohan",
      messages:["h","how are youuuuuuuuuuuuuuuuuuuuuuu"]
    },
    {
      contactName:"shrikant",
      messages:["hii","how are youuuuuuuuuuuuuu"]
    },
    {
      contactName:"Ashish",
      messages:["hii","how are you"]
    }
  ])
   
  const[selectedContact,setSelectedContact]=useState({
    contactName:"Ashish",
    messages:["hii","how are you"]
  })
  function selectContact(contact)
  {
    console.log("hjhjkhjk",contact);
    setSelectedContact(contact)
  }

  return (
   <Grid container direction={'row'} margin={"20px"} height={"90vh"}>
    <Grid item lg={3.4} xs={2}>
    <Left contacts={contacts} selectContact={selectContact}/>
    </Grid>
    <Grid item lg={8.3}  xs={10} >
    <Right selectedContact={selectedContact}/>
    </Grid>
   </Grid>
  );
}

export default App;

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Left from './components/Left'
import Right from './components/Right';
import { Grid } from '@mui/material';
import { blue, red } from '@mui/material/colors';
function App() {
  var time = new Date();
  time=time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  const[contacts,setContacts]=useState([
    {
      contactName:"rohan",
      mobileNo:9999999999,
      profile:"./rohan.jpg",
      messages:[{msg:"hii",time:time}]
    },
    {
      contactName:"shrikant",
      mobileNo:8888888888,
      profile:"./ashish.jpg",
      messages:[{msg:"hii",time:time}]
    },
    {
      contactName:"Ashish",
      mobileNo:7777777777,
      profile:"./shriknt.jpg",
      messages:[{msg:"bye",time:time}]
    },
    {
      contactName:"bhargav",
      mobileNo:6666666666,
      profile:"./rainbow.jpg",
      messages:[{msg:"hii",time:time}]
    },
    {
      contactName:"prasenjit",
      mobileNo:5555555555,
      profile:"./bhargav.jpg",
      messages:[{msg:"hii",time:time}]
    },
    {
      contactName:"Harshal",
      mobileNo:4444444444,
      profile:"./harshal1.jpg",
      messages:[{msg:"hii",time:time}]
    },{
      contactName:"hemant",
      mobileNo:3333333333,
      profile:"./bhargav.jpg",
      messages:[{msg:"hii",time:time}]
    },
    {
      contactName:"om",
      mobileNo:22222222222,
      profile:"./om.jpg",
      messages:[{msg:"hii",time:time}]
    }
  ])
  
  function onSendMsg(msgObj){
    let tempArr=JSON.parse(JSON.stringify(contacts))
    let msgArr=selectedContact.messages
    msgArr.push(msgObj)
    var index = tempArr.findIndex(contact => contact.mobileNo === selectedContact.mobileNo);
    tempArr[index].messages=msgArr

    setContacts(tempArr)
    console.log("ccccccccccccc",contacts);
  }

  const[selectedContact,setSelectedContact]=useState("")
  function selectContact(contact)
  {
    console.log("hjhjkhjk",contact);
    setSelectedContact(contact)
  }
  function onBackButton()
  {
    setSelectedContact("")
  }
  
  return (
   <Grid container direction={'row'} height={"100%"} >
    <Grid item lg={3.5} xs={12} sm={5} md={4} xl={4} sx={{display:{xs:(selectedContact)? 'none':'block',sm:'block'}}}>
    <Left contacts={contacts} selectContact={selectContact} selectedContact={selectedContact}/>
    </Grid>
    <Grid item lg={8.5} xs={12} sm={7} md={8} xl={8}  sx={{display:{xs:(selectedContact)? 'block':'none',sm:'block'}}} >
    <Right selectedContact={selectedContact} onSendMsg={onSendMsg} onBackButton={onBackButton}/>
    </Grid>
   </Grid>
  );
}

export default App;

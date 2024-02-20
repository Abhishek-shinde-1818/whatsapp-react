import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Left from './components/Left'
import Right from './components/Right';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

function App() {
  let dummy="ghgjgj"
  let arr=useSelector((state) => state.contacts1.contactData)
  console.log("reduxxxxxxxxxx",arr);
  
  const[contacts,setContacts]=useState([
    {
      contactName:"rohan",
      mobileNo:9999999999,
      profile:"./rohan.jpg",
      messages:[{msg:"hii",time:"10:10 AM"}]
    },
    {
      contactName:"shrikant",
      mobileNo:8888888888,
      profile:"./ashish.jpg",
      messages:[{msg:"hii",time:"03:10 PM"}]
    },
    {
      contactName:"Ashish",
      mobileNo:7777777777,
      profile:"./shriknt.jpg",
      messages:[{msg:"bye",time:"10:40 PM"}]
    },
    {
      contactName:"bhargav",
      mobileNo:6666666666,
      profile:"./rainbow.jpg",
      messages:[{msg:"hii",time:"06:11 PM"}]
    },
    {
      contactName:"prasenjit",
      mobileNo:5555555555,
      profile:"./bhargav.jpg",
      messages:[{msg:"hii",time:"08:10 PM"}]
    },
    {
      contactName:"Harshal",
      mobileNo:4444444444,
      profile:"./harshal1.jpg",
      messages:[{msg:"hii",time:"10:50 PM"}]
    },{
      contactName:"hemant",
      mobileNo:3333333333,
      profile:"./bhargav.jpg",
      messages:[{msg:"hii",time:"10:30 PM"}]
    },
    {
      contactName:"om",
      mobileNo:22222222222,
      profile:"./om.jpg",
      messages:[{msg:"hii",time:"09:10 PM"}]
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

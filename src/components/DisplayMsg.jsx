import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import chatbg from './whatsapp.jpg'
import React from 'react'


const Msg = (props) =>{
  return(
    //  <Paper sx={{height:"4.5vh",maxWidth:"auto",textAlign:"left",justifyItems:"center",bgcolor:"#D1FFBD"}} direction={"row"} >
       <Stack direction={"row"}   padding={"6px"} sx={{textAlign:"left",justifyItems:"center",bgcolor:"#D1FFBD"}}> 
         <Typography>{props.msg.msg}</Typography>
         <Typography sx={{marginTop:"10px",fontSize:"11px",paddingLeft:"5px",color:"GrayText"}}>{props.msg.time}</Typography>
        </Stack>
    //  </Paper>
  )
}
const DisplayMsg = (props) => {
    
    const styles={
        paperContainer:{
        backgroundImage:`url(${chatbg})`,
        // opacity: 0.4,
        
    }
    };
    function fun()
    {
      let msgArr=props.selectedContact.messages
     
      let Arr=[]
      for(let i=0;i<msgArr.length;i++)
      {
         Arr.push(<Msg msg={props.selectedContact.messages[i]}/>)
      }
      console.log("ssssssssss",Arr);
      return Arr
    }

  return (
    
    <Grid
    sx={{height:"83vh",display:"flex",flexDirection:"row"}}>
    
    <Paper style={styles.paperContainer} sx={{height:"83vh",width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-end",overflowY:"scroll"}}>
     <Stack direction={'column'} spacing={2} mt={"10px"} mr={"15px"} alignContent="flex-end">
    {

      fun()
      
    }
    </Stack>
    </Paper>
    </Grid>
    
  )
}

export default DisplayMsg
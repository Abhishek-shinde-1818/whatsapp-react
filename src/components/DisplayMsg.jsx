import { Box, Paper, Stack } from '@mui/material'
import chatbg from './whatsapp.jpg'
import React from 'react'


const Msg = (props) =>{
  return(
     <Paper sx={{height:"5vh",width:"auto"}} >
       {props.msg}
     </Paper>
  )
}
const DisplayMsg = (props) => {
    const styles={
        paperContainer:{
        backgroundImage:`url(${chatbg})`,
        // opacity: 0.3,
        
    }
    };
    function fun()
    {
      let msgArr=props.selectedContact.messages
      console.log("asasasas",msgArr);
      let Arr=[]
      for(let i=0;i<msgArr.length;i++)
      {
         Arr.push(<Msg msg={props.selectedContact.messages[i]}/>)
      }
      console.log("ssssssssss",Arr);
      return Arr
    }
  return (
    <Box 
    sx={{height:"73vh",display:"flex",flexDirection:"row"}}>
    <Paper style={styles.paperContainer}  sx={{height:"73vh",width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
     <Stack direction={'column'} spacing={2} mt={"10px"} mr={"15px"}>
    {

      fun()
      
    }
    </Stack>
    </Paper>
    </Box>
  )
}

export default DisplayMsg
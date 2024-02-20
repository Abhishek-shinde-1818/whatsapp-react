import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar, Stack, Typography } from '@mui/material';
import img1 from "./Images/dp.jpg"

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 503 ,height:"100vh",display:'flex',flexDirection:'column'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <Stack sx={{height:"17vh"}} bgcolor={"#006D5B"} direction={'row'} spacing={3} alignItems={"self-end"}>
      <ArrowBackIcon sx={{marginLeft:"50px"}}/>
      <Typography marginLeft={"15px"}>Profile</Typography>
     </Stack>
     <Stack sx={{height:"35vh"}} alignItems={'center'} bgcolor={"#F0F2F5"}>
      <img src={img1} height={"180px"} width={"180px"} style={{borderRadius:"100px",marginTop:"25px"}}/>
     </Stack>
     <Divider/>
     <Stack sx={{height:"17vh"}} >
     <Typography margin={"15px"}>Your name</Typography>
     <Typography margin={"15px"}>Abhi</Typography>
     </Stack>
     <Divider/>
     <Stack sx={{height:"15vh"}}>
     <Typography margin={"15px"}>About</Typography>
     <Typography margin={"15px"}>My only competitor is the person I was yesterday....💯</Typography>
     </Stack>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar onClick={toggleDrawer(anchor, true)} alt="Travis Howard" src={img1}  margin={"9px"}/>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
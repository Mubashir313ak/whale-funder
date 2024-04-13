import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from '../assets/obj.png';
import LowerLeftImage from '../assets/rt.png'
import UpperRightImage from '../assets/rta.png'
import FourBoxSection from './boxes';
import Paper from '@mui/material/Paper';
import Group from '../assets/Group.png'
const Objective = () => {

  return (
    <>
     <Box sx={{ paddingX: 2,mt:'8rem',ml:'3rem',mr:'3rem' }}>
      <Grid container spacing={2}>
       
        <Grid item xs={12} md={6}>
        <Typography variant="h4" component="h1" sx={{ fontSize: '50px' }}>
     Know Your   <span style={{ color: '#2176B9' }}>Trading Objectives</span>  
      </Typography>
          <Typography variant="body1">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </Typography>
          <Box sx={{display:'flex'}}>
            <Typography>APpppp</Typography>
            <Typography>APpppp</Typography>
            <Typography>APpppp</Typography>

          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
        <img src={Image} alt='k' width='100%'/>
        </Grid>
      </Grid>
     
    </Box>
    
    </>
  );
};

export default Objective;

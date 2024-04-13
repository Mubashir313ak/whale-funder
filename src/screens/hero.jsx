import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from '../assets/hero.png';
import LowerLeftImage from '../assets/rt.png'
import UpperRightImage from '../assets/rta.png'
import FourBoxSection from './boxes';
import Paper from '@mui/material/Paper';
import Group from '../assets/Group.png'
const HeroSection = () => {

  return (
    <>
      <Box sx={{ position: 'relative', padding: '20px', height: '910px' ,width:'100%'}}>
        <Grid container spacing={3} alignItems="center" backgroundColor='#17202e' >
          <Grid item xs={12} md={6} sx={{color:'white',marginBottom:{md:'20rem'}}}>
            <Typography variant="h4" gutterBottom >
              SINCE 2021
            </Typography>
            <Typography variant="h5" gutterBottom>
              WE ARE LOOKING FOR PROFITABLE TRADERS
            </Typography>
            <Typography variant="body1" gutterBottom>
              Unleash your inner whale and trade up to $500,000 in a trading environment where you can earn real gains.
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
              <Button variant="contained" color="primary" sx={{ marginRight: '10px' }} fullWidth>
                Sign Up
              </Button>
              <Button variant="outlined" color="primary" fullWidth sx={{ backgroundColor: 'black' }}>
                Learn More
              </Button>
              
            </div>
            {/* <Box sx={{mt:'30px'}}>
            <img src={Group} alt='group' width='720px'/></Box> */}

          </Grid>
          <Grid item xs={12} md={6} container justifyContent="center" sx={{ position: 'relative' }}>
            <img src={Image} alt="Your Alt Text" style={{ width: '337px', height: '926px' }} />
            <img src={UpperRightImage} alt="Upper Right Image" style={{ position: 'absolute', top: '110px', right: '10px', width: '256px', height: '184px' }} />
            <img src={LowerLeftImage} alt="Lower Left Image" style={{ position: 'absolute', bottom: '220px', left: '10px', width: '385px', height: '277px' }} />
          </Grid>
        </Grid>
        {/* //grid2 */}
        <Grid container spacing={2} sx={{ margin: '-50px auto', width: '90%' }}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
          <Typography variant="h4" gutterBottom color='#2176B9'>
            180 M+
          </Typography>
          <Typography variant="body1">
            Paid out to FTMO <br/>traders
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
          <Typography variant="h4" gutterBottom color='#2176B9'>
            180+
          </Typography>
          <Typography variant="body1">
            no. of countries with traders registerd
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
          <Typography variant="h4" gutterBottom color='#2176B9'> 
            16 M+
          </Typography>
          <Typography variant="body1">
            no. of trades opened every month
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
          <Typography variant="h4" gutterBottom color='#2176B9'>
            8h
          </Typography>
          <Typography variant="body1">
            Average payout processing time
          </Typography>
        </Paper>
      </Grid>
    </Grid>
      </Box>
    
    </>
  );
};

export default HeroSection;

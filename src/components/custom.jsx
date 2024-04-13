import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Lg from '../assets/l.png'
import Lg1 from '../assets/lg1.png'
import Lg2 from '../assets/lg2.png'
import Lg3 from '../assets/lg3.png'

function CustomGrid() {
  return (
    <>
    <Typography sx={{ mt: '10rem', textAlign: 'center' ,fontFamily:'bold',fontSize:'30px'}}>
      <span style={{ color: '#2176B9' }}>WhaleFundr</span> is one of the most reliable firms<br/> in modern prop trading industry.
    </Typography>
    <Grid container spacing={2} sx={{ margin: '-50px auto', width: '90%', mt: { xs: '35rem', sm: '35rem', md: '5rem' } }}>

      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px'}}>
         <img src={Lg1} alt='lg2'/>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
        <img src={Lg3} alt='lg1'/>

        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
        <img src={Lg1} alt='lg1'/>

        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
        <img src={Lg3} alt='lg1'/>

        </Paper>
      </Grid>
    </Grid>
    <Grid container spacing={2} sx={{ margin: '-50px auto', width: '90%',mt:'3rem' }}>

      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px'}}>
         <img src={Lg1} alt='lg2'/>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
        <img src={Lg3} alt='lg1'/>

        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
        <img src={Lg1} alt='lg1'/>

        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
        <img src={Lg3} alt='lg1'/>

        </Paper>
      </Grid>
    </Grid>
    </>

  );
}

export default CustomGrid;

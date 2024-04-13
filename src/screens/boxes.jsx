import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
const FourBoxSection = () => {
  return (
    <>
    <Grid container spacing={2} sx={{ margin: '-50px auto', width: '90%' }}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
          <Typography variant="h6" gutterBottom>
            Box 1
          </Typography>
          <Typography variant="body1">
            Content for Box 1
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
          <Typography variant="h6" gutterBottom>
            Box 2
          </Typography>
          <Typography variant="body1">
            Content for Box 2
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
          <Typography variant="h6" gutterBottom>
            Box 3
          </Typography>
          <Typography variant="body1">
            Content for Box 3
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
          <Typography variant="h6" gutterBottom>
            Box 4
          </Typography>
          <Typography variant="body1">
            Content for Box 4
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    
 
    </>
  );
};

export default FourBoxSection;

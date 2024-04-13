import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Boxs from '../assets/boxes.png'
const CompanyInfo = () => {
  return (
    <Box sx={{ padding: '20px', textAlign: 'center', mt:'100px'}}>
     <Typography variant="h5" component="h1" sx={{ fontSize: '40px' }}>
        <span style={{ color: '#2176B9' }}>WhaleFundr</span> is one of the most reliable firms <br />in the modern prop trading industry.
      </Typography>
      <Box>
        <img src={Boxs} alt='a' width='900px'/>
      </Box>
    </Box>
  );
};

export default CompanyInfo;

import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Image1 from '../assets/pic1.png';
import Image2 from '../assets/pic2.png';
import Image3 from '../assets/pic3.png';
import Grouped from '../assets/Group1.png'
export default function Trading() {
  return (
    <Box sx={{ paddingX: 2,mt:'8rem',ml:'3rem',mr:'3rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img src={Image1} alt="Image 1" style={{ width: '100%', height: 'auto' }} />
              <Typography variant="body2" align="center">Profit Split</Typography>
              <Typography color='#2176B9' variant="body2" fontSize='25px' align="center">$4600</Typography>
            </Grid>
            <Grid item xs={4}>
              <img src={Image2} alt="Image 2" style={{ width: '100%', height: 'auto' }} />
              <Typography variant="body2" align="center">Profit Split</Typography>
              <Typography color='#2176B9' variant="body2" fontSize='25px' align="center">$4600</Typography>
            </Grid>
            <Grid item xs={4}>
              <img src={Image3} alt="Image 3" style={{ width: '100%', height: 'auto' }} />
              <Typography variant="body2" align="center">Profit Split</Typography>
              <Typography color='#2176B9' variant="body2" fontSize='25px' align="center">$4600</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h5" component="h1" sx={{ fontSize: '30px' }}>
     Trade For   <span style={{ color: '#2176B9' }}>Modern Prop</span>  <br /> <span style={{ color: '#2176B9' }}>trading</span> firm
      </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur metus vitae tortor vehicula, ut suscipit eros vulputate. In hac habitasse platea dictumst. Aenean ut nunc sit amet urna tincidunt ultricies. Vestibulum rhoncus neque at ipsum dignissim, sit amet ultricies odio placerat. Fusce auctor pulvinar metus, nec tempor odio luctus in. Pellentesque aliquam odio sit amet pharetra efficitur. Curabitur sit amet eros nec elit maximus tempor. Cras mattis purus id leo scelerisque, non gravida sapien pulvinar. Sed at mi sit amet nunc mattis rutrum. Vivamus efficitur enim quis neque ullamcorper interdum.
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{justifyContent:'center' ,mt:'2rem'}} >
        <img src={Grouped} alt='ff' width='100%'/>
      </Box>
    </Box>
  );
}

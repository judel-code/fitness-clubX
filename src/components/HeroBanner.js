import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';


import HeroBannerImage from '../assets/images/banner1.jpg';

const HeroBanner = () => (
  <Grid container direction="column" alignItems="center" justify="center" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${HeroBannerImage})`,backgroundSize:"cover"}} sx={{ mt: { lg: '50px', xs: '70px' } }} position="relative" p="20px" paddingTop="50px">
    <Typography fontWeight={600} color="#4DB5FF" sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
    Fitness ClubX
    </Typography>
    <Typography  color="#4DB5FF" fontWeight="600" fontSize="26px">Fitness ClubX</Typography>
    <Typography color="white" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
    Sweat today, shine tomorrow.
    </Typography>
    <Typography color="#e6dfdf" fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#4DB5FF', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    
    
  </Grid>
);

export default HeroBanner;

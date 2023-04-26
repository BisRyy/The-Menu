import styled from '@emotion/styled';
import { Box, Button, Container, Rating, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import menu from '../data/menuItem';
import { MenuFilterSidebar, MenuList, MenuSort } from '../sections/@dashboard/menus';
import { get } from '../redux/menuSlice';
import HotelList from '../sections/@dashboard/menus/HotelList';


const hotel = {
  name: 'Sky Light Hotel',
  password: '12345678',
  location: {
    address: 'Bole Road',
    city: 'Addis Ababa',
    state: 'Addis Ababa',
    country: 'Ethiopia',
    postalCode: '1000',
  },
  contact: {
    email: 'skylight@gmail.com',
    phone: '+2519456789',
    socialMedia: {
      facebook: 'https://www.facebook.com/skylight',
      twitter: 'https://www.twitter.com/skylight',
      instagram: 'https://www.instagram.com/skylight',
    },
  },
  images: [],
  profileImage: 'hotel.jpeg',
  star: 5,
};

export default function Hotels() {
  const [HOTELS, setHOTELS] = useState([]);

  axios.get(`/api/hotels`).then((res) => {
    console.log('res', res.data);
    setHOTELS(res.data);
  });


  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '24px',
    color: 'orange',
    fontWeight: 'bold',
    margin: theme.spacing(4, 0, 2, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  }));

  return (
    <>
      <Box
        sx={{
          // minHeight: '100vh',
          pb: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // justifyContent: "center",
          // border: "2px solid red",
          backgroundImage: `url(/assets/images/hotel_cover.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // border: "2px solid red",
          width: '100%',
          minHeight: '40vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          mb: 4,
        }}
      >
        <Title variant="h2"> Featured Hotels </Title>
        <Rating sx={{ pb: 4 }} name="read-only" value={hotel.star} readOnly />
        <Typography
          variant="body2"
          sx={{
            fontSize: '18px',
            color: 'white',
            mb: 4,
            maxWidth: 700,
            textAlign: 'center',
          }}
        >
          Add your Hotel to this list Now.
        </Typography>
      </Box>

        {HOTELS && <Container>
          <HotelList hotels={HOTELS} />
        </Container>}
      </Box>
    </>
  );
}

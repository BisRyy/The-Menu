import styled from '@emotion/styled';
import { Box, Container, Rating, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import menu from '../data/menuItem';
import HotelList from '../sections/@dashboard/menus/HotelList';

export default function Hotels() {
  const [HOTELS, setHOTELS] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/hotels?sortOrder=asc`)
      .then((res) => {
        console.log('res', res.data);
        setHOTELS(res.data.slice(0, 4));
      })
      .catch((err) => console.error('Failed to fetch hotels:', err));
  }, []);

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
            minHeight: '30vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            mb: 4,
          }}
        >
          <Title variant="h2"> Featured Hotels </Title>
          <Rating sx={{ pb: 4 }} name="read-only" value={5} readOnly />
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

        {HOTELS && (
          <Container
            sx={{
              my: 12,
            }}
          >
            <HotelList hotels={HOTELS} />
          </Container>
        )}
      </Box>
    </>
  );
}

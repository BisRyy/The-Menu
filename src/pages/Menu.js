import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Box, Button, Container, Rating, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MenuCard from '../components/card/MenuCard';
// import menu from '../data/menuItem';
import { MenuFilterSidebar, MenuList, MenuSort } from '../sections/@dashboard/menus';
import { get } from '../redux/menuSlice';

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

// const menu = {
//   hotelId: '643c8cef0f0d079baee29a4d',
//   name: 'Veggie Burger',
//   description: 'Delicious veggie burger with a special sauce',
//   ingredients: ['Lentil Patty', 'Bun', 'Lettuce'],
//   price: 9.99,
//   allergenInformation: 'Contains gluten and dairy',
//   nutritionalInformation: ['Protein: 15g', 'Carbs: 30g', 'Fat: 10g'],
//   vegetarian: 'Vegetarian',
//   images: [],
//   type: 'Main Course',
//   availability: 'Available all day',
//   rating: 0,
//   reviews: [],
// };

export default function Menu() {
  const [MENULIST, setMENULIST] = useState([]);
  const [hotel, setHotel] = useState([])
  const {id} = useParams();

  const [sortBy, setSortBy] = useState('price');
  const [sortOrder, setSortOrder] = useState('desc');

  axios.get(`/api/menus/hotel/${id}?sortBy=${sortBy}&sortOrder=${sortOrder}`).then((res) => {
    console.log('res', res.data);
    setMENULIST(res.data);
  });

  axios.get(`/api/hotels/${id}`).then((res) => {
    console.log('res', res.data);
    setHotel(res.data);
  });

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

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
        {
         hotel.location && <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            // border: "2px solid red",
            width: '100%',
            minHeight: '40vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <Title variant="h2"> {hotel.name} </Title>
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
            {hotel.location.address}, {hotel.location.city}, {hotel.location.country}
            <br />
            {hotel.contact.email}, {hotel.contact.phone}
          </Typography>
        </Box> }
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center',
            padding: 5,
            flexWrap: 'wrap',
            width: '100%',
            gap: 2,
            height: '60vh',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center',
            padding: 5,
            flexWrap: 'wrap',
            width: '100%',
            gap: 2,
          }}
        >
          {menu.map((item) => (
            <MenuCard key={item._id} menu={item} />
          ))}
        </Box> */}

        { MENULIST &&
          <Container>
          <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
              <Button variant="contained" error>
                <MenuFilterSidebar
                  openFilter={openFilter}
                  onOpenFilter={handleOpenFilter}
                  onCloseFilter={handleCloseFilter}
                />
              </Button>
              <Button variant="contained">
                <MenuSort by={sortBy} order={sortOrder} setBy={setSortBy} setOrder={setSortOrder} />
              </Button>
            </Stack>
          </Stack>
          <MenuList menus={MENULIST} />
        </Container>}
      </Box>
    </>
  );
}

import styled from '@emotion/styled';
import { Box, Button, Container, Grid, Rating, Skeleton, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import menu from '../data/menuItem';
import { MenuFilterSidebar, MenuList, MenuSort } from '../sections/@dashboard/menus';

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

export default function Menu() {
  const [originalMenuList, setOriginalMenuList] = useState([]); // State to hold the original unfiltered list
  const [menuList, setMenuList] = useState([]); // State for displaying the menu
  const [hotel, setHotel] = useState({});
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('price');
  const [sortOrder, setSortOrder] = useState('desc');
  const [openFilter, setOpenFilter] = useState(false);
  const [filter, setFilter] = useState({
    availability: [],
    vegetarian: null,
    type: [],
    price: null,
  });

  // Fetching menu list
  useEffect(() => {
    axios.get(`/api/menus/hotel/${id}?sortBy=${sortBy}&sortOrder=${sortOrder}`).then((res) => {
      setOriginalMenuList(res.data); // Set the original data
      setMenuList(res.data); // Set the filtered data
    });
  }, [id, sortBy, sortOrder]);

  // Fetching hotel details
  useEffect(() => {
    axios.get(`/api/hotels/${id}`).then((res) => {
      setHotel(res.data);
      setIsLoading(false);
    });
  }, [id]);

  // Filtering menus
  useEffect(() => {
    const filteredMenus = originalMenuList.filter((menu) => {
      if (filter.type.length > 0 && !filter.type.includes(menu.type)) {
        return false;
      }

      if (filter.availability.length > 0 && !filter.availability.includes(menu.availability)) {
        return false;
      }
      if (filter.vegetarian && filter.vegetarian !== menu.vegetarian && filter.vegetarian !== 'All') {
        return false;
      }
      if (filter.price) {
        if (filter.price === 'below' && menu.price >= 250) return false;
        if (filter.price === 'between' && (menu.price < 250 || menu.price > 600)) return false;
        if (filter.price === 'above' && menu.price <= 600) return false;
      }
      return true;
    });
    setMenuList(filteredMenus);
  }, [filter, originalMenuList]);

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
          minHeight: '100vh',
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
        {hotel.location && (
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
          </Box>
        )}

        <Container>
          {isLoading ? (
            <Skeleton variant="rectangular" width="100%" height={300} />
          ) : (
            <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
              <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <Button variant="contained" error>
                  <MenuFilterSidebar
                    openFilter={openFilter}
                    onOpenFilter={handleOpenFilter}
                    onCloseFilter={handleCloseFilter}
                    filter={filter}
                    setFilter={setFilter}
                  />
                </Button>
                <Button variant="contained">
                  <MenuSort by={sortBy} order={sortOrder} setBy={setSortBy} setOrder={setSortOrder} />
                </Button>
              </Stack>
            </Stack>
          )}
          {isLoading ? (
            <Grid container spacing={3}>
              {Array.from({ length: 6 }).map((_, index) => (
                <Grid key={index} item xs={6} sm={4} md={3}>
                  <Skeleton variant="rectangular" width="100%" height={118} sx={{ borderRadius: 1 }} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <MenuList menus={menuList} />
          )}
        </Container>
      </Box>
    </>
  );
}

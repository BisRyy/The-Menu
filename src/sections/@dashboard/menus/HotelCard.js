import { useState } from 'react';
import PropTypes from 'prop-types';
// @mui
import { Box, Card, Typography, Stack, IconButton, Collapse, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/label';
import Iconify from '../../../components/iconify';
import MenuDetails from './MenuDetails';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

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

// ----------------------------------------------------------------------

HotelCard.propTypes = {
  menu: PropTypes.object,
};

export default function HotelCard({ hotel }) {
  const { name, images, location, contact, priceSale, description } = hotel;

  const [collapse, setCollapse] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Card>
        <Box sx={{ pt: '100%', position: 'relative' }}>
          <Label
            variant="filled"
            color={'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            New
          </Label>
          <StyledProductImg alt={name} src={ image[0] || 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768'} />
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Typography variant="subtitle2" noWrap>
            {location.city}
          </Typography>

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Link
              href={`/menu/${hotel._id}`}
              underline="none"
              color="inherit"
              sx={{
                typography: 'subtitle2',
                fontWeight: 'bold',
                fontSize: '20px',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              <Typography variant="subtitle1">{name}</Typography>
            </Link>
            <IconButton onClick={() => setCollapse(!collapse)}>
              {collapse ? (
                <Iconify icon="bx:bx-chevron-up" width={20} height={20} />
              ) : (
                <Iconify icon="bx:bx-chevron-down" width={20} height={20} />
              )}
            </IconButton>
          </Stack>
        </Stack>
        <Collapse in={collapse} timeout="auto" unmountOnExit>
          <Stack spacing={2} sx={{ p: 3, pt: 0 }}>
            <Typography variant="body2">{location.phone}</Typography>
          </Stack>
        </Collapse>
      </Card>
    </>
  );
}

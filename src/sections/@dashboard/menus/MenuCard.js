import { useState } from 'react';
import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack, IconButton, Collapse,  } from '@mui/material';
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

// ----------------------------------------------------------------------

MenuCard.propTypes = {
  menu: PropTypes.object,
};

export default function MenuCard({ menu }) {
  const { name, images, price, availability, priceSale, description } = menu;

  const [collapse, setCollapse] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card>
        <Box sx={{ pt: '100%', position: 'relative' }}>
          {availability && (
            <Label
              variant="filled"
              color={
                (availability === 'Breakfast' && 'success') ||
                (availability === 'Lunch' && 'warning') ||
                (availability === 'Dinner' && 'error') ||
                'info'
              }
              sx={{
                zIndex: 9,
                top: 16,
                right: 16,
                position: 'absolute',
                textTransform: 'uppercase',
              }}
            >
              {availability}
            </Label>
          )}
          <StyledProductImg alt={name} src={images[0] || 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105946/vegan-burger-grill-kit-for-4.1450ccef8c44f7394c93f58450ce67b9.jpg'} />
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Link
            color="inherit"
            underline="hover"
            component="div"
            onClick={() => setOpen(!open)}
            sx={{
              '&:hover': {
                textDecoration: 'underline',
                color: 'text.primary',
                cursor: 'pointer',
              },
            }}
          >
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Link>

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle1">
              <Typography
                component="span"
                variant="body1"
                sx={{
                  color: 'text.disabled',
                  textDecoration: 'line-through',
                }}
              >
                {priceSale && fCurrency(priceSale)}
              </Typography>
              &nbsp;
              {fCurrency(price)} Birr
            </Typography>
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
            <Typography variant="body2">{description}</Typography>
          </Stack>
        </Collapse>
      </Card>
      <MenuDetails open={open} setOpen={setOpen} menu={menu} />
    </>
  );
}

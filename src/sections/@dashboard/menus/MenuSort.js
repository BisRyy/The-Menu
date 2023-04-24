import { useState } from 'react';
// @mui
import { Menu, Button, MenuItem, Typography } from '@mui/material';
// component
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const SORT_BY_OPTIONS = [
  { value: 'nameAsc', label: 'Name: A-Z', sortBy: 'name', sortOrder: 'asc' },
  { value: 'nameDesc', label: 'Name: Z-A', sortBy: 'name', sortOrder: 'desc' },
  { value: 'priceDesc', label: 'Price: High-Low', sortBy: 'price', sortOrder: 'desc' },
  { value: 'priceAsc', label: 'Price: Low-High', sortBy: 'price', sortOrder: 'asc' },
  { value: 'rating', label: 'Rating',  sortBy: 'rating', sortOrder: 'desc' },
];

export default function ShopProductSort({ by, order, setBy, setOrder }) {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Button
        color="inherit"
        disableRipple
        onClick={handleOpen}
        endIcon={<Iconify icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} />}
      >
        Sort By:&nbsp;
        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {SORT_BY_OPTIONS.find((option) => option.sortBy === by && option.sortOrder === order).label}
        </Typography>
      </Button>
      <Menu
        keepMounted
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {SORT_BY_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === 'nameAsc'}
            onClick={
              () => {
                setBy(option.sortBy);
                setOrder(option.sortOrder);
                handleClose();
              }
            }
            sx={{ typography: 'body2' }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
// @mui
import { useDispatch, useSelector } from 'react-redux';
import { Container, Stack, Typography } from '@mui/material';
// components
import { MenuSort, MenuList, MenuFilterSidebar } from '../sections/@dashboard/menus';
// mock
import PRODUCTS from '../data/menuItem';
import { get } from '../redux/menuSlice';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const MENULIST = useSelector((state) => state.menu.list);
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState('price');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    const hotelId = JSON.parse(localStorage.getItem('user'))._id;
    axios
      .get(`http://localhost:3001/api/menus/hotel/${hotelId}?sortBy=${sortBy}&sortOrder=${sortOrder}`)
      .then((res) => {
        console.log('res', res.data);
        dispatch(get(res.data));
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MENULIST]);

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Menu View | MenuHub </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Menu View
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <MenuFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <MenuSort by={sortBy} order={sortOrder} setBy={setSortBy} setOrder={setSortOrder} />
          </Stack>
        </Stack>

        <MenuList menus={MENULIST} />
      </Container>
    </>
  );
}

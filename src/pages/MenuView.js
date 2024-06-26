import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
import { MenuFilterSidebar, MenuList, MenuSort } from '../sections/@dashboard/menus';
// mock

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [originalMenuList, setOriginalMenuList] = useState([]); // State to hold the original unfiltered list
  const [menuList, setMenuList] = useState([]); // State for displaying the menu
  const [sortBy, setSortBy] = useState('price');
  const [sortOrder, setSortOrder] = useState('desc');
  const [openFilter, setOpenFilter] = useState(false);
  const [filter, setFilter] = useState({
    availability: [],
    vegetarian: null,
    type: [],
    price: null,
  });

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('user'))._id;
    axios.get(`/api/menus/hotel/${id}?sortBy=${sortBy}&sortOrder=${sortOrder}`).then((res) => {
      setOriginalMenuList(res.data); // Set the original data
      setMenuList(res.data); // Set the filtered data
    });
  }, [sortBy, sortOrder]);

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
              filter={filter}
              setFilter={setFilter}
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <MenuSort by={sortBy} order={sortOrder} setBy={setSortBy} setOrder={setSortOrder} />
          </Stack>
        </Stack>

        <MenuList menus={menuList} />
      </Container>
    </>
  );
}

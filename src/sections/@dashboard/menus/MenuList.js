import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import MenuCard from  './MenuCard'

// ----------------------------------------------------------------------

MenuList.propTypes = {
  menus: PropTypes.array.isRequired,
};

export default function MenuList({ menus, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {menus.map((menu) => (
        <Grid key={menu.id} item xs={6} sm={4} md={3}>
          <MenuCard menu={menu} />
        </Grid>
      ))}
    </Grid>
  );
}

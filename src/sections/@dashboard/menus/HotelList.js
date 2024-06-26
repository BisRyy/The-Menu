import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import HotelCard from './HotelCard';

// ----------------------------------------------------------------------

HotelList.propTypes = {
  hotels: PropTypes.array.isRequired,
};

export default function HotelList({ hotels, ...other }) {
  return (
    <Grid container spacing={4} {...other}>
      {hotels.map((hotel) => (
        <Grid key={hotel._id} item xs={6} sm={4} md={3}>
          <HotelCard hotel={hotel} />
        </Grid>
      ))}
    </Grid>
  );
}

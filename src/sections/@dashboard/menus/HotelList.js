import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import HotelCard from  './HotelCard'

// ----------------------------------------------------------------------

HotelList.propTypes = {
  hotels: PropTypes.array.isRequired,
};

export default function HotelList({ hotels, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {hotels.map((hotel) => (
        <Grid key={hotel._id} item xs={12} sm={6} md={3}>
          <HotelCard hotel={hotel} />
        </Grid>
      ))}
    </Grid>
  );
}

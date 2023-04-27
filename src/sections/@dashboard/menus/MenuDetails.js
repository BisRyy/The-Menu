import PropTypes from 'prop-types';
import { Box, Dialog, DialogContent, Typography } from '@mui/material';
import Label from '../../../components/label';

MenuDetails.propTypes = {
  menu: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default function MenuDetails({ menu, open, setOpen }) {
  return (
    <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="md">
      <DialogContent>
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <img src={menu.images[0] || 'https://img.freepik.com/premium-vector/food-tray-icon-isolated-white-background-vector-illustration_736051-483.jpg'} alt={menu.name} width={700} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            <Typography variant="h4" component="div">
              {menu.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" maxWidth={500}>
              {menu.description}
            </Typography>
            <Typography variant="h6" component="div">
              Price: {menu.price} Birr
            </Typography>
            <Typography variant="h6" component="div">
              Ingredients
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {menu.ingredients.map((ingredient, index) => (
                <Typography variant="body2" color="text.secondary" key={index}>
                  <Label variant="filled" color="info">
                    {ingredient}
                  </Label>
                  <br />
                </Typography>
              ))}
            </Box>
            <Typography variant="h6" component="div">
              Nutritional Information
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {menu.nutritionalInformation.map((info, index) => (
                <Typography variant="body2" color="text.secondary" key={index}>
                  <Label variant="outlined" color="info">
                    {info}
                  </Label>
                </Typography>
              ))}
            </Box>
            <Typography variant="h6" component="div">
              Allergen Information
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {menu.allergenInformation}
            </Typography>
            <Typography variant="h6" component="div">
              {menu.vegetarian}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

import styled from '@emotion/styled';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  Rating,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Iconify from '../iconify/Iconify';

export default function MenuCard({ menu }) {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={`assets/images/avatars/avatar_1.jpg`} title="green iguana" />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              {menu.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {menu.type}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {menu.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ px: 2 }}>
            {menu.price} Birr
          </Typography>
          <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <Iconify icon="mdi:chevron-down" />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h6" component="div">
              Ingredients
            </Typography>
            <Box sx={{ display: 'flex', columnGap: 1, flexWrap: 'wrap' }}>
              {menu.ingredients.map((ingredient, index) => (
                <Typography variant="body2" color="text.secondary" key={index}>
                  {ingredient}
                  <br />
                </Typography>
              ))}
            </Box>
            <Typography variant="h6" component="div" >
              Nutritional Information
            </Typography>
            <Box sx={{ display: 'flex', columnGap: 2, flexWrap: 'wrap' }}>
              {menu.nutritionalInformation.map((info, index) => (
                <Typography variant="body2" color="text.secondary" key={index}>
                  {info}g
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
          </CardContent>
        </Collapse>
      </Card>
    );
}
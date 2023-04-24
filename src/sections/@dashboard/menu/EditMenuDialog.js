import { useSelector } from 'react-redux';
import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  Select,
  TextField,
  Typography,
  createFilterOptions,
} from '@mui/material';
import { useEffect, useState } from 'react';
import Input from '@mui/material/Input';
import Iconify from '../../../components/iconify';

export default function EditMenuDialog({ open, onClose, onEdit, data }) {

  console.log("data", data);

  const [name, setName] = useState('Vegan Burger');
  const [availability, setAvailability] = useState('Available all day');
  const [price, setPrice] = useState(9.99);
  const [description, setDescription] = useState('Sweet and Delicious');
  const [ingredients, setIngredients] = useState(['Banana', 'Peanut']);
  const [allergenInformation, setAllergenInformation] = useState('contains nuts');
  const [nutritionalInformation, setNutritionalInformation] = useState([
    'Calories: 300',
    'Fat: 10g',
    'Carbs: 40g',
    'Protein: 10g',
    'Sodium: 100mg',
    'Calcium: 100mg',
    'Iron: 1mg',
  ]);
  const [nutrient, setNutrient] = useState('');
  const [vegetarian, setVegetarian] = useState('Non-vegetarian');
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [type, setType] = useState('Main Course');

  const [error, setError] = useState('');

  const ingredientsOption = ['Lentil Patty', 'Bun', 'Lettuce'];
  const vegetarianOption = ['Vegetarian', 'Vegan', 'Non-vegetarian'];
  const typeOption = ['Main Course', 'Appetizer', 'Dessert', 'Beverage'];
  const availabilityOption = ['Available all day', 'Breakfast only', 'Lunch and dinner only'];

  const [ingredient, setIngredient] = useState('');

  useEffect(() => {
    if (data) {
      setName(data.name);
      setAvailability(data.availability);
      setPrice(data.price);
      setDescription(data.description);
      setIngredients(data.ingredients);
      setAllergenInformation(data.allergenInformation);
      setNutritionalInformation(data.nutritionalInformation);
      setVegetarian(data.vegetarian);
      setImages(data.images);
      setType(data.type);
    }
  }, [data]);

  const handleEdit = () => {
    if (!name || !availability || !price || !vegetarian || !type) {
      setError('Please fill all fields');
      return;
    }
    // const formData = new FormData();
    // formData.append('name', name);
    // formData.append('availability', availability);
    // formData.append('price', price);
    // formData.append('description', description);
    // formData.append('ingredients', ingredients);
    // formData.append('allergenInformation', allergenInformation);
    // formData.append('nutritionalInformation', nutritionalInformation);
    // formData.append('vegetarian', vegetarian);
    // formData.append('images', images);
    // formData.append('type', type);
    // formData.append('hotelId', JSON.parse(localStorage.getItem('user'))._id);
    // formData.append('files', images);

    // onAdd(formData);
    onEdit({
      name,
      availability,
      price,
      description,
      ingredients,
      allergenInformation,
      nutritionalInformation,
      vegetarian,
      images,
      type,
      hotelId: JSON.parse(localStorage.getItem('user'))._id,
    },  data._id);

    // setName('');
    // setAvailability('Available all day');
    // setPrice();
    // setDescription('');
    // setIngredients([]);
    // setAllergenInformation('');
    // setNutritionalInformation('');
    // setVegetarian('Non-vegetarian');
    // setImages([]);
    // setType('Main Course');

    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDialog-paper': {
          width: 800,
          maxWidth: '100%',
        },
      }}
    >
      <DialogTitle>Update Menu</DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            mb: 3,
            color: 'text.secondary',
          }}
        >
          Please fill all fields
        </DialogContentText>

        {images.length > 0 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              mb: 3,
            }}
          >
            {imagePreview.map((image, index) => (
              <Box
                key={index}
                sx={{
                  width: 180,

                  position: 'relative',
                  borderRadius: 1,
                  overflow: 'hidden',
                  mr: 1,
                  mb: 1,
                }}
              >
                <img
                  alt={image}
                  src={image}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    color: 'error.main',
                    bgcolor: 'background.transparent',
                    '&:hover': {
                      bgcolor: 'error.main',
                      color: 'error.contrastText',
                    },
                  }}
                  onClick={() => {
                    setImages(images.filter((img) => img !== image));
                    setImagePreview(imagePreview.filter((img) => img !== image));
                  }}
                >
                  <Iconify icon="bx:bx-x" width={20} height={20} />
                </IconButton>
              </Box>
            ))}
          </Box>
        )}

        <Grid container spacing={2} paddingTop={1}>
          <Grid item xs={8}>
            <TextField
              required
              id="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              id="price"
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              fullWidth
              type="number"
              error={price !== '' && price < 0}
              InputProps={{
                min: 0,
                max: 1000,
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Autocomplete
              id="availability"
              options={availabilityOption}
              getOptionLabel={(option) => option}
              value={availability}
              defaultValue="Available all day"
              onChange={(event, newValue) => {
                setAvailability(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Availability" placeholder="Availability" fullWidth required />
              )}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Autocomplete
              id="type"
              options={typeOption}
              getOptionLabel={(option) => option}
              value={type}
              defaultValue="Main Course"
              onChange={(event, newValue) => {
                setType(newValue);
              }}
              renderInput={(params) => <TextField {...params} label="Type" placeholder="Type" fullWidth required />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Autocomplete
              id="vegetarian"
              options={vegetarianOption}
              getOptionLabel={(option) => option}
              value={vegetarian}
              defaultValue="Non-vegetarian"
              onChange={(event, newValue) => {
                setVegetarian(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Vegetarian" placeholder="Vegetarian" fullWidth required />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Input
              sx={{ pl: 1.5 }}
              id="ingredients"
              placeholder="Add Ingredient"
              label="Ingredients"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (ingredient && !ingredients.includes(ingredient)) {
                    setIngredients([...ingredients, ingredient]);
                    setIngredient('');
                  }
                }
              }}
              endAdornment={
                <IconButton
                  onClick={() => {
                    if (ingredient && !ingredients.includes(ingredient)) {
                      setIngredients([...ingredients, ingredient]);
                      setIngredient('');
                    }
                  }}
                >
                  <Iconify icon="bx:bx-plus" />
                </IconButton>
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
              {ingredients.map((ingredient, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ mr: 1 }}>
                    {ingredient}
                  </Typography>
                  <Iconify
                    icon="bx:bx-x"
                    color="text.secondary"
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                      const newIngredients = [...ingredients];
                      newIngredients.splice(index, 1);
                      setIngredients(newIngredients);
                    }}
                  />
                </Box>
              ))}
              {ingredients.length > 0 && <Button onClick={() => setIngredients([])}>Clear</Button>}
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Input
              sx={{ pl: 1.5 }}
              id="nutrients"
              placeholder="Add Nutrient. Ex: Protein: 10g"
              label="Nutrients"
              value={nutrient}
              onChange={(e) => setNutrient(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (nutrient && !nutritionalInformation.includes(nutrient)) {
                    setNutritionalInformation([...nutritionalInformation, nutrient]);
                    setNutrient('');
                  }
                }
              }}
              endAdornment={
                <IconButton
                  onClick={() => {
                    if (nutrient && !nutritionalInformation.includes(nutrient)) {
                      setNutritionalInformation([...nutritionalInformation, nutrient]);
                      setNutrient('');
                    }
                  }}
                >
                  <Iconify icon="bx:bx-plus" />
                </IconButton>
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
              {nutritionalInformation.map((nutrient, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ mr: 1 }}>
                    {nutrient}
                  </Typography>
                  <Iconify
                    icon="bx:bx-x"
                    color="text.secondary"
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                      const newNutritions = [...nutritionalInformation];
                      newNutritions.splice(index, 1);
                      setNutritionalInformation(newNutritions);
                    }}
                  />
                </Box>
              ))}
              {nutritionalInformation.length > 0 && (
                <Button onClick={() => setNutritionalInformation([])}>Clear</Button>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="allergenInformation"
              label="Allergen Information"
              value={allergenInformation}
              onChange={(e) => setAllergenInformation(e.target.value)}
              fullWidth
              type="text"
              multiline
              rows={2}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="description"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              type="text"
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ px: 1, justifyContent: 'space-between' }}>
        <div>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              // gap: 2,
            }}
          >
            <Button
              variant="contained"
              component="label"
              color="secondary"
              startIcon={<Iconify icon="bx:bx-image-add" />}
            >
              <Typography variant="body2" sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }}>
                Upload Images
              </Typography>
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setImages([...images, e.target.files[0]]);
                    setImagePreview([...imagePreview, URL.createObjectURL(e.target.files[0])]);
                  }
                }}
              />
            </Button>
          </Box>
        </div>
        <div>
          {error && (
            <Typography color="error" align="left">
              {error}
            </Typography>
          )}
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleEdit} variant="contained" color="primary">
            Update Menu
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
}

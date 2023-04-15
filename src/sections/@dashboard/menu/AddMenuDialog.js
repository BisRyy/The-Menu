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
  InputAdornment,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Input from '@mui/material/Input';
import Iconify from '../../../components/iconify';

export default function AddMenuDialog({ open, onClose, onAdd }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('available');
  const [price, setPrice] = useState(10.99);
  const [dsc, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const [error, setError] = useState('');

  const handleAdd = () => {
    console.table({ name, status, price, dsc, image, category });
    if (!name || !status || !price || !dsc || !image || !category) {
      setError('Please fill all fields');
      return;
    }

    onAdd({ name, status, price, dsc, image, category });
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
      <DialogTitle>Add Menu</DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            mb: 3,
            color: 'text.secondary',
          }}
        >
          Please fill all fields
        </DialogContentText>

        <Grid container spacing={2} paddingTop={1}>
          <Grid item xs={6} md={8}>
            <TextField
              required
              id="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} md={4}>
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
          <Grid item xs={6} md={4}>
            <Select
              native
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              inputProps={{
                name: 'status',
                id: 'status',
              }}
              fullWidth
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </Select>
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField
              required
              id="category"
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              required
              id="image"
              label="Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              label="Description"
              value={dsc}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              type="text"
              multiline
              rows={4}
            />
          </Grid>
        </Grid>

        {error && <Typography color="error">{error}</Typography>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAdd} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

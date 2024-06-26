import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  FormControlLabel,
  FormGroup,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';

const SORT_BY_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'priceDesc', label: 'Price: High-Low' },
  { value: 'priceAsc', label: 'Price: Low-High' },
];

const FILTER_AVABILITY_OPTIONS = ['Available all day', 'Breakfast only', 'Lunch and dinner only'];
const FILTER_VEGETARIAN_OPTIONS = ['All', 'Vegetarian', 'Vegan', 'Non-Vegetarian'];
const FILTER_TYPE_OPTIONS = ['Main Course', 'Appetizer', 'Dessert', 'Beverage'];
const FILTER_PRICE_OPTIONS = [
  { value: 'null', label: 'All' },
  { value: 'below', label: 'Below 250 birr' },
  { value: 'between', label: 'Between 250 - 600 birr' },
  { value: 'above', label: 'Above 600 birr' },
];

export default function ShopFilterSidebar({ openFilter, onOpenFilter, onCloseFilter, filter, setFilter }) {
  console.log('filter', filter);
  const handleTypeChange1 = (event) => {
    const { checked, value } = event.target;
    setFilter((prev) => ({
      ...prev,
      type: checked ? [...prev.type, value] : prev.type.filter((t) => t !== value),
    }));
  };

  const handleTypeChange2 = (event) => {
    const { checked, value } = event.target;
    setFilter((prev) => ({
      ...prev,
      availability: checked ? [...prev.availability, value] : prev.availability.filter((t) => t !== value),
    }));
  };

  const handleRadioChange = (key) => (event) => {
    setFilter({
      ...filter,
      [key]: event.target.value,
    });
  };

  return (
    <>
      <Button disableRipple color="inherit" endIcon={<Iconify icon="ic:round-filter-list" />} onClick={onOpenFilter}>
        Filters&nbsp;
      </Button>

      <Drawer
        anchor="right"
        open={openFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 280, border: 'none', overflow: 'hidden' },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            Filters
          </Typography>
          <IconButton onClick={onCloseFilter}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            <div>
              <Typography variant="subtitle1" gutterBottom>
                Type
              </Typography>
              <FormGroup>
                {FILTER_TYPE_OPTIONS.map((item) => (
                  <FormControlLabel
                    key={item}
                    control={
                      <Checkbox checked={filter.type.includes(item)} onChange={handleTypeChange1} value={item} />
                    }
                    label={item}
                  />
                ))}
              </FormGroup>
            </div>
            <div>
              <Typography variant="subtitle1" gutterBottom>
                Availability
              </Typography>
              <FormGroup>
                {FILTER_AVABILITY_OPTIONS.map((item) => (
                  <FormControlLabel
                    key={item}
                    control={
                      <Checkbox
                        checked={filter.availability.includes(item)}
                        onChange={handleTypeChange2}
                        value={item}
                      />
                    }
                    label={item}
                  />
                ))}
              </FormGroup>
            </div>

            <div>
              <Typography variant="subtitle1" gutterBottom>
                Price
              </Typography>
              <RadioGroup value={filter.price} onChange={handleRadioChange('price')}>
                {FILTER_PRICE_OPTIONS.map((item) => (
                  <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />
                ))}
              </RadioGroup>
            </div>

            <div>
              <Typography variant="subtitle1" gutterBottom>
                Vegetarian
              </Typography>
              <RadioGroup value={filter.vegetarian} onChange={handleRadioChange('vegetarian')}>
                {FILTER_VEGETARIAN_OPTIONS.map((item) => (
                  <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                ))}
              </RadioGroup>
            </div>
          </Stack>
        </Scrollbar>

        <Box sx={{ p: 3 }}>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="inherit"
            onClick={() => setFilter({ availability: [], vegetarian: null, type: [], price: null })}
            variant="outlined"
            startIcon={<Iconify icon="ic:round-clear-all" />}
          >
            Clear All
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

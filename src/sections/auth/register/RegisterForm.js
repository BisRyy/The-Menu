import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Box, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';
import { register } from '../../../redux/authSlice';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleRegister = async () => {
    try {
      setLoading(true);

      const hotelInfo = {
        name: restaurant,
        password,
        location: {
          address: '1234 Street',
          city: 'Addis Ababa',
          state: 'Addis Ababa',
          country: 'Ethiopia',
          postalCode: '1000',
        },
        contact: {
          email,
          phone: '+2519456789',
          socialMedia: {
            facebook: 'https://www.facebook.com/',
            twitter: 'https://www.twitter.com/',
            instagram: 'https://www.instagram.com/',
          },
        },
        star: 5,
      };

      const { data } = await axios.post('http://localhost:3001/api/hotels', hotelInfo);

      dispatch(register(data));
      console.table(data);
    } catch (error) {
      console.log(error);
      // dispatch(register({ firstName, lastName, restaurant, email, password }));
      // console.table({ firstName, lastName, restaurant, email, password });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Stack spacing={3}>
        {/* <div style={{ display: 'flex', gap: 4 }}>
          <TextField name="first" label="First Name" onChange={(e) => setFirstName(e.target.value)} />
          <TextField name="last" label="Last Name" onChange={(e) => setLastName(e.target.value)} />
        </div> */}
        <TextField name="restaurant" label="Restaurant Name" onChange={(e) => setRestaurant(e.target.value)} />
        <TextField name="email" label="Email address" onChange={(e) => setEmail(e.target.value)} />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Checkbox
              name="remember"
              label="Agree to terms and conditions"
              checked={termsChecked}
              onClick={() => setTermsChecked(!termsChecked)}
            />
            <Typography onClick={() => setTermsChecked(!termsChecked)}>I agree to &nbsp; </Typography>
            <Link href="/terms"> privacy policy & terms.</Link>
          </Box>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            onClick={handleRegister}
            loading={loading}
            disabled={!termsChecked || !restaurant || !email || !password || loading}
          >
            Register
          </LoadingButton>
        </Box>
      </Stack>

      <Stack direction="row" justifyContent="center" gap={1} sx={{ my: 2 }}>
        Already have an account? {''}
        <Link variant="subtitle2" underline="hover" href="/login">
          {' '}
          Log in
        </Link>
      </Stack>
    </>
  );
}

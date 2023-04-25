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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      setLoading(true);

      const hotelInfo = {
        name,
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
          phone,
          socialMedia: {
            facebook: 'https://www.facebook.com/',
            twitter: 'https://www.twitter.com/',
            instagram: 'https://www.instagram.com/',
          },
        },
        images: [],
        profileImage: 'hotel.jpeg',
        star: 5,
      };

      const { data } = await axios.post('https://menuserver.onrender.com/api/hotels', hotelInfo);

      const user = await axios.get('https://menuserver.onrender.com/api/me', {
        headers: {
          ContentType: 'application/json',
          Authorization: `Bearer ${data}`,
          'x-auth-token': `${data}`,
        },
      });

      dispatch(register({ ...user.data, token: data }));

    } catch (error) {
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField name="name" type='text' label="Restaurant Name" onChange={(e) => setName(e.target.value)} />
        <TextField name="email" type='email' label="Email address" onChange={(e) => setEmail(e.target.value)} />
        <TextField name="phone" type="number" label="Phone Number" onChange={(e) => setPhone(e.target.value)} />

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

        <TextField
          name="confirmPassword"
          label="Confirm Password"
          type={showPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
            disabled={!termsChecked || !name || !phone || !email || !password || loading}
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

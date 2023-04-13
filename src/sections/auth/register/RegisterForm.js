import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Box, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

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

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  const handleRegister = () => {
    console.table({ firstName, lastName, restaurant, email, password });

    setTermsChecked(false);
    setFirstName('');
    setLastName('');
    setRestaurant('');
    setEmail('');
    setPassword('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleClick();
    }, 2000);
  };

  return (
    <>
      <Stack spacing={3}>
        <div style={{ display: 'flex', gap: 4 }}>
          <TextField name="first" label="First Name" onChange={(e) => setFirstName(e.target.value)} />
          <TextField name="last" label="Last Name" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <TextField name="restaurant" label="Restaurant Name" onChange={(e) => setRestaurant(e.target.value)} />
        <TextField name="email" label="Email address" onChange={(e) => setEmail(e.target.value)} />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
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
          {/* <FormControlLabel
            control={<Checkbox />}
            label={
              <>
                <span>I agree to </span>
                <Link href="/" passHref>
                  <Link onClick={(e) => e.preventDefault()}>privacy policy & terms</Link>
                </Link>
              </>
            }
          /> */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              // cursor: 'pointer',
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
            disabled={!termsChecked || !firstName || !lastName || !restaurant || !email || !password}
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

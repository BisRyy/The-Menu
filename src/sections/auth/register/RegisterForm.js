import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <Stack spacing={3}>
        <div style={{ display: 'flex', gap: 4 }}>
          <TextField name="first" label="First Name" />
          <TextField name="last" label="Last Name" />
        </div>
        <TextField name="email" label="Restaurant Name" />
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
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
          <Checkbox
            name="remember"
            label="Agree to terms and conditions"
            checked={termsChecked}
            onClick={() => setTermsChecked(!termsChecked)}
          />
          Agree to terms and conditions
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            onClick={handleClick}
            disabled={!termsChecked}
          >
            Register
          </LoadingButton>
        </Box>
      </Stack>

      <Stack direction="row" alignItems="center" gap={1} sx={{ my: 2 }}>
        Already have an account?
        <Link variant="subtitle2" underline="hover" href="/login">
          {' '}
          Log in
        </Link>
      </Stack>
    </>
  );
}

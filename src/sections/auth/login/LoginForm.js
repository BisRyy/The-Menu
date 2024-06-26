import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// @mui
import { LoadingButton } from '@mui/lab';
import { Checkbox, FormControlLabel, IconButton, InputAdornment, Link, Stack, TextField } from '@mui/material';
// components
import Iconify from '../../../components/iconify';
import account from '../../../data/account';
import { login } from '../../../redux/authSlice';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleLogin = async () => {
    try {
      const info = {
        email,
        password,
        role: 'Hotel',
      };

      setLoading(true);
      const { data } = await axios.post(`/api/auth`, info);

      const user = await axios.get('/api/me', {
        headers: {
          ContentType: 'application/json',
          Authorization: `Bearer ${data}`,
          'x-auth-token': `${data}`,
        },
      });

      account.displayName = user.data.name;
      account.email = user.data.contact.email;
      account.photoURL = user.data.images[0] || '/assets/images/avatars/avatar_default.jpg';

      dispatch(login({ ...user.data, token: data }));

      navigate('/dashboard', { replace: true });
    } catch (error) {
      console.log(error.response.data);
      alert(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />

        <TextField
          name="password"
          label="Password"
          value={password}
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
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        {/* <Checkbox name="remember" label="Remember me" /> */}
        <FormControlLabel control={<Checkbox />} label="Remember Me" onClick={() => setRememberMe(!rememberMe)} />
        <Link variant="subtitle2" underline="hover" href="/forgot">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleLogin}
        loading={loading}
        disabled={!email || !password || loading}
      >
        Login
      </LoadingButton>
    </>
  );
}

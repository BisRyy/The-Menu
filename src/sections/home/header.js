import { Box, Typography } from '@mui/material';
import DarkMode from '../../layouts/dashboard/header/darkMode';
import Logo from '../../components/logo/Logo';

export default function NavBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 99,
        p: 3,
        lineHeight: 0,
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Logo />
        <Typography variant="h4" sx={{ flexGrow: 1, display:{ xs:'none', sm:'none', md:'block'}, color: 'text.primary', }}>
          enuHub
        </Typography>
      </Box>
      <DarkMode />
    </Box>
  );
}

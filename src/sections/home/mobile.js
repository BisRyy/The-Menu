import { Box, Button, Container, Typography } from '@mui/material';

export default function Mobile() {
  return (
    <Box sx={{ backgroundColor: '#E6F0FF', minHeight: '80vh', p: 3 }}>
      <Container>
      <Box
        sx={{
          display: {md:"flex", sm:"none"},
          justifyContent: 'center',
          gap: 5,
          flexDirection: 'column-reverse',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ flex: '1' }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: '18px',
              color: '#687690',
              fontWeight: '500',
              // mt: { md: 6, sm: 0 },
              mb: 4,
            }}
          >
            Welcome to the Digital World
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: '64px',
              transform: 'rotate(-6deg)',
              color: '#000336',
              fontWeight: 'bold',
              margin: 'auto',
              fontFamily: 'Cormorant Upright, serif',
              maxWidth: '900px',
            }}
          >
            Manage your Restaurants Menu from your fingertips.
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '18px', color: '#5A6473', my: 4, maxWidth: '1200px' }}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Typography>
          <Button variant="contained" size="large">
            More About Us
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xl: 'row', xs: 'column' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Typography variant="h3" fontFamily="Cormorant Upright, serif" flex={1}  width={"500px"} >
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              flex: "2",
              gap: 8,
            }}
          >
            <img src="/assets/mobile.png" alt="heroImg" style={{ maxHeight: 500, marginBottom: '2rem' }} />
            <img
              src="/assets/mobile.png"
              alt="heroImg"
              style={{ maxHeight: 500, marginTop: { xs: '6rem', md: '0' } }}
            />
            <img src="/assets/mobile.png" alt="heroImg" style={{ maxHeight: 500, marginBottom: '2rem' }} />
          </Box>
          <Typography variant="h3" fontFamily="Cormorant Upright, serif" flex={1} width={"500px"} >
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </Typography>
        </Box>
      </Box>
      </Container>
    </Box>
  );
}

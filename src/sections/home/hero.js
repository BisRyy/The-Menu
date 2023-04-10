import styled from '@emotion/styled';
import { Box, Button, Container, Typography } from '@mui/material';

export default function Hero() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    color: '#000336',
    fontWeight: 'bold',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
  }));

  return (
    <>
      <Box sx={{ backgroundColor: '#E6F0FF', minHeight: '80vh' }}>
        <Container>
          <CustomBox>
            <Box sx={{ flex: '1' }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '18px',
                  color: '#687690',
                  fontWeight: '500',
                  mt: 10,
                  mb: 4,
                }}
              >
                Welcome to the Digital World
              </Typography>
              <Title variant="h1">Manage your Retaurants Menu from your fingertips.</Title>
              <Typography variant="body2" sx={{ fontSize: '18px', color: '#5A6473', my: 4 }}>
                Be the first to get the best digital menu deals before they hit the mass market! Hot foreclosure deals
                with one simple search!
              </Typography>
              <Button variant="contained">More About Us</Button>
            </Box>

            <Box sx={{ flex: '1.25' }}>
              <img
                src="/assets/images/covers/cover_4.jpg"
                alt="heroImg"
                style={{ maxWidth: '100%', marginBottom: '2rem' }}
              />
            </Box>
          </CustomBox>
        </Container>
      </Box>
    </>
  );
}

import styled from '@emotion/styled';
import { Box, Button, Container, Typography } from '@mui/material';

export default function Hero() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(5),
    // marginTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
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
      <Box sx={{ backgroundColor: '#E6F0FF', minHeight: '80vh', pb: 3, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <Container>
          <CustomBox>
            <Box sx={{ flex: '1' }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '18px',
                  color: '#687690',
                  fontWeight: '500',
                  mt: { md: 6, sm: 0 },
                  mb: 4,
                }}
              >
                Welcome to the Digital World
              </Typography>
              <Title variant="h1" >
                Manage your Restaurants Menu from your fingertips.
              </Title>
              <Typography variant="body2" sx={{ fontSize: '18px', color: '#5A6473', my: 4 }}>
                Be the first to get the best digital menu deals before they hit the mass market! Hot foreclosure deals
                with one simple search!
              </Typography>
              <Button variant="contained" size="large">
                More About Us
              </Button>
            </Box>

            <Box sx={{ flex: '1.25' }}>
              <img src="/assets/menu1.png" alt="heroImg" style={{ maxWidth: '100%' }} />
            </Box>
          </CustomBox>
        </Container>
      </Box>
    </>
  );
}

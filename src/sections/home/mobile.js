import { Box, Button, Container, Grid, Typography } from '@mui/material';

export default function Mobile() {
  return (
    <Box sx={{ minHeight: '80vh' }}>
      {/* <Container> */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 5,
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: '18px',
              // color: '#687690',
              fontWeight: '500',
              // mt: { md: 6, sm: 0 },
              mb: 4,
              maxWidth: '500px',
            }}
          >
            Ease of use, simplicity, and efficiency are the key features of our Digital Menu System.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center', width:"100%"}}>
            {/* <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', justifyContent:'center', width: '100%' }}> */}
            {/* <Grid item xs={12} md={4} maxHeight={400} sx={{display:'flex', justifyContent:'flex-end'}} > */}
            <img src="/assets/mobile.png" alt="heroImg"  style={{ maxHeight: 300 }} />
            {/* </Grid> */}
            {/* <Grid item xs={12} md={3}>
            </Grid> */}
            {/* <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'flex-start', alignItems:'baseline'}}> */}
            <img src="/assets/food.png" alt="heroImg" style={{ maxHeight: 200 }} />
            {/* </Grid> */}
            {/* </Grid> */}
          </Box>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: '64px',
                transform: 'rotate(-6deg)',
                // color: '#000336',
                fontWeight: 'bold',
                margin: 'auto',
                fontFamily: 'Cormorant Upright, serif',
                maxWidth: { xs: '90%', sm: '90%', md: '80%', lg: '700px' },
                pt: 2,
              }}
            >
              Focus on your business, we will take care of your customers.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '18px',
                color: '#5A6473',
                my: 4,
                maxWidth: { xs: '90%', sm: '90%', md: '80%', lg: '500px' },
              }}
            >
              Waiters can easily take orders from customers and send them to the kitchen.
            </Typography>
            <Button variant="contained" size="large" href="/login">
              Get your Menu Now !
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            width: '100%',
          }}
        >
          <Typography variant="h4" fontFamily="Cormorant Upright, serif" flex={1} maxWidth="500px">
            By just scanning the QR code, your customers can easily choose and order their meal from their mobile
            phones.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              flex: '2',
              gap: 8,
            }}
          >
            <img src="/assets/mobile.png" alt="heroImg" style={{ maxHeight: 400, marginBottom: '2rem' }} />
            <img
              src="/assets/mobile.png"
              alt="heroImg"
              style={{ maxHeight: 400, marginTop: { xs: '6rem', md: '0' } }}
            />
            <img src="/assets/mobile.png" alt="heroImg" style={{ maxHeight: 400, marginBottom: '2rem' }} />
          </Box>
          <Typography variant="h4" fontFamily="Cormorant Upright, serif" flex={1} maxWidth="500px">
            Accept orders and payments from your customers with our Digital Menu System without any hassle.
          </Typography>
        </Box>
      </Box>
      {/* </Container> */}
    </Box>
  );
}

import { Box, Button, Container, Typography } from '@mui/material';

export default function Mobile() {
  return (
    <Box sx={{ minHeight: '80vh'}}>
      {/* <Container> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: 'center',
          gap: 5,
          flexDirection: 'column-reverse',
          alignItems: 'center',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ flex: '1', display:'flex',flexDirection:'column', alignItems:'center' }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: '18px',
              // color: '#687690',
              fontWeight: '500',
              // mt: { md: 6, sm: 0 },
              mb: 4,
            }}
          >
            Ease of use, simplicity, and efficiency are the key features of our Digital Menu System.
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: '64px',
              transform: 'rotate(-6deg)',
              // color: '#000336',
              fontWeight: 'bold',
              margin: 'auto',
              fontFamily: 'Cormorant Upright, serif',
              maxWidth: '900px',
            }}
          >
            Focus on your business, we will take care of your customers.
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '18px', color: '#5A6473', my: 4, maxWidth: '700px' }}>
            Waiters can easily take orders from customers and send them to the kitchen. 
          </Typography>
          <Button variant="contained" size="large">
            More About Us
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Typography variant="h3" fontFamily="Cormorant Upright, serif" flex={1}  width={"500px"} >
            By just scanning the QR code, your customers can easily choose and  order their meal from their mobile phones.
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
          <Typography variant="h3" fontFamily="Cormorant Upright, serif" flex={1} maxWidth={"500px"} >
            Accept orders and payments from your customers with our Digital Menu System without any hassle.
          </Typography>
        </Box>
      </Box>
      {/* </Container> */}
    </Box>
  );
}

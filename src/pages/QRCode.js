import { Box, Container, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------

export default function QRcode() {
  const hotelId = JSON.parse(localStorage.getItem('user'))._id;
  const [qr, setQr] = ['data:image/png;base64,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'];

  useEffect(() => {
    axios
      .get(`/api/hotels/${hotelId}/qr-generator`, {
        headers: {
          'x-auth-token': JSON.parse(localStorage.getItem('user')).token,
        },
      })
      .then((res) => {
        console.log(res);
        setQr(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title> Menu View | MenuHub </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Menu View
        </Typography>
        <Box
          component="img"
          alt="QR Code"
          src={qr}
          sx={{ width: 320, height: 320, mx: 'auto', my: { xs: 5, sm: 10 } }}
        />
      </Container>
    </>
  );
}

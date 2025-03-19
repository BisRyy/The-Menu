import { Button, Container, Input, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import QRCode from 'react-qr-code';

// ----------------------------------------------------------------------

export default function QRcode() {
  const hotelId = JSON.parse(localStorage.getItem('user'))._id;
  const hotelName = JSON.parse(localStorage.getItem('user')).name;
  const hotelUrl = `${window.location.origin}/menu/${hotelId}`;

  return (
    <>
      <Helmet>
        <title> Menu View | MenuHub </title>
      </Helmet>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: '8px',
        }}
      >
        <Typography variant="h4" sx={{ mb: 5 }}>
          Menu View
        </Typography>
        <QRCode
          id="qr-code"
          value={hotelUrl}
          size={256}
          level="H"
          className="h-auto max-w-full"
          sx={{ width: 320, height: 320, mx: 'auto', my: { xs: 5, sm: 10 } }}
        />

        <Button
          type="button"
          value="Download QR"
          onClick={() => {
            const svg = document.getElementById('qr-code');
            const svgData = new XMLSerializer().serializeToString(svg);
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.onload = () => {
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img, 0, 0);
              const pngFile = canvas.toDataURL('image/png');
              const downloadLink = document.createElement('a');
              downloadLink.download = hotelName;
              downloadLink.href = `${pngFile}`;
              downloadLink.click();
            };
            img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
          }}
        >
          Download QR
        </Button>
      </Container>
    </>
  );
}

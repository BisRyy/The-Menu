import { Link, styled, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import Iconify from '../../components/iconify/Iconify';

// import fbIcon from '../media/fbicon.png';
// import twitterIcon from '../media/twittericon.png';
// import linkedinIcon from '../media/linkedinicon.png';

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    gap: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  }));

  const FooterLink = styled('span')(({ theme }) => ({
    fontSize: '16px',
    // color: '#7A7A7E',
    fontWeight: '300',
    cursor: 'pointer',
    '&:hover': {
      color: '#000',
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                // color: '#1C1C1D',
                fontWeight: '700',
                mb: 2,
              }}
            >
              Services
            </Typography>

            <FooterLink>Hotels</FooterLink>
            <br />
            <FooterLink>Menus</FooterLink>
            <br />
            <FooterLink>Restaurants</FooterLink>
            <br />
            <FooterLink>Blog</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                // color: '#1C1C1D',
                fontWeight: '700',
                mb: 2,
              }}
            >
              Important Links
            </Typography>

            <FooterLink>Log in</FooterLink>
            <br />
            <FooterLink>Register</FooterLink>
            <br />
            <FooterLink>Pricing</FooterLink>
            <br />
            <FooterLink>About Us</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                // color: '#1C1C1D',
                fontWeight: '700',
                mb: 2,
              }}
            >
              Company
            </Typography>

            <FooterLink>Partnerships</FooterLink>
            <br />
            <FooterLink>Terms of use</FooterLink>
            <br />
            <FooterLink>Privacy</FooterLink>
            <br />
            <FooterLink>Sitemap</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                // color: '#1C1C1D',
                fontWeight: '700',
                mb: 2,
              }}
            >
              Get in touch
            </Typography>

            <Typography
              sx={{
                fontSize: '16px',
                // color: '#7A7A7E',
                fontWeight: '500',
                mb: 2,
              }}
            >
              Your Digital Menu is waiting just a click away.
            </Typography>

            <IconBox>
              <Iconify icon={'mdi:github'} />
              <Iconify icon={'mdi:telegram'} />
              <Iconify icon={'mdi:facebook'} />
              <Iconify icon={'mdi:twitter'} />
              <Iconify icon={'mdi:linkedin'} />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
      <Typography sx={{ textAlign: 'center', mt: 5 }}>
        {/* Made with ❤️ by{' '}
        <FooterLink>
          <Link href="https://bisrat.tech" target="_blank" rel="noopener">
            Bisrat Kebere
          </Link>
        </FooterLink>{' '}
        and{' '}
        <FooterLink>
          <Link href="https://github.com/duressa-feyissa" target="_blank" rel="noopener">
            Duressa Feyissa
          </Link>
        </FooterLink> */}
        <br />© 2025 All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

"use client";

import React from 'react';
import { Box, Grid, Typography, Link, Divider, Container } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube, LinkedIn } from '@mui/icons-material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Footer: React.FC = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#6a6a6a", py: 3, mt: 3 }}>
        <Container maxWidth="xl">
          <Box sx={{ py: 3, px: 3, textAlign: 'left', color: "#fff", fontSize: { sm: "1.3rem", xs: "14px" }, fontWeight: "600" }}>
            NEAR BY SERVICES
          </Box>
          <Divider sx={{ backgroundColor: "#fff", width: "6%", px: 3, ml: 3 }} />
          <Box sx={{ display: "flex", alignItems: "center", py: 3, px: 3, textAlign: 'left', color: "#fff", fontSize: { sm: "16px", xs: "14px" }, fontWeight: "600" }}>
            <ArrowForwardIosIcon sx={{ color: "#fff", fontSize: { sm: "16px", xs: "14px" }, }} /> <span>balcony-net-dealers</span>
          </Box>
          <Divider sx={{ backgroundColor: "#fff", width: "20%", ml: 3 }} />
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: '#444444',
          color: 'white',
          py: 3,
          px: 3,
          textAlign: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Grid container spacing={3} sx={{ alignItems: 'center' }}>
          <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
            <Typography variant="body2" sx={{ fontSize: { sm: "16px", xs: "14px" }, color: "#fff" }}>
              Copyright ©2024 Toskie.com
            </Typography>
          </Grid>

          {/* Center section - Links */}
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
              <Link sx={{ textDecoration: "none" }}>
                <Typography variant="body2" sx={{ fontSize: { sm: "16px", xs: "14px" }, color: "#fff" }}>Blogs</Typography>
              </Link>
              <Typography variant="body2" sx={{ fontSize: { sm: "16px", xs: "14px" }, color: "#fff", display: { xs: 'none', sm: 'inline' } }}>|</Typography>
              <Link sx={{ textDecoration: "none" }}>
                <Typography variant="body2" sx={{ fontSize: { sm: "16px", xs: "14px" }, color: "#fff" }}>Privacy Policy</Typography>
              </Link>
              <Typography variant="body2" sx={{ fontSize: { sm: "16px", xs: "14px" }, color: "#fff", display: { xs: 'none', sm: 'inline' } }}>|</Typography>
              <Link sx={{ textDecoration: "none" }}>
                <Typography variant="body2" sx={{ fontSize: { sm: "16px", xs: "14px" }, color: "#fff" }}>Terms and Conditions</Typography>
              </Link>
              <Typography variant="body2" sx={{ fontSize: { sm: "16px", xs: "14px" }, color: "#fff", display: { xs: 'none', sm: 'inline' } }}>|</Typography>
              <Link sx={{ textDecoration: "none" }}>
                <Typography variant="body2" sx={{ fontSize: { sm: "16px", xs: "14px" }, color: "#fff" }}>About Us</Typography>
              </Link>
              <Typography variant="body2" sx={{ fontSize: { sm: "16px", xs: "14px" }, color: "#fff", display: { xs: 'none', sm: 'inline' } }}>|</Typography>
              <Link sx={{ textDecoration: "none" }}>
                <Typography variant="body2" sx={{ fontSize: { sm: "16px", xs: "14px" }, color: "#fff" }}>Contact</Typography>
              </Link>
              <Typography variant="body2" sx={{ fontSize: { sm: "16px", xs: "14px" }, color: "#fff", display: { xs: 'none', sm: 'inline' } }}>|</Typography>
              <Link sx={{ textDecoration: "none" }} >
                <Typography variant="body2" sx={{ fontSize: { sm: "16px", xs: "14px" }, color: "#fff" }}>FAQs</Typography>
              </Link>
            </Box>
          </Grid>

          {/* Right section - Social Media Icons */}
          <Grid item xs={12} sm={3} sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', sm: 'flex-end' }, alignItems: 'center' }}>
            <Facebook sx={{ fontSize: "20px" }} />
            <Twitter sx={{ fontSize: "20px" }} />
            <Instagram sx={{ fontSize: "20px" }} />
            <YouTube sx={{ fontSize: "20px" }} />
            <LinkedIn sx={{ fontSize: "20px" }} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;

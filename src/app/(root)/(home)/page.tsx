"use client";

import { Box, Container, Grid, Typography, TextField, Button, InputAdornment, IconButton, Slider } from '@mui/material';
import { Search as SearchIcon, LocationOn as LocationIcon, Clear as ClearIcon } from '@mui/icons-material';
import { useState } from 'react';
import DownloadApp from '@/app/components/DownloadApp';
import CategorySlider from '@/app/components/categorySlider';
import CloseIcon from "@mui/icons-material/Close";
import Head from 'next/head';

const Page = () => {
  const [searchValue, setSearchValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [rangeValue, setRangeValue] = useState(15);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocationValue(event.target.value);
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setRangeValue(newValue as number);
  };

  return (
    <>
      <Head>
        {/* Primary Title and Description */}
        <title>Toskie - Find Local Professionals Near You</title>
        <meta
          name="description"
          content="Toskie connects you with local professionals like plumbers, electricians, doctors, makeup artists, and more. Find the right expert near you based on ratings and reviews."
        />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="Toskie, local professionals, find professionals, plumbers, electricians, doctors, makeup artists, web designers, home cleaners, service providers"
        />

        {/* Author Info */}
        <meta name="author" content="Toskie Team" />

        {/* Open Graph Tags (Social Sharing) */}
        <meta property="og:title" content="Toskie - Find Local Professionals Near You" />
        <meta
          property="og:description"
          content="Discover local professionals like plumbers, electricians, teachers, makeup artists, web designers, and more on Toskie. Get ratings and reviews to make informed decisions."
        />
        <meta property="og:url" content="https://toskie.com/" />
        <meta
          property="og:image"
          content="https://www.toskie.com/assets/images/home-toskie.png" // Use the URL of your homepage image or logo
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Toskie - Find Local Professionals Near You" />
        <meta
          name="twitter:description"
          content="Find trusted local professionals for your needs - from plumbers to doctors, all with reviews and ratings on Toskie."
        />
        <meta name="twitter:image" content="https://toskie.com/path/to/your/og-image.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://toskie.com/" />
        <main>
          <h1>Welcome to Toskie</h1>
          <p>Find local professionals near you with ease and confidence.</p>
        </main>
      </Head>
     
      <Box sx={{ minHeight: "100vh", backgroundColor: "#f1efef", }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', pt: 4 }}>
            <Typography sx={{ fontSize: { xs: '1.5rem', sm: "2.2rem" }, my: 2 }} color="inherit" >
              Connects people and professionals from your neighbourhood
            </Typography>
          </Box>

          {/* Search Section */}
          <Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "center", my: 2 }}>
            {/* Search Box */}
            <Grid item xs={12} sm={5}>
              <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1f1f1', borderRadius: '4px' }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search profession"
                  value={searchValue}
                  onChange={handleSearchChange}
                   InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <CloseIcon />
                  </InputAdornment>
                ),
              }}

                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '6px',
                      height: '50px',
                      backgroundColor: 'white',
                    },
                  }}
                />
                {searchValue && (
                  <IconButton onClick={() => setSearchValue('')}>
                    <ClearIcon />
                  </IconButton>
                )}
              </Box>
            </Grid>

            {/* Location Box */}
            <Grid item xs={12} sm={5}>
              <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1f1f1', borderRadius: '4px' }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your location"
                  value={locationValue}
                  onChange={handleLocationChange}
                  InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationIcon />
                  </InputAdornment>
                ),
              }}

                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '6px',
                      height: '50px',
                      backgroundColor: 'white',
                    },
                  }}
                />
                {locationValue && (
                  <IconButton onClick={() => setLocationValue('')}>
                    <ClearIcon />
                  </IconButton>
                )}
              </Box>
            </Grid>

            {/* Search Button */}
            <Grid item xs={12} sm={2}>
              <Button fullWidth variant="contained" sx={{ backgroundColor: '#38b6ff', color: '#fff', height: '50px', borderRadius: '6px' }}>
                Search
              </Button>
            </Grid>
          </Grid>

          {/* Range Slider */}
          <Box sx={{ textAlign: 'center', my: 4, }}>
            <Grid container >
              <Grid item xs={12} sm={11}>
                <Slider
                  value={rangeValue}
                  onChange={handleSliderChange}
                  min={0}
                  max={25}
                  sx={{ width: '90%', height: '6px' }}
                />
              </Grid>
              <Grid item xs={12} sm={1}>
                <Typography >{rangeValue} Kms</Typography>
              </Grid>
            </Grid>
          </Box>

        </Container>
        <Box sx={{ py: 4, backgroundColor: "#fff", }}>
          <CategorySlider />
        </Box>
        <DownloadApp />
        
      </Box>
    </>
  );
};

export default Page;


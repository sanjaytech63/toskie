"use client";

import { Box, Container, Grid, Typography, TextField, Button, InputAdornment, IconButton, Slider } from '@mui/material';
import { Search as SearchIcon, LocationOn as LocationIcon, Clear as ClearIcon } from '@mui/icons-material';
import { useState } from 'react';
import DownloadApp from '@/app/components/DownloadApp';


const page = () => {
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
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search profession"
                  value={searchValue}
                  onChange={handleSearchChange}
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
                <InputAdornment position="start">
                  <IconButton>
                    <LocationIcon />
                  </IconButton>
                </InputAdornment>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your location"
                  value={locationValue}
                  onChange={handleLocationChange}
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
        </Box>
        <DownloadApp />
        
      </Box>
    </>
  );
};

export default page;


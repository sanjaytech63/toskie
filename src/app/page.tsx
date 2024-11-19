"use client"
import React, { useRef } from "react";
import { Box, AppBar, Toolbar, Typography, IconButton, Button, TextField, InputAdornment, Slider, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from "next/image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const Home: React.FC = () => {
  const [sliderValue, setSliderValue] = React.useState<number>(20);

  const handleSliderChange = (_event: Event, value: number | number[]) => {
    setSliderValue(value as number);
  };

  return (
    <Box>
      {/* Header Section */}
      <AppBar position="static" sx={{ background: "#fff", boxShadow: "none", borderBottom: "1px solid #ccc",height:"43px",justifyContent:"center" }}>
        <Toolbar sx={{ justifyContent: "space-between", padding: "10px 20px" }}>
          <Box display="flex" alignItems="center">
            {/* Social Media Icons */}
            <IconButton>
              <TwitterIcon sx={{color:"#1DA1F2"}}/>
            </IconButton>
             {/* <Box sx={{
  "width": "1px",
  "height": "42px",
  "backgroundColor": "#ece9e9",
  "margin": "0 10px"
}}/> */}
            <IconButton>
             <InstagramIcon sx={{color:"#c13584"}}/>
            </IconButton>
            <IconButton>
            <FacebookIcon  sx={{color:"#4267B2"}}/> 
            </IconButton>
            <IconButton >
             <YouTubeIcon  sx={{color:"#FF0000"}}/> 
            </IconButton>
          </Box>
          
          <Box display="flex" alignItems="center">
            <Typography variant="body1" color="textSecondary" sx={{ marginRight: "1rem" }}>
              📞 080 6917 9999
            </Typography>
            <Typography variant="body1" color="textSecondary">
              ✉️ contact@toskie.com
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Navigation */}
      <Box sx={{ background: "#f9f9f9", padding: "0.5rem 2rem", }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            <a>
              <img
                src="https://www.toskie.com/assets/images/home-toskie.png"
                alt="Toskie Logo"
                width={"98px"}
              />
            </a>
        </Box>
          <Box>
            <Button href="#" color="inherit">
              Home
            </Button>
            <Button href="#" color="inherit">
              About Us
            </Button>
            <Button href="#" color="inherit">
              Contact Us
            </Button>
            <Button href="#" color="inherit">
              Blogs
            </Button>
          </Box>
          <Button variant="contained" sx={{backgroundColor:"#38b6ff"}}>
            Login/Sign up
          </Button>
        </Toolbar>
      
      {/* Main Content */}
      <Box sx={{ textAlign: "center", padding: "2rem" }}>
        <Typography variant="h4" gutterBottom sx={{fontWeight:"500"}}>
          Connects people and professionals from your neighbourhood
        </Typography>

        {/* Search Section */}
        <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: "2rem" }}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search"
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
              
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Current Location"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button fullWidth variant="contained"  sx={{padding:"16px 16px",backgroundColor:"#38b6ff"}}>
              Search
            </Button>
          </Grid>
        </Grid>

        {/* Slider Section */}
        <Box sx={{ width: "50%", margin: "0 auto",display:"flex" }}>
          <Slider
            value={sliderValue}
            onChange={handleSliderChange}
            valueLabelDisplay="off"
            min={0}
            max={50}
            sx={{ color: "#1976d2" }}
          />
          <Typography sx={{fontSize:"20px"}}>{sliderValue} Kms</Typography>
        </Box>
      </Box>
      </Box>
      <CategorySlider/>
    </Box>
  );
};

export default Home;

const categories = [
  {
    id: 1,
    name: "Electricians",
    imgUrl: "/path-to-image/electrician.jpg",
    users: 30,
    trusted: true,
  },
  {
    id: 2,
    name: "Plumbers",
    imgUrl: "/path-to-image/plumber.jpg",
    users: 25,
    trusted: true,
  },
  {
    id: 3,
    name: "Carpenters",
    imgUrl: "/path-to-image/carpenter.jpg",
    users: 40,
    trusted: true,
  },
  {
    id: 4,
    name: "Painters",
    imgUrl: "/path-to-image/painter.jpg",
    users: 20,
    trusted: true,
  },
  {
    id: 5,
    name: "Barbers",
    imgUrl: "/path-to-image/painter.jpg",
    users: 20,
    trusted: true,
  },
  // Add more categories as needed
];

export const CategorySlider = () => {
  const sliderRef = useRef(null);

  // Function to handle scroll
  const scrollSlider = (direction:any) => {
    const slider = sliderRef.current;
    if (slider) {
      const scrollAmount = direction === "left" ? -300 : 300; // Adjust scroll amount as needed
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ padding: "20px", background: "#f9f9f9", position: "relative" }}>
      {/* Navigation Arrows */}
      <IconButton
        onClick={() => scrollSlider("left")}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 1,
          background: "#fff",
          boxShadow: 2,
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={() => scrollSlider("right")}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 1,
          background: "#fff",
          boxShadow: 2,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Slider Container */}
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollBehavior: "smooth",
          paddingBottom: "10px",
          "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
        }}
      >
        {categories.map((category) => (
          <Box
            key={category.id}
            sx={{
              minWidth: "250px",
              flex: "0 0 auto",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#fff",
              textAlign: "center",
            }}
          >
            {/* Profile Image */}
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <Image
                src={category.imgUrl}
                alt={category.name}
                width={100}
                height={100}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #ddd",
                }}
              />
            </Box>

            {/* Category Name */}
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              {category.name}
            </Typography>

            {/* Trusted Badge */}
            {category.trusted && (
              <Box
                sx={{
                  display: "inline-block",
                  padding: "5px 10px",
                  borderRadius: "15px",
                  background: "#f8e71c",
                  color: "#000",
                  fontSize: "12px",
                  marginBottom: "8px",
                }}
              >
                Trusted
              </Box>
            )}

            {/* Users Count */}
            <Typography variant="body2" sx={{ color: "#888", mb: 2 }}>
              Known to {category.users} users
            </Typography>

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ textTransform: "none" }}
              >
                View Profile
              </Button>
              <Button
                variant="outlined"
                color="success"
                size="small"
                sx={{ textTransform: "none" }}
              >
                Call Now
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};



"use client";

import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useRouter } from 'next/navigation'
const categories = [
    { id: 1, name: "Agriculture", imgUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_agriculture.png" },
    { id: 2, name: "Artist", imgUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_artist.png" },
    { id: 3, name: "Beauty", imgUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_beauty.png" },
    { id: 4, name: "Business", imgUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_business.png" },
    { id: 5, name: "Teaching", imgUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_teaching.png" },
    { id: 6, name: "Medical", imgUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_medical.png" },
    { id: 7, name: "Home Services", imgUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_homeservice.png" },
    { id: 8, name: "IT Profetional", imgUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_it_professional.png" },
    { id: 9, name: "Food", imgUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_food.png" },
    { id: 10, name: "Internet Service", imgUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_internet.png" },
];

const CategorySlider = () => {
    const router = useRouter()
    return (
        <Box sx={{ padding: "20px" }}>
            <Grid container spacing={3}>
                {categories.map((category) => (
                    <Grid key={category.id} item xs={6} sm={4} md={3} lg={2}>
                        <Box onClick={() => router.push('/profile')}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: "10px",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                textAlign: "center",
                                cursor: "pointer",
                                transition: "transform 0.3s",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                },
                            }}
                        >
                            {/* Image */}
                            <Box
                                sx={{
                                    width: "80px",
                                    height: "80px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    background: "#f9f9f9",
                                    borderRadius: "50%",
                                    marginBottom: "10px",
                                }}
                            >
                                <img
                                    src={category.imgUrl}
                                    alt={category.name}
                                    width={50}
                                    height={50}
                                />
                            </Box>

                            {/* Category Name */}
                            <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                                {category.name}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CategorySlider;




// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import Image from "next/image";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const categories = [
//     {
//         id: 1,
//         name: "Artist",
//         imgUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_artist.png",
//         users: 30,
//         trusted: true,
//     },
//     {
//         id: 2,
//         name: "Plumbers",
//         imgUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//         users: 25,
//         trusted: true,
//     },
//     {
//         id: 3,
//         name: "Carpenters",
//         imgUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//         users: 40,
//         trusted: true,
//     },
//     {
//         id: 4,
//         name: "Barbers",
//         imgUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//         users: 40,
//         trusted: true,
//     },
//     {
//         id: 5,
//         name: "Doctors",
//         imgUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_medical.png",
//         users: 40,
//         trusted: true,
//     },
//     {
//         id: 6,
//         name: "Teachers",
//         imgUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_teaching.png",
//         users: 40,
//         trusted: true,
//     },
//     {
//         id: 7,
//         name: "Engineer",
//         imgUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_engineer.png",
//         users: 40,
//         trusted: true,
//     },
//     {
//         id: 8,
//         name: "IT Profetional",
//         imgUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_it_professional.png",
//         users: 40,
//         trusted: true,
//     },
// ];

// const responsive = {
//      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
//         tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
//         mobile: { breakpoint: { max: 464, min: 0 }, items: 3 },
// };

// const CategorySlider = () => {
//     return (
//         <Box sx={{ padding: "20px", background: "#f9f9f9" }}>
//             <Carousel
//                 responsive={responsive}
//                 infinite
//                 autoPlay={false} // Set to true for autoplay
//                 autoPlaySpeed={3000}
//                 keyBoardControl
//                 customTransition="all .5"
//                 transitionDuration={500}
//                 containerClass="carousel-container"
//                 removeArrowOnDeviceType={["tablet", "mobile"]} // Remove arrows on specific devices
//                 dotListClass="custom-dot-list-style"
//                 itemClass="carousel-item-padding-40-px"
//             >
//                 {categories.map((category) => (
//                     <Box
//                         key={category.id}
//                         sx={{
//                             padding: "10px",
//                             border: "1px solid #ddd",
//                             borderRadius: "8px",
//                             background: "#fff",
//                             textAlign: "center",
//                             mx: 2,
//                         }}
//                     >
//                         {/* Profile Image */}
//                         <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
//                             <img
//                                 src={category.imgUrl}
//                                 alt={category.name}
//                                 width={100}
//                                 height={100}
//                                 style={{
//                                     borderRadius: "50%",
//                                     objectFit: "cover",
//                                     border: "2px solid #ddd",
//                                 }}
//                             />
//                         </Box>

//                         {/* Category Name */}
//                         <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
//                             {category.name}
//                         </Typography>

//                         {/* Trusted Badge */}
//                         {category.trusted && (
//                             <Box
//                                 sx={{
//                                     display: "inline-block",
//                                     padding: "5px 10px",
//                                     borderRadius: "15px",
//                                     background: "#f8e71c",
//                                     color: "#000",
//                                     fontSize: "12px",
//                                     marginBottom: "8px",
//                                 }}
//                             >
//                                 Trusted
//                             </Box>
//                         )}

//                         {/* Users Count */}
//                         <Typography variant="body2" sx={{ color: "#888", mb: 2 }}>
//                             Known to {category.users} users
//                         </Typography>

//                         {/* Buttons */}
//                         <Box
//                             sx={{
//                                 display: "flex",
//                                 justifyContent: "center",
//                                 gap: 1,
//                                 flexWrap: "wrap",
//                             }}
//                         >
//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 size="small"
//                                 sx={{ textTransform: "none" }}
//                             >
//                                 View Profile
//                             </Button>
//                             <Button
//                                 variant="outlined"
//                                 color="success"
//                                 size="small"
//                                 sx={{ textTransform: "none" }}
//                             >
//                                 Call Now
//                             </Button>
//                         </Box>
//                     </Box>
//                 ))}
//             </Carousel>
//         </Box>
//     );
// };

// export default CategorySlider;

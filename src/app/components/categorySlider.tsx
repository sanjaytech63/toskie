

// import React from "react";
import Slider, { Settings } from "react-slick";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


// Define the type for a single category
// interface Category {
//     id: number;
//     name: string;
//     imgUrl: string;
//     users: number;
//     trusted: boolean;
// }

// const categories: Category[] = [
//     { id: 1, name: "Electricians", imgUrl: "/path-to-image/electrician.jpg", users: 30, trusted: true },
//     { id: 2, name: "Plumbers", imgUrl: "/path-to-image/plumber.jpg", users: 25, trusted: false },
//     { id: 3, name: "Carpenters", imgUrl: "/path-to-image/carpenter.jpg", users: 40, trusted: true },
//     { id: 4, name: "Painters", imgUrl: "/path-to-image/painter.jpg", users: 20, trusted: false },
// ];

// const CategorySlider: React.FC = () => {
   
//     const settings: Settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: { slidesToShow: 2 },
//             },
//             {
//                 breakpoint: 600,
//                 settings: { slidesToShow: 1 },
//             },
//         ],
//     };

//     return (
//         <Box sx={{ padding: "20px", background: "#f9f9f9", position: "relative" }}>
//             <Typography variant="h4" mb={3}>
//                 Categories
//             </Typography>
//             <Slider {...settings}>
//                 {categories.map((item) => (
//                     <Box
//                         key={item.id}
//                         sx={{
//                             padding: "10px",
//                             background: "#fff",
//                             borderRadius: "8px",
//                             boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//                         }}
//                     >
//                         <Link href={`/category/${item.id}`} passHref>
//                             <a style={{ textDecoration: "none", color: "inherit" }}>
//                                 <Image
//                                     src={item.imgUrl}
//                                     alt={item.name}
//                                     width={200}
//                                     height={150}
//                                     style={{ borderRadius: "8px", width: "100%", height: "auto" }}
//                                 />
//                                 <Typography variant="h6" mt={1}>
//                                     {item.name}
//                                 </Typography>
//                                 <Typography variant="body2" color="textSecondary">
//                                     {item.users} users
//                                 </Typography>
//                             </a>
//                         </Link>
//                     </Box>
//                 ))}
//             </Slider>
//         </Box>
//     );
// };

// export default CategorySlider;

// import React from "react";
// import Slider from "react-slick";
// import { Box, Typography, Button } from "@mui/material";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const categories = [
//   {
//     id: 1,
//     name: "Electricians",
//     imgUrl: "/path-to-image/electrician.jpg",
//     users: 30,
//     trusted: true,
//   },
//   {
//     id: 2,
//     name: "Plumbers",
//     imgUrl: "/path-to-image/plumber.jpg",
//     users: 25,
//     trusted: false,
//   },
//   {
//     id: 3,
//     name: "Carpenters",
//     imgUrl: "/path-to-image/carpenter.jpg",
//     users: 40,
//     trusted: true,
//   },
//   // Add more categories as needed
// ];

// const CategorySlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768, // For tablets
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480, // For mobile
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Box sx={{ padding: "20px", background: "#f9f9f9" }}>
//       <Slider {...settings}>
//         {categories.map((category) => (
//           <Box
//             key={category.id}
//             sx={{
//               padding: "10px",
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//               background: "#fff",
//               textAlign: "center",
//             }}
//           >
//             {/* Profile Image */}
//             <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
//               <Image
//                 src={category.imgUrl}
//                 alt={category.name}
//                 width={100}
//                 height={100}
//                 style={{
//                   borderRadius: "50%",
//                   objectFit: "cover",
//                   border: "2px solid #ddd",
//                 }}
//               />
//             </Box>

//             {/* Category Name */}
//             <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
//               {category.name}
//             </Typography>

//             {/* Trusted Badge */}
//             {category.trusted && (
//               <Box
//                 sx={{
//                   display: "inline-block",
//                   padding: "5px 10px",
//                   borderRadius: "15px",
//                   background: "#f8e71c",
//                   color: "#000",
//                   fontSize: "12px",
//                   marginBottom: "8px",
//                 }}
//               >
//                 Trusted
//               </Box>
//             )}

//             {/* Users Count */}
//             <Typography variant="body2" sx={{ color: "#888", mb: 2 }}>
//               Known to {category.users} users
//             </Typography>

//             {/* Buttons */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 gap: 1,
//                 flexWrap: "wrap",
//               }}
//             >
//               <Button
//                 variant="contained"
//                 color="primary"
//                 size="small"
//                 sx={{ textTransform: "none" }}
//               >
//                 View Profile
//               </Button>
//               <Button
//                 variant="outlined"
//                 color="success"
//                 size="small"
//                 sx={{ textTransform: "none" }}
//               >
//                 Call Now
//               </Button>
//             </Box>
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default CategorySlider;

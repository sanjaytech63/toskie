// import React, { useRef } from "react";
// import { Box, Typography, Button, IconButton } from "@mui/material";
// import Image from "next/image";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
//   {
//     id: 4,
//     name: "Painters",
//     imgUrl: "/path-to-image/painter.jpg",
//     users: 20,
//     trusted: false,
//   },
//   // Add more categories as needed
// ];

// const CategorySlider = () => {
//   const sliderRef = useRef(null);

//   // Function to handle scroll
//   const scrollSlider = (direction) => {
//     const slider = sliderRef.current;
//     if (slider) {
//       const scrollAmount = direction === "left" ? -300 : 300; // Adjust scroll amount as needed
//       slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <Box sx={{ padding: "20px", background: "#f9f9f9", position: "relative" }}>
//       {/* Navigation Arrows */}
//       <IconButton
//         onClick={() => scrollSlider("left")}
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "10px",
//           transform: "translateY(-50%)",
//           zIndex: 1,
//           background: "#fff",
//           boxShadow: 2,
//         }}
//       >
//         <ArrowBackIosIcon />
//       </IconButton>
//       <IconButton
//         onClick={() => scrollSlider("right")}
//         sx={{
//           position: "absolute",
//           top: "50%",
//           right: "10px",
//           transform: "translateY(-50%)",
//           zIndex: 1,
//           background: "#fff",
//           boxShadow: 2,
//         }}
//       >
//         <ArrowForwardIosIcon />
//       </IconButton>

//       {/* Slider Container */}
//       <Box
//         ref={sliderRef}
//         sx={{
//           display: "flex",
//           gap: 2,
//           overflowX: "auto",
//           scrollBehavior: "smooth",
//           paddingBottom: "10px",
//           "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
//         }}
//       >
//         {categories.map((category) => (
//           <Box
//             key={category.id}
//             sx={{
//               minWidth: "250px",
//               flex: "0 0 auto",
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
//       </Box>
//     </Box>
//   );
// };

// export default CategorySlider;



// // import React from "react";
// // import Slider from "react-slick";
// // import { Box, Typography, Button } from "@mui/material";
// // import Image from "next/image";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // const categories = [
// //   {
// //     id: 1,
// //     name: "Electricians",
// //     imgUrl: "/path-to-image/electrician.jpg",
// //     users: 30,
// //     trusted: true,
// //   },
// //   {
// //     id: 2,
// //     name: "Plumbers",
// //     imgUrl: "/path-to-image/plumber.jpg",
// //     users: 25,
// //     trusted: false,
// //   },
// //   {
// //     id: 3,
// //     name: "Carpenters",
// //     imgUrl: "/path-to-image/carpenter.jpg",
// //     users: 40,
// //     trusted: true,
// //   },
// //   // Add more categories as needed
// // ];

// // const CategorySlider = () => {
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     responsive: [
// //       {
// //         breakpoint: 768, // For tablets
// //         settings: {
// //           slidesToShow: 2,
// //         },
// //       },
// //       {
// //         breakpoint: 480, // For mobile
// //         settings: {
// //           slidesToShow: 1,
// //         },
// //       },
// //     ],
// //   };

// //   return (
// //     <Box sx={{ padding: "20px", background: "#f9f9f9" }}>
// //       <Slider {...settings}>
// //         {categories.map((category) => (
// //           <Box
// //             key={category.id}
// //             sx={{
// //               padding: "10px",
// //               border: "1px solid #ddd",
// //               borderRadius: "8px",
// //               background: "#fff",
// //               textAlign: "center",
// //             }}
// //           >
// //             {/* Profile Image */}
// //             <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
// //               <Image
// //                 src={category.imgUrl}
// //                 alt={category.name}
// //                 width={100}
// //                 height={100}
// //                 style={{
// //                   borderRadius: "50%",
// //                   objectFit: "cover",
// //                   border: "2px solid #ddd",
// //                 }}
// //               />
// //             </Box>

// //             {/* Category Name */}
// //             <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
// //               {category.name}
// //             </Typography>

// //             {/* Trusted Badge */}
// //             {category.trusted && (
// //               <Box
// //                 sx={{
// //                   display: "inline-block",
// //                   padding: "5px 10px",
// //                   borderRadius: "15px",
// //                   background: "#f8e71c",
// //                   color: "#000",
// //                   fontSize: "12px",
// //                   marginBottom: "8px",
// //                 }}
// //               >
// //                 Trusted
// //               </Box>
// //             )}

// //             {/* Users Count */}
// //             <Typography variant="body2" sx={{ color: "#888", mb: 2 }}>
// //               Known to {category.users} users
// //             </Typography>

// //             {/* Buttons */}
// //             <Box
// //               sx={{
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 gap: 1,
// //                 flexWrap: "wrap",
// //               }}
// //             >
// //               <Button
// //                 variant="contained"
// //                 color="primary"
// //                 size="small"
// //                 sx={{ textTransform: "none" }}
// //               >
// //                 View Profile
// //               </Button>
// //               <Button
// //                 variant="outlined"
// //                 color="success"
// //                 size="small"
// //                 sx={{ textTransform: "none" }}
// //               >
// //                 Call Now
// //               </Button>
// //             </Box>
// //           </Box>
// //         ))}
// //       </Slider>
// //     </Box>
// //   );
// // };

// // export default CategorySlider;

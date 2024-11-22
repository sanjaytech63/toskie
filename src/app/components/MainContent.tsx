import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid, Button, Box, useTheme, useMediaQuery } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type MainContentProps = {
    data: {
        id: number;
        name: string;
        profilePic: string;
        description: string;
        verified: boolean,
        sponsor: boolean,
        images: string[];
    }[];
};

const carouselSettings = {
    responsive: {
        superLarge: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    },
    infinite: false,
    autoPlay: true,
    autoPlaySpeed: 3000,
    showDots: false,
    arrows: false,
    // draggable: true,
    swipeable: true,
    slidesToSlide: 1,


};

const MainContent: React.FC<MainContentProps> = ({ data }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [clientXonMouseDown, setClientXonMouseDown] = React.useState<
        number | null
    >(null);
    const [clientYonMouseDown, setClientYonMouseDown] = React.useState<
        number | null
    >(null);
    const handleOnMouseDown = (e: React.MouseEvent) => {
        setClientXonMouseDown(e.clientX);
        setClientYonMouseDown(e.clientY);
        e.preventDefault();
    };

    const handleOnClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (clientXonMouseDown !== e.clientX || clientYonMouseDown !== e.clientY) {
            e.preventDefault();
        }
    };

    return (
        <Grid container spacing={2}>
            {data.map((item) => (
                <Grid item xs={12} sm={6} key={item.id}>
                    <Card sx={{ height: "100%" }}>
                        <Grid container spacing={2} sx={{ p: 2 }}>
                            {/* Profile Section */}
                            <Grid item xs={12} sm={4}>
                                <Grid container spacing={1} direction="column" alignItems="center">
                                    {item && item.sponsor && (
                                        <Typography sx={{
                                            "backgroundPosition": "50% 50%",
                                            "paddingLeft": "20px",
                                            "paddingRight": "20px",
                                            "paddingTop": "5px",
                                            "backgroundRepeat": "no-repeat",
                                            "backgroundSize": "cover",
                                            backgroundImage: `url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMjAwMTA5MDQvL0VOIgogICAgICAgICAgICAgICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+Cgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICB3aWR0aD0iMWluIiBoZWlnaHQ9IjAuNWluIgogICAgIHZpZXdCb3g9IjAgMCAzMDAgMTUwIj4KICA8cGF0aAogICAgICAgIGZpbGw9IiNmZmUwMDAiIHN0cm9rZT0ibm9uZSIKICAgICAgICBkPSJNIDEyLjAwLDQ4LjAwCiAgICAgICAgICAgQyAxMi4wMCw1MC4wOSAxMS43OSw1NC45OSAxMi42MCw1Ni43MgogICAgICAgICAgICAgMTUuNTksNjMuMTggMjYuMDksNTYuNjQgMzMuMDAsNjMuMDAKICAgICAgICAgICAgIDMwLjg0LDYzLjE4IDIzLjA1LDYzLjg3IDIxLjgwLDY1LjAyCiAgICAgICAgICAgICAxOC4wMiw2Ny44OCAyMS4yOSw3Ni4zNSAyMS44MCw4MC4wMAogICAgICAgICAgICAgMjEuODAsODAuMDAgMjEuODAsODYuMDAgMjEuODAsODYuMDAKICAgICAgICAgICAgIDIxLjgwLDg2LjAwIDQwLjAwLDg3LjAwIDQwLjAwLDg3LjAwCiAgICAgICAgICAgICAzOS45Myw4OC44OCA0MC4wNiw5MS4wNCAzOC45OCw5Mi42OQogICAgICAgICAgICAgMzcuNTEsOTQuOTMgMzUuMTUsOTQuNzUgMzIuNTksOTYuMjAKICAgICAgICAgICAgIDI4LjMzLDk4LjYxIDI2Ljg3LDEwMi4yMiAyNy4zNCwxMDcuMDAKICAgICAgICAgICAgIDI3LjM0LDEwNy4wMCAzMC4wMiwxMjMuNDEgMzAuMDIsMTIzLjQxCiAgICAgICAgICAgICAzMS44MiwxMjUuNzUgNDAuMDEsMTI3Ljk1IDQzLjAwLDEyOC4wMAogICAgICAgICAgICAgNDMuMDAsMTI4LjAwIDg3LjAwLDEyOC4wMCA4Ny4wMCwxMjguMDAKICAgICAgICAgICAgIDg4LjA4LDEyMS41NiA5MS4xNiwxMjEuODAgOTcuMDAsMTIyLjA0CiAgICAgICAgICAgICA5Ny4wMCwxMjIuMDQgMTA5LjAwLDEyMy4wMCAxMDkuMDAsMTIzLjAwCiAgICAgICAgICAgICAxMDkuMDAsMTIzLjAwIDEyOC4wMCwxMjMuMDAgMTI4LjAwLDEyMy4wMAogICAgICAgICAgICAgMTI4LjAwLDEyMy4wMCAxODIuMDAsMTIyLjAwIDE4Mi4wMCwxMjIuMDAKICAgICAgICAgICAgIDE5NC41OCwxMjEuOTcgMTg4LjQyLDExOS4wMyAyMDEuMDAsMTE5LjAwCiAgICAgICAgICAgICAyMDEuMDAsMTE5LjAwIDI0My4wMCwxMTkuMDAgMjQzLjAwLDExOS4wMAogICAgICAgICAgICAgMjQzLjAwLDExOS4wMCAyNTguMDAsMTE4LjAwIDI1OC4wMCwxMTguMDAKICAgICAgICAgICAgIDI1OS41MywxMDkuMTAgMjY2LjAxLDExMy4zNyAyNzAuNDAsMTA5LjE1CiAgICAgICAgICAgICAyNzIuNjEsMTA3LjAzIDI3Mi4zMCwxMDAuODUgMjcyLjAwLDk4LjAwCiAgICAgICAgICAgICAyNzIuMDAsOTguMDAgMjgwLjAwLDk3LjAwIDI4MC4wMCw5Ny4wMAogICAgICAgICAgICAgMjgwLjAwLDk0LjEwIDI4MC4yNiw4OC41NSAyNzkuMjYsODYuMDIKICAgICAgICAgICAgIDI3Ni40OSw3OC45OCAyNjQuNjMsNzYuODggMjU4LjAwLDc2LjAwCiAgICAgICAgICAgICAyNjUuMTUsNjkuMTkgMjc2LjQwLDczLjAzIDI3NC44NSw2Mi4wNAogICAgICAgICAgICAgMjc0LjQ3LDU5LjM1IDI3My43Myw1OC44NSAyNzIuMDAsNTcuMDAKICAgICAgICAgICAgIDI4MS42OCw1My43NyAyODEuMDAsNTQuMjggMjgxLjAwLDQ0LjAwCiAgICAgICAgICAgICAyODEuMDAsNDQuMDAgMjU4LjAwLDQyLjM4IDI1OC4wMCw0Mi4zOAogICAgICAgICAgICAgMjUwLjAwLDQwLjg0IDI1MS40OCwzOC4wMyAyMzUuMDAsMzguMDAKICAgICAgICAgICAgIDIzNS4wMCwzOC4wMCAxODkuMDAsMzkuMDAgMTg5LjAwLDM5LjAwCiAgICAgICAgICAgICAxODkuMDAsMzkuMDAgMTc3LjAwLDM5LjgyIDE3Ny4wMCwzOS44MgogICAgICAgICAgICAgMTc3LjAwLDM5LjgyIDE1OS4wMCwzOC4wMCAxNTkuMDAsMzguMDAKICAgICAgICAgICAgIDE1OS4wMCwzOC4wMCAxMjguMDAsMzguMDAgMTI4LjAwLDM4LjAwCiAgICAgICAgICAgICAxMTYuOTAsMzguMDIgMTIwLjE2LDM5LjQwIDExMy4wMCw0MC42NwogICAgICAgICAgICAgMTEzLjAwLDQwLjY3IDk3LjAwLDQyLjE3IDk3LjAwLDQyLjE3CiAgICAgICAgICAgICA5Ny4wMCw0Mi4xNyA4Ny4wMCw0My44MyA4Ny4wMCw0My44MwogICAgICAgICAgICAgODcuMDAsNDMuODMgNTcuMDAsNDUuMDAgNTcuMDAsNDUuMDAKICAgICAgICAgICAgIDU3LjAwLDQ1LjAwIDMyLjAwLDQ4LjAwIDMyLjAwLDQ4LjAwCiAgICAgICAgICAgICAzMi4wMCw0OC4wMCAxMi4wMCw0OC4wMCAxMi4wMCw0OC4wMCBaIiAvPgo8L3N2Zz4K')`
                                        }}>Sponsored</Typography>
                                    )}
                                    <Grid item>
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                width: "70px",
                                                height: "70px",
                                                borderRadius: "50%",
                                                objectFit: "cover",
                                            }}
                                            image={item.profilePic}
                                            alt={item.name}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6" align="center">
                                            {item.name}
                                        </Typography>
                                        {item && item?.verified && (
                                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                <img src="https://www.toskie.com/assets/images/add-service-sucess.png" alt='verified badge' style={{ width: "50px", height: "50px" }} />
                                            </Box>
                                        )}
                                        <Typography variant="body2" align="center">
                                            {item.description}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                background: "linear-gradient(45deg, #ff6b6b, #f06595)",
                                                color: "#fff",
                                                textTransform: "none",
                                                fontWeight: "bold",
                                                borderRadius: "8px",
                                                padding: "6px 30px",
                                                "&:hover": {
                                                    background: "linear-gradient(45deg, #f06595, #ff6b6b)",
                                                },
                                                fontSize: "13px",
                                            }}
                                        >
                                            Share
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* Image Gallery */}
                            <Grid item xs={12} sm={8}>
                                <CardContent sx={{padding: 0}}>
                                    <Carousel {...carouselSettings} showDots={isMobile ? true : false}>
                                        {item.images.map((img, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    marginRight: 2,
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    cursor: "pointer"
                                                }}
                                                onMouseDown={handleOnMouseDown}
                                                onClick={(e) => handleOnClick(e)}
                                                draggable={false}

                                            >
                                                <CardMedia
                                                    component="img"
                                                    sx={{
                                                        height: "120px",
                                                        objectFit: "cover",
                                                        borderRadius: "4px",
                                                    }}
                                                    image={img}
                                                    alt={`Job ${index + 1}`}

                                                />
                                            </Box>
                                        ))}
                                    </Carousel>
                                </CardContent>

                                <Box sx={{
                                    display: "flex", my: 1, gap: 1, ml: 2, "@media (max-width: 1024px)": {
                                        gap: "6px"
                                    },
                                }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            background: "linear-gradient(45deg, blue, #f06595)",
                                            color: "#fff",
                                            textTransform: "none",
                                            fontWeight: "bold",
                                            borderRadius: "8px",
                                            padding: "6px 12px",
                                            "&:hover": {
                                                background: "linear-gradient(45deg, #f06595, #ff6b6b)",
                                            },
                                            fontSize: "13px",
                                        }}
                                    >
                                        Rate Card
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            background: "linear-gradient(45deg, #ff6b6b, purple)",
                                            color: "#fff",
                                            textTransform: "none",
                                            fontWeight: "bold",
                                            borderRadius: "8px",
                                            padding: "6px 12px",
                                            "&:hover": {
                                                background: "linear-gradient(45deg, #f06595, #ff6b6b)",
                                            },
                                            fontSize: "13px",
                                        }}
                                    >
                                        View Profile
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            background: "linear-gradient(45deg, green, #f06595)",
                                            color: "#fff",
                                            textTransform: "none",
                                            fontWeight: "bold",
                                            borderRadius: "8px",
                                            padding: "6px 12px",
                                            "&:hover": {
                                                background: "linear-gradient(45deg, #f06595, #ff6b6b)",
                                            },
                                            fontSize: "13px",
                                        }}
                                    >
                                        Call Now
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default MainContent;

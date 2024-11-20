import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid, Button, Box } from "@mui/material";

type MainContentProps = {
    data: {
        id: number;
        name: string;
        profilePic: string;
        description: string;
        images: string[];
    }[];
};

const MainContent: React.FC<MainContentProps> = ({ data }) => {
    return (
        <Grid container spacing={2} >
            {data.map((item) => (
                <Grid item xs={12} key={item.id}>
                    <Card>
                        <Grid container spacing={2} sx={{ p: 2 }}>
                            {/* Profile Section */}
                            <Grid item xs={12} sm={4} md={3}>
                                <Grid container spacing={1} direction="column" alignItems="center">
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
                                        <Typography variant="h6" align="center">
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
                                            }}
                                        >
                                            Share
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* Image Gallery */}
                            <Grid item xs={12} sm={8} md={9}>
                                <CardContent>
                                    <Grid container spacing={1}>
                                        {item.images.map((img, index) => (
                                            <Grid item xs={6} key={index}>
                                                <CardMedia
                                                    component="img"
                                                    sx={{
                                                        height: "180px",
                                                        objectFit: "cover",
                                                        borderRadius: "4px",
                                                    }}
                                                    image={img}
                                                    alt={`Job ${index + 1}`}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </CardContent>

                                <Box sx={{ display: "flex", my: 1, gap: 2,ml:2 }}>
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

"use client";

import React, { useState } from 'react';
import { Box, Grid, Typography, Button, TextField, Link, InputAdornment, IconButton, Container } from '@mui/material';
import Image from 'next/image'; // For optimized image loading
import appDownloadImg from '../../../public/assets/download.png';
import appStoreImg from '../../../public/assets/app-store.png';
import appGooglePlayImg from '../../../public/assets/play-store.png';
import { Send } from '@mui/icons-material';

const DownloadApp: React.FC = () => {
    const [mobileNumber, setMobileNumber] = useState<string>('');

    const handleSendLink = () => {
        alert(`Link sent to ${mobileNumber}`);
    };

    return (
        <>
            <Box sx={{ backgroundColor: '#fff', }}>
                <Box sx={{ backgroundColor: '#F5F5F5', mb: 3, py: 4, borderBottom: "1px solid #000", borderTop: "1px solid #000" }}>
                    {/* First Section: App Info with Image and Store Links */}
                    <Grid container spacing={3} alignItems="center" justifyContent="center">
                        <Grid item xs={12} sm={6} md={6} className="responsive-image-container">
                            <Image
                                src={appDownloadImg}
                                alt="Download app icon"
                                title="App Download Icon"
                                width={403}
                                height={442}
                                className="responsive-image"
                            />
                        </Grid>

                        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                            <Typography sx={{ color: "#6a6a6a", fontSize: { sm: "2.6rem", xs: "1rem", fontWeight: "600" } }}>
                                Download App Now
                            </Typography>
                            <Typography sx={{ color: "#686868", my: 2 }}>
                                A way to achieve your Professional Requirement
                            </Typography>

                            <Grid container spacing={2} alignItems="center" sx={{ flexDirection: { xs: "column", sm: "row" } }} justifyContent="center" mt="20px">
                                <Grid item xs={6} sm={3}>
                                    <Link
                                        href="https://apps.apple.com/us/app/toskie/id1574937402"
                                        target="_blank"
                                        sx={{ display: 'block', textAlign: 'center' }}
                                    >
                                        <Image
                                            src={appStoreImg}
                                            alt="App Store"
                                            title="App Store"
                                            width={172}
                                            height={50}
                                        />
                                    </Link>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Link
                                        href="https://play.google.com/store/apps/details?id=com.spinoinc.conwok"
                                        target="_blank"
                                        sx={{ display: 'block', textAlign: 'center' }}
                                    >
                                        <Image
                                            src={appGooglePlayImg}
                                            alt="Play Store"
                                            title="Play Store"
                                            width={172}
                                            height={50}
                                        />
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ backgroundColor: '#FFF' }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3} alignItems="center" justifyContent="center">
                            {/* Heading Section */}
                            <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
                                <Typography sx={{ color: "#6a6a6a", fontSize: { sm: "2rem", xs: "1rem", fontWeight: "600" } }}>
                                    Get the link to download the app
                                </Typography>
                            </Grid>

                            {/* Input and Button Section */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Enter Mobile Number"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '6px',
                                            height: '50px',
                                        },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Box sx={{}}>
                                                    <Button
                                                        variant="outlined"
                                                        sx={{ backgroundColor: "#38b6ff", color: "#fff", borderRadius: "6px", border: "none" }}
                                                    >
                                                        Send Link
                                                    </Button>
                                                </Box>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                        </Grid>


                    </Container>
                </Box>

            </Box>
        </>
    );
};

export default DownloadApp;

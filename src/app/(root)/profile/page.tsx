"use client";
import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";

// Import JSON data
import data from "../../../data.json";
import Head from "next/head";

type SidebarMenuItem = {
    icon: string;
    label: string;
    key: string;
};

type MainContentItem = {
    id: number;
    name: string;
    profilePic: string;
    description: string;
    images: string[];
};

type DataType = {
    sidebar: SidebarMenuItem[];
    mainContent: {
        [key: string]: MainContentItem[];
    };
};

const page = () => {
    return (
        <>
            <Head>
                <title>Professional Profiles</title>
                <meta
                    name="description"
                    content="Explore a variety of professional profiles in categories like electricians, plumbers, doctors, home services, IT services, and more on Toskie."
                />
                <meta
                    name="keywords"
                    content="electrician, plumber, doctor, home services, IT services, professionals, Toskie"
                />

                {/* Open Graph Meta Tags for Social Sharing */}
                <meta property="og:title" content="Professional Profiles | Toskie" />
                <meta
                    property="og:description"
                    content="Explore a variety of professional profiles in categories like electricians, plumbers, doctors, home services, IT services, and more on Toskie."
                />
                <meta property="og:image" content="/images/social-image.jpg" />
                <meta property="og:url" content="http://mysite.com/profile" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:title" content="Professional Profiles | Toskie" />
                <meta
                    name="twitter:description"
                    content="Explore a variety of professional profiles in categories like electricians, plumbers, doctors, home services, IT services, and more on Toskie."
                />
                <meta name="twitter:image" content="/images/social-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://toskie.com/profiles" />
            </Head>
        <div style={{ minHeight: "100vh", }}>
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Grid container spacing={2}>
                    {/* Sidebar */}
                    <Grid item xs={12} md={3}>
                        <Sidebar/>
                    </Grid>

                    {/* Main Content */}
                    <Grid item xs={12} md={9}>
                        <Grid item maxWidth={"5.692308% !important"} xs={1}></Grid>
                        <MainContent data={data.mainContent["/Electricians"]} />
                    </Grid>
                </Grid>
            </Container>
        </div>
        </>
    );
};

export default page;

"use client";
import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";

// Import JSON data
import data from "../../../data.json";

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
    const [selectedKey, setSelectedKey] = useState<keyof DataType["mainContent"]>("/Electricians");

    const handleSelect = (key: string) => {
        setSelectedKey(key as keyof DataType["mainContent"]);
    };

    return (
        <div style={{ minHeight: "100vh", }}>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Grid container spacing={2}>
                    {/* Sidebar */}
                    <Grid item xs={12} md={3}>
                        <Sidebar menu={data.sidebar} onSelect={handleSelect} />
                    </Grid>

                    {/* Main Content */}
                    <Grid item xs={12} md={9}>
                        <MainContent data={data.mainContent["/Electricians"]} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default page;

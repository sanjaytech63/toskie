"use client";

import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    Box,
    Container,
    Button,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Link from "next/link";
import Login from "../login";
const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blogs", href: "https://blogs.toskie.com/" },
    { label: "ProfilePage", href: "/profile" },
];

const Navbar: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
     const [open, setOpen] = useState(false);


    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ backgroundColor: "#f1efef" }}>
            <AppBar
                position="sticky"
                color="default"
                sx={{ backgroundColor: "#f1efef", boxShadow: "none" }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* Logo */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                flexGrow: 1,
                            }}
                        >
                            <Box component={"img"}
                                src="https://www.toskie.com/assets/images/home-toskie.png"
                                alt="toskie logo"
                                title="toskie logo"
                                style={{ height: "50px", objectFit: "cover" }}
                            />
                        </Box>

                        {/* Desktop Menu */}
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                flexGrow: 1,
                                justifyContent: "center",
                            }}
                        >
                            {menuItems.map((item,index) => (
                                <Link key={index} href={item.href} passHref target= {item.label ==="Blogs" ? "_blank" :"_self"}>
                                    <Button
                                        sx={{
                                            color: "#333",
                                            textTransform: "none",
                                            padding: "0 20px",
                                            fontSize: {
                                                xs: "14px",
                                                sm: "16px",
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                </Link>
                            ))}
                        </Box>

                        {/* Login Button */}
                        <Box sx={{ display: { xs: "none", md: "block" } }}>
                            
                                <Button onClick={()=>setOpen(true)}
                                    variant="outlined"
                                    sx={{
                                        backgroundColor: "#38b6ff",
                                        color: "#333",
                                        borderRadius: "6px",
                                        border: "none",
                                    }}
                                >
                                    Login / Sign Up
                                </Button>
                            
                        </Box>

                        {/* Mobile Menu */}
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="menu"
                                onClick={handleMenuOpen}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                keepMounted
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    textAlign: "center",
                                }}
                            >
                                {menuItems.map((item,index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={handleMenuClose}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            passHref
                                            style={{
                                                textDecoration: "none",
                                                color: "#333",
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    </MenuItem>
                                ))}
                                <MenuItem
                                    sx={{
                                        backgroundColor: "#38b6ff",
                                        color: "#333",
                                        borderRadius: "6px",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                    onClick={handleMenuClose}
                                >
                                    <Button onClick={()=>setOpen(true)}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        Login / Sign Up
                                    </Button>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Login open={open} onClose={()=>setOpen(false)} />
        </Box>
    );
};

export default Navbar;

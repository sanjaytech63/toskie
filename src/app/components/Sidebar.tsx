import React, { useState } from "react";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
    IconButton,
    Drawer,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckIcon from "@mui/icons-material/Check";

const Sidebar: React.FC = () => {
    const [activeKey, setActiveKey] = useState<string>("");
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

    const menu = [
        { id: 1, label: "Electric Services", key: "electric", imageUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_technicians.png" },
        { id: 2, label: "Plumbing Services", key: "plumbing", imageUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_domesticworks.png" },
        { id: 3, label: "Teaching", key: "Teaching", imageUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_education.png" },
        { id: 4, label: "Artist", key: "artist", imageUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_artist.png" },
        { id: 5, label: "Home Services", key: "home", imageUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_homeservice.png" },
        { id: 6, label: "IT Professional", key: "it", imageUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_it_professional.png" },
        { id: 7, label: "Food", key: "food", imageUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_food.png" },
        { id: 8, label: "Internet Service", key: "internet", imageUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_internet.png" },
        { id: 9, label: "Business", key: "business", imageUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_business.png" },
        { id: 10, label: "Consultant", key: "consultant", imageUrl: "https://www.toskie.com/assets/images/mainCategoryImages/ic_serviceicon_consultant.png" },
    ];

    const handleSelect = (key: string) => {
        setActiveKey(key);
        setDrawerOpen(false); // Close the drawer after selection
    };

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            {/* Three Dots Icon for Small Screens */}
            <IconButton
                onClick={toggleDrawer}
                sx={{
                    display: { xs: "block", md: "none" },
                    position: "static"
                }}
            >
                <MoreVertIcon sx={{ fontSize: "16px" }} />
            </IconButton>

            {/* Drawer for Small Screens */}
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer}
                sx={{
                    display: { xs: "block", md: "none" },
                }}
                PaperProps={{
                    sx: {
                        width: "100%",
                        maxWidth: "100%",
                        overflowX: "hidden",
                        boxShadow: "3px 0 30px #0003",
                    },
                }}

            >
                <List sx={{
                    width: "100%", 
                    backgroundColor: "#fff",
                    px: 0, 
                    "& .MuiListItem-root": {
                        borderBottom: "1px solid #ddd", 
                    },
                }}>
                    {menu.map((item) => (
                        <ListItem
                            key={item.id}
                            onClick={() => handleSelect(item.key)}
                            sx={{
                                py: 1.5,
                                borderBottom: "1px solid #ddd",
                                px: 2,
                                cursor: "pointer",
                                backgroundColor: activeKey === item.key ? "#f1f1f1" : "transparent",
                                transition: "all 0.3s ease-in-out",
                                display: "flex", 
                                alignItems: "center",
                                "&:hover": {
                                    backgroundColor: "#dadada",
                                },
                            }}
                        >
                            <ListItemIcon>
                                <Box
                                    component="img"
                                    src={item.imageUrl}
                                    alt={item.label}
                                    sx={{
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                            {activeKey === item.key && (
                                <CheckIcon sx={{ color: "green" }} />
                            )}
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {/* Sidebar for Larger Screens */}
            <List
                sx={{
                    width: "100%",
                    minHeight: "83vh",
                    maxWidth: 360,
                    boxShadow: 2,
                    backgroundColor: "#fff",
                    display: { xs: "none", md: "block" },
                }}
            >
                {menu.map((item) => (
                    <ListItem
                        key={item.id}
                        onClick={() => handleSelect(item.key)}
                        sx={{
                            py: 1.5,
                            borderBottom: "1px solid #ddd",
                            px: 2,
                            cursor: "pointer",
                            backgroundColor: activeKey === item.key ? "#f1f1f1" : "transparent",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                                backgroundColor: "#dadada",
                            },
                        }}
                    >
                        <ListItemIcon>
                            <Box
                                component="img"
                                src={item.imageUrl}
                                alt={item.label}
                                sx={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                        {activeKey === item.key && (
                            <CheckIcon sx={{ color: "green" }} />
                        )}
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default Sidebar;

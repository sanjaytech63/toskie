import React, { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PlumbingIcon from "@mui/icons-material/Plumbing";

const iconMap: { [key: string]: JSX.Element } = {
    ElectricBolt: <ElectricBoltIcon />,
    Plumbing: <PlumbingIcon />,
};

type SidebarProps = {
    menu: { icon: string; label: string; key: string }[];
    onSelect: (key: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ menu, onSelect }) => {
    const [activeKey, setActiveKey] = useState<string>(""); // Track active item

    const handleSelect = (key: string) => {
        setActiveKey(key); // Update active key
        onSelect(key); // Notify parent component
    };

    return (
        <List sx={{ width: "100%",minHeight: "83vh", maxWidth: 360, boxShadow: 2,backgroundColor:"#fff " }}>
            {menu.map((item) => (
                <ListItem
                    key={item.key}
                    onClick={() => handleSelect(item.key)}
                    sx={{
                        py: 1.5,
                        borderBottom: "1px solid #ddd",
                        px: 2,
                        cursor: "pointer",
                        backgroundColor: activeKey === item.key ? "#f1f1f1 " : "transparent",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                            backgroundColor: "#dadada",
                        },
                    }}
                    component="div"
                >
                    <ListItemIcon sx={{ minWidth: "40px" }}>{iconMap[item.icon]}</ListItemIcon>
                    <ListItemText primary={item.label} />
                </ListItem>
            ))}
        </List>
    );
};

export default Sidebar;

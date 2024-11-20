import React from "react";
import { Box, Card, CardMedia } from "@mui/material";

const Slider = ({ images }: { images: string[] }) => {
    return (
        <Box sx={{ display: "flex", gap: 2, overflowX: "scroll" }}>
            {images.map((src, index) => (
                <Card key={index} sx={{ minWidth: 200 }}>
                    <CardMedia component="img" height="140" image={src} />
                </Card>
            ))}
        </Box>
    );
};

export default Slider;

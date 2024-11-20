
import { Box, Grid, Link, Typography } from "@mui/material";
import { Twitter, Instagram, Facebook, YouTube, Phone, Email } from "@mui/icons-material";

const Header: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", width: "100%", }}>
      <Box
        sx={{
          px: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1,
          borderBottom: "1px solid #ddd",
        }}
      >
        {/* Social Media Links */}
        <Grid container spacing={1} alignItems="center" sx={{ flexWrap: "nowrap" ,display: "flex", justifyContent:{ xs: "space-between", sm: "flex-start"}}}>
          <Grid item>
            <Link href="https://twitter.com/ToskieConnect" target="_blank" aria-label="Twitter">
              <Twitter sx={{ color: "#1DA1F2" }} />
            </Link> 
          </Grid>
          <Grid item>
            <Link href="https://www.instagram.com/toskieapp/" target="_blank" aria-label="Instagram">
              <Instagram sx={{ color: "#C13584" }} />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://www.facebook.com/share/evnn2b6Y6Y3GurYZ/?mibextid=LQQJ4d"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook sx={{ color: "#4267B2" }} />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.youtube.com/@toskie" target="_blank" aria-label="YouTube">
              <YouTube sx={{ color: "#FF0000" }} />
            </Link>
          </Grid>
        </Grid>

        {/* Contact Information */}
        <Grid container spacing={2} justifyContent="flex-end" alignItems="center" sx={{ flexWrap: "nowrap",display: { xs: "none", sm: "flex" } }}>
          <Grid item>
            <Link href="tel:08069179999" sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <Phone sx={{ color: "#1DA1F2", marginRight: "8px" }} />
              <Typography variant="body2" color="textPrimary">
                080 6917 9999
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="mailto:contact@toskie.com" sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <Email sx={{ color: "#1DA1F2", marginRight: "8px" }} />
              <Typography variant="body2" color="textPrimary">
                contact@toskie.com
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;

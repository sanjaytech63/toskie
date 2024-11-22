import React from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Dialog,
    DialogContent,
    Grid,
    IconButton,
    useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/system';
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: 'white',
    padding: theme.spacing(2),
}));

const SignInWithContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(2, 0),
}));

const Divider = styled('hr')(({ theme }) => ({
    flex: 1,
    border: 'none',
    borderTop: '1px solid #ccc',
}));

const SocialButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(0, 1),
}));

interface LoginDialogProps {
    open: boolean;
    onClose: () => void;
}


const Login: React.FC<LoginDialogProps> = ({ open, onClose }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            fullScreen={isMobile} 
            PaperProps={{
                style: isMobile
                    ? { width: '100%', height: '100%' } 
                    : {},
            }}
        >
            {/* Close Icon */}
            <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>

            {/* Dialog Content */}
            <DialogContent>
                <Grid container spacing={2} alignItems="center">
                    {/* Image Section */}
                    <Grid item xs={12} md={6}>
                        <img
                            src="https://www.toskie.com/assets/images/signinimg.png"
                            alt="Welcome Model"
                            style={{
                                width: '100%',
                                borderRadius: '8px',
                                objectFit: 'cover',
                            }}
                        />
                    </Grid>

                    {/* Login Form Section */}
                    <Grid item xs={12} md={6}>
                        <StyledBox>
                            <Typography variant="h4" gutterBottom>
                                Welcome Back 👋
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                You can login with email or use your phone number
                            </Typography>
                            <TextField
                                fullWidth
                                label="Email address or Phone number"
                                variant="outlined"
                                margin="normal"
                            />
                            <Button variant="contained" color="primary" onClick={onClose} fullWidth>
                                Next
                            </Button>
                            <SignInWithContainer>
                                <Divider />
                                <Typography variant="body1" style={{ margin: '0 10px' }}>
                                    Sign in with
                                </Typography>
                                <Divider />
                            </SignInWithContainer>
                            <Box display="flex" justifyContent="center">
                                <SocialButton >
                                    <img src='data:image/png;base64,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'alt='google' style={{width:"100%",height:"26px",objectFit:"contain"}}/>
                                    {/* <GoogleIcon /> */}
                                </SocialButton>
                                <SocialButton  >
                                    <FacebookIcon sx={{ color: "#4267B2",fontSize:"37px" }} />
                                </SocialButton>
                                <SocialButton  >
                                    <AppleIcon sx={{color:"#000000",fontSize:"37px"}}/>
                                </SocialButton>
                            </Box>
                        </StyledBox>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default Login;

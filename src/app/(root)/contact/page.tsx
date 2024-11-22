"use client"
import React from 'react';
import { Box, TextField, Button, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Head from 'next/head';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: "100vh"
}));
const FormContainer = styled(Box)(({ theme }) => ({
  marginLeft: "80px",
  marginTop: "160px",
  marginRight: "80px",
  "@media (max-width: 600px)": {
    margin: "50px 25px",
  },
  "@media (min-width: 600px) and (max-width: 960px)": {
    margin: "40px 40px",
  },
}));


const ContactPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = () => {
    console.log({ name, email, message });
  };
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Get in touch with our support team for assistance."
        />
        <meta
          name="keywords"
          content="contact us, support, customer service, e-commerce"
        />
        <link rel="canonical" href="http://mysite.com/contact" />
        <main>
          <h1>Contact Us</h1>
          <p>We are here to help you with any inquiries.</p>
        </main>

      </Head>

      <StyledContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <img src="https://www.toskie.com/assets/images/signinimg.png" alt="Model" style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
          <Grid item xs={12} md={5}>
            <FormContainer>
              <Typography variant="h4" gutterBottom>
                Contact Us
              </Typography>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ mb: 2 }}
              />

              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
              />

              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                 rows={4}
                sx={{ mb: 2 }}
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
                sx={{
                  backgroundColor: '#38b6ff',
                  '&:hover': {
                    backgroundColor: '#38b6ff',
                  },
                  color: "#000"
                }}
              >
                Submit
              </Button>

            </FormContainer>
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
};

export default ContactPage;

// "use client";
// import React from 'react'
// import { Box, TextField, Button, Typography } from '@mui/material';

// const ContactPage = () => {
//    const [name, setName] = React.useState('');
//   const [email, setEmail] = React.useState('');
//   const [phone, setPhone] = React.useState('');

//   const handleSubmit = () => {
//     console.log({ name, email, phone });
//   };
//     return (
//         <div style={{minHeight:"100vh",padding:"20px"}}>
//             <Box
//                 sx={{
//                     width: '100%',
//                     maxWidth: 400,
//                     margin: '0 auto',
//                     padding: 2,
//                     mt: 4,
//                 }}
//             >
//                 <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
//                     Contact Us
//                 </Typography>

//                 <TextField
//                     label="Name"
//                     variant="outlined"
//                     fullWidth
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     sx={{ mb: 2 }}
//                 />

//                 <TextField
//                     label="Email"
//                     variant="outlined"
//                     fullWidth
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     sx={{ mb: 2 }}
//                 />

//                 <TextField
//                     label="Phone"
//                     variant="outlined"
//                     fullWidth
//                     type="tel"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     sx={{ mb: 2 }}
//                 />

//                 <Button
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                     onClick={handleSubmit}
//                     sx={{
//                         backgroundColor: '#38b6ff',
//                         '&:hover': {
//                             backgroundColor: '#38b6ff',
//                         },
//                         color:"#000"
//                     }}
//                 >
//                     Submit
//                 </Button>
//             </Box>
//         </div>
//     )
// }

// export default ContactPage

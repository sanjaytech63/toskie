import { Typography } from '@mui/material';
import Head from 'next/head';
export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About Us - LUSIVE</title>
                <meta
                    name="description"
                    content="Learn more about our company, mission, and values."
                />
                <meta
                    name="keywords"
                    content="about us, company information, mission, values, e-commerce"
                />
                <link rel="canonical" href="http://mysite.com/about" />

            </Head>
            <div style={{ minHeight: "100vh", padding: "20px" }}>
                <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                    ABOUT TOSKIE
                </Typography>

                <Typography sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                }}
                >
                    Toskie is a Search Engine App that connects people with professionals from their neighborhood. Users can utilize Toskie to search for a variety of professionals, such as plumbers, electricians, teachers, makeup artists, web designers, home cleaners, doctors, and many more. The app fetches results based on the user&apos;s location, providing a convenient way to discover service providers. When using Toskie, users have the ability to view detailed profiles of different service providers. These profiles include information about the professionals&apos; experience, ratings, and reviews from previous clients. This wealth of information empowers users to make informed decisions when selecting a professional to fulfill their specific needs.
                </Typography>
            </div>
        </>
    )
}
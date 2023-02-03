import React from 'react';
import LandingPageImage from "./splash.png";
import Box from '@mui/material/Box';
import Nav from '../NavMenu/NavMenu';
import Header from '../Header/Header';

function HomePage() {


    return (
        <>
            <Header />
                <Box 
                    sx={{ 
                        backgroundImage: `url(${LandingPageImage})`, 
                        backgroundRepeat: "no-repeat",
                        backgroundSize:"contain",
                        height: 844,
                        width: 390,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '& > *': { m: 1, },
                    }}
                >
                </Box>
            <Nav />
        </>
    );
}

export default HomePage;
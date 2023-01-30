import React from 'react';
import UserLoginForm from './UserLoginForm';
import { useHistory } from 'react-router-dom';
import LandingPageImage from "./CiviclyBackground.png";
import Box from '@mui/material/Box';

function UserLoginPage() {
    const history = useHistory();

    return (
        <div>
            <Box sx={{ 
                backgroundImage: `url(${LandingPageImage})`, 
                backgroundRepeat: "no-repeat",
                backgroundSize:"contain",
                height: 844,
                width: 390,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& > *': { m: 1, },
            }}>
                <center>
                    <UserLoginForm />
                </center>
            </Box>
        </div>
    );
}

export default UserLoginPage;
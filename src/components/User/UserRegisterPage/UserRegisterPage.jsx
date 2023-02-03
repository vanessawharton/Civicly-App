import React from 'react';
import { useHistory } from 'react-router-dom';
import UserRegisterForm from './UserRegisterForm';
import LandingPageImage from "./CiviclyBackground.png";
import Box from '@mui/material/Box';

function UserRegisterPage() {
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
                <UserRegisterForm />
            </center>
        </Box>
    </div>
    );
}

export default UserRegisterPage;
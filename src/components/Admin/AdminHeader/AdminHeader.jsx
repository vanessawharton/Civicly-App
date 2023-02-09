import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from './Civicly White Logo Large.png';
import LogOutButton from './LogOutButton';

export default function AdminHeader() {
    return (
        <Box 
            sx={{ flexGrow: 1,
                }}>
            <AppBar 
                sx={{ backgroundColor: '#8A8D9F', }}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <img 
                        src={Logo}
                        style={{ 
                            maxHeight: 40,
                            margin: 5
                            }} 
                    />
                    <LogOutButton />
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Logo from './Civicly White Logo Large.png';

export default function Header() {
    return (
        <Box 
            sx={{ flexGrow: 1,
                }}>
            <AppBar 
                sx={{ backgroundColor: '#8A8D9F', }}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                    <img 
                        src={Logo}
                        style={{ 
                            maxHeight: 40,
                            mt: 5,
                            mb: 5,
                            }} 
                    />
                    <IconButton
                        size="large"
                        edge="end"
                        position= "fixed"
                        color="inherit"
                        aria-label="notifications-bell"
                        sx={{ 
                            mt: 1,
                            ml: 6,
                            color: '#FFBC00' }}
                    >
                        <CircleNotificationsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}
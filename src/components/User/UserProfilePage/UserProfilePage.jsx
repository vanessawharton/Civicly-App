import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



export default function UserProfilePage() {
    
    
    
    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Typography variant="h4" gutterBottom>
                Citizen Profile
            </Typography>
            <IconButton color="black" size="medium" aria-label="edit profile" component="label">
                <EditOutlinedIcon fontSize="large"/>
            </IconButton>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Stack direction="row" spacing={2}>
                    <Avatar
                    alt="Profile Image"
                    src=""
                    sx={{ width: 200, height: 200 }}
                    />
                </Stack>
            </Box>
        </>
    )
}
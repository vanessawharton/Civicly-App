import * as React from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
// ~~~ WORK IN PROGRESS ~~~

// Styled somewhat
// My Reports button href is currently directed at TopCitizens, 
// will need to be changed once My Reports page is finished

export default function UserProfilePage() {
    //pull in redux here to use user information to display on the DOM
    const history = useHistory();
    const dispatch = useDispatch();

    const users = useSelector((store) => store.user);


    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch({ type: 'FETCH_ALL_TICKETS' })
    }, []);


    console.log('whats in tickets', users.username);
    return (
        <>
            <Box sx={{
                display: 'grid',
            }}>
                <center>
                <Typography sx={{ gridRow: '1', justifySelf: 'center'}} variant="h4" gutterBottom>
                    Citizen Profile
                </Typography>
                </center>
                    <IconButton sx={{ gridRow: '1', justifySelf: 'right' }} color="black" size="medium" aria-label="edit profile" component="label">
                        <EditOutlinedIcon fontSize="large"/>
                    </IconButton>
            </Box><br></br>
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
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: 'h5.fontSize'
            }}>
                {users.username}
            </Box><br></br><br></br>
            <Box component="span" sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>Reports Submitted: 00
            </Box><br></br>
            <Box component="span" sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>Upvotes: 00
            </Box><br></br><br></br><br></br>
            <Box component="span" sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>Home City: 
            </Box><br></br>
            <Box component="span" sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                <Button sx={{ width: 130, padding: 1, margin: 1 }} color="secondary" onClick={() => history.push('/myreports')} variant="contained">
                    My Reports
                </Button>
            </Box>
            <Box component="span" sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                <Button  sx={{ width: 130, padding: 1, margin: 1 }} color="primary" href="/" variant="contained" onClick={() => dispatch({ type: 'LOGOUT' })}>
                    Log Out
                </Button>
            </Box>
        </>
    )
}
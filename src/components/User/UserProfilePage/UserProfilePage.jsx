import * as React from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from '../NavMenu/NavMenu';
import Header from '../Header/Header';
import { useSelector } from "react-redux";
import ProfileUploadForm from './ProfileUploadForm';

// ~~~ WORK IN PROGRESS ~~~

// Styled somewhat
// My Reports button href is currently directed at TopCitizens, 
// will need to be changed once My Reports page is finished

export default function UserProfilePage() {
    //pull in redux here to use user information to display on the DOM
    const history = useHistory();
    const dispatch = useDispatch();

    const users = useSelector((store) => store.user);
    const ticketCount = useSelector((store) => store.ticketCount);
    const upvoteCount = useSelector((store) => store.upvotes);

    const [open, setOpen] = React.useState(false);

    //On page load we get 3 reducers. All ticket info, user info, and count and sum for tickets and upvotes
    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_TICKETS' })
        dispatch({ type: 'FETCH_TICKET_COUNT' })
        dispatch({ type: 'FETCH_USER_UPVOTES' })
    }, []);

// dialog for edit profile pic
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        dispatch({ type: 'PUT_PROFILE_IMAGE', payload: profileImage })

    };

    const [profileImage, setProfileImage] = React.useState('')

    return (
        <>
            <Header />
            <Box sx={{ display: 'grid' }}>
                <center>
                <Typography sx={{ gridRow: '1', justifySelf: 'center' }} variant="h4" gutterBottom>
                    Citizen Profile
                </Typography>
                </center>
                    <IconButton sx={{ gridRow: '1', justifySelf: 'right' }} color="black" size="medium" aria-label="edit profile" component="label">
                        <EditOutlinedIcon fontSize="large" onClick={handleClickOpen}/>
                    </IconButton>
                <Dialog sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} open={open} onClose={handleClose}>
                    <DialogTitle sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center'}} id="alert-dialog-title">
                        {`Update Profile Image`}
                    </DialogTitle>
                    <DialogContent>
                        <Stack sx={{ justifyContent: 'center' }} direction="row" spacing={2}>
                            <Avatar
                            alt="Profile Image"
                            src={profileImage}
                            sx={{ width: 150, height: 150, alignSelf: 'center' }}
                            />
                        </Stack>
                        <ProfileUploadForm 
                            profileImage={profileImage}
                            setProfileImage={setProfileImage}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Save</Button>
                    </DialogActions>
                </Dialog>
            </Box><br></br>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                <Stack paddingBottom={1} direction="row" spacing={2}>
                    <Avatar
                    alt="Profile Image"
                    src={users.image_url}
                    sx={{ width: 150, height: 150 }}
                    />
                </Stack>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: 'h6.fontSize',
                paddingBottom: 7
                }}>
                {users.username}
            </Box>
            <Box component="span" sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 2
                }}>Reports Submitted: {ticketCount}
            </Box>
            <Box component="span" sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 9
                }}>Upvotes: {upvoteCount}
            </Box>
            <Box component="span" sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 2
                }}>ZIP Code: {users.zipcode}
            </Box>
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
            <Nav />
        </>
    )
}
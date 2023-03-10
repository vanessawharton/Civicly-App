import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../NavMenu/NavMenu';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";


export default function UserReportsPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const users = useSelector((store) => store.user);
    const tickets = useSelector((store) => store.ticket);

    // Styling for upvote arrow badge
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
        right: 3,
        top: 12,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        zIndex: 0
        },
    }));

    // On page load refreshes user specific tickets based on ID
    useEffect(() => {
        dispatch({ type: 'FETCH_USER_TICKETS' })
    }, []);

    // History.pushes to the specific Map Pin for the Ticket you click on
    const handleClick = (ticket) => {
        history.push('/reportmap');
        dispatch({type: 'SET_ACTIVE_MARKER', payload: ticket})
    }

    return (
        <> 
            <Header/>
            <IconButton sx={{marginTop: 3}} aria-label="back" size="large" onClick={() => history.push('/profile')}>
                <ArrowBackIosNewIcon />
            </IconButton>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -4.7,
                fontWeight: 'bold',
                fontSize: 'h5.fontSize'
            }}>
                {users.username}'s Reports
            </Box>
            <Divider sx={{margin: 3}}/>
                <List>
                {tickets.map((ticket, i) => (
                <ListItem sx={{ paddingLeft: 3 }} disablePadding key={i}>
                    <Stack paddingBottom={1} direction="row" spacing={2}>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            color="primary"
                            showZero
                            badgeContent={ticket.upvotes}
                        >
                            <Avatar sx={{ width: 30, height: 30 }} color="black">
                                <ArrowUpwardRoundedIcon fontSize="small"/>
                            </Avatar>
                        </StyledBadge>
                    </Stack>
                    <ListItemButton component="a" onClick={() => handleClick(ticket)}>
                        <ListItemText primary={`${ticket.subcategory}: Status - ${ticket.status}`} secondary={`Description: ${ticket.description}`}/>
                    </ListItemButton>
                </ListItem>
                ))}
                <ListItem sx={{paddingBottom: 11}}>
                </ListItem>
                </List>
            <Nav/>
        </>
    )
}
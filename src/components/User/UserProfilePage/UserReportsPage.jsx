import * as React from 'react';
import { useDispatch } from 'react-redux';
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
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';
import { useSelector } from "react-redux";

// .mapping over reports that have a link that pulls up their ticket
// use a mui list to map over
// have report links that history.push to the report map

export default function UserReportsPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const users = useSelector((store) => store.user);
    const tickets = useSelector((store) => store.ticket);

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
        right: -3,
        top: 2,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        },
    }));


    useEffect(() => {
        dispatch({ type: 'FETCH_USER_TICKETS' })
    }, []);

console.log('whats in tickets: ', tickets);


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
                    <StyledBadge sx={{marginRight: 1}} badgeContent={ticket.upvotes} color="primary">
                        <ThumbUpAltIcon color="action" />
                    </StyledBadge>
                    <ListItemButton component="a" onClick={() => history.push('/reportmap')}>
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
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


    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch({ type: 'FETCH_ALL_TICKETS' })
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
            <nav aria-label="secondary mailbox folders">
                <List>
                {tickets.map((ticket, i) => (
                <ListItem disablePadding key={i}>
                    <ListItemButton component="a" onClick={() => history.push('/reportmap')}>
                        <ListItemText primary={`${ticket.categoryName}: ${ticket.subcategory}`} secondary={`Status: ${ticket.status} - ${ticket.description}`}/>
                    </ListItemButton>
                </ListItem>
                ))}
                </List>
                    <IconButton aria-label="back" size="large" onClick={() => history.push('/profile')}>
                    <ArrowBackIosNewIcon/> Back
                    </IconButton>
            </nav>
            <Nav/>
        </>
    )
}
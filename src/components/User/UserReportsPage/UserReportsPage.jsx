import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { useEffect } from 'react';
import { useSelector } from "react-redux";

// .mapping over reports that have a link that pulls up their ticket
// use a mui list to map over
// have report links that history.push to the report map

export default function UserReportsPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const users = useSelector((store) => store.user);
    const store = useSelector((store) => store.ticket);


    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch({ type: 'FETCH_ALL_TICKETS' })
    }, []);

    function renderRow(props) {
        const { index, style } = props;
    
        return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
            <ListItemText primary={`Description`} secondary={'wut'} />
            </ListItemButton>
        </ListItem>
        );
    }
console.log('whats in storeeee', store);

    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 2,
                fontWeight: 'bold',
                fontSize: 'h5.fontSize'
            }}>
                {users.username}'s Reports
            </Box>
            <Divider sx={{margin: 3}}/>
            <Box sx={{ 
                width: '100%', 
                height: 400, 
                maxWidth: 360, 
                bgcolor: 'background.paper' 
            }}>
                <FixedSizeList
                    height={500}
                    width={360}
                    itemSize={46}
                    itemCount={200}
                    overscanCount={5}
                >
                    {renderRow}
                </FixedSizeList>
            </Box>
            
        </>
    )
}
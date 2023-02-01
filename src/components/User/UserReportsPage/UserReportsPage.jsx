import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useEffect } from 'react';
import { useSelector } from "react-redux";



export default function UserReportsPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const users = useSelector((store) => store.user);


    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch({ type: 'FETCH_ALL_TICKETS' })
    }, []);

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
        
        
        
        </>
    )
}
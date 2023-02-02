import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ConfirmationView() {

    const history = useHistory();

    return (
        <div>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '& > *': { mt: 5, },
                }}
            >
                <CheckCircleIcon
                    sx={{
                        fontSize: 200,
                        color:'#191C24'
                    }} />
                <br />
                <CardContent>
                    <center>
                    <Typography variant="h5">
                        Report Submitted!
                    </Typography>
                    <Typography variant="body1">
                        Your report has been successfully submitted to: 
                        <br />
                        City of Minneapolis
                    </Typography>
                    </center>
                </CardContent>
                <Button
                    variant="contained"
                    onClick={ () => history.push('/myreports')}>
                    Track Status
                </Button>    
            </Card>
        </div>
    )
}
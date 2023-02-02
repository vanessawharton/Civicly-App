import * as React from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import Dwane from "./Dwane.jpg";
import Morgan from "./Morgan.jpg";
import Adele from "./Adele.jpg";
import Tom from "./Tom.jpg";
import Keanu from "./Keanu.jpg";

export default function TopCitizensPage() {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({type: 'FETCH_TOP_CITIZENS'}, [])
    // })


    return (
        <>
        <br/>
            <Box
                sx={{
                    backgroundColor: 'lightgray',
                    color: 'blue',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <Typography variant="h4">Top Citizens</Typography>
            </Box>
            <br/>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}>
            <Button 
                variant="contained"
                sx={{
                    borderRadius: 10,
                    backgroundColor: 'black',
                    color: 'white',
                    fontSize: 13,
                }}
            >
                This Week
            </Button>
            <Button 
                variant="contained"
                sx={{
                    borderRadius: 10,
                    backgroundColor: 'black',
                    color: 'white',
                    fontSize: 13,
                }}
            >
                This Year
            </Button>
            <Button 
                variant="contained"
                sx={{
                    borderRadius: 10,
                    backgroundColor: 'black',
                    color: 'white',
                    fontSize: 13,
                }}
            >
                All Time
            </Button>
            </Box>
            <Card>
                <CardHeader
                    avatar={<Avatar src={Dwane} sx={{ width: 80, height: 80 }} />}
                    title="D.Johnson"
                    subheader="Reports: 85  Upvotes: +44 Home City: Minneapolis, MN"
                >
                </CardHeader>
            </Card>
            <Card>
                <CardHeader
                    avatar={<Avatar src={Morgan} sx={{ width: 80, height: 80 }}/>}
                    title="voice_of_god"
                    subheader="Reports: 60 Upvotes: +35 Home City: Saint Paul, MN"
                >
                </CardHeader>
            </Card>
            <Card>
                <CardHeader
                    avatar={<Avatar src={Tom} sx={{ width: 80, height: 80 }}/>}
                    title="T.Hanks"
                    subheader="Reports: 40 Upvotes: +30 Home City: Minneapolis, MN"
                >
                </CardHeader>
            </Card>
            <Card>
                <CardHeader
                    avatar={<Avatar src={Keanu} sx={{ width: 80, height: 80 }}/>}
                    title="KeyAnew"
                    subheader="Reports: 15 Upvotes: +22 Home City: Saint Louis Park, MN"
                >
                </CardHeader>
            </Card>
            <Card>
                <CardHeader
                    avatar={<Avatar src={Adele} sx={{ width: 80, height: 80 }}/>}
                    title="Brit_in_Minneapple"
                    subheader="Reports: 1 Upvotes: +2 Home City: Minneapolis, MN"
                >
                </CardHeader>
            </Card>
        </>
    )
}
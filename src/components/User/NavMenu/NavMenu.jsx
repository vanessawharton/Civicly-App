import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PinDropIcon from '@mui/icons-material/PinDrop';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


export default function NavMenu() {
    const [value, setValue] = React.useState('home');
    const ref = React.useRef(null);

    const history = useHistory();

    return (
    <Box
        sx={{ 
            pb: 1 
            }} 
        ref={ref}>
        <Paper 
            sx={{ 
                position: 'fixed', 
                bottom: 0, 
                left: 0, 
                right: 0,
                display: 'flex',
                justifyContent: 'space-evenly' 
            }} 
            elevation={3}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                sx={{
                    backgroundColor: "#E5E5E5",
                    pb: 3,
                    pt: 2,
                    "& .Mui-selected, .Mui-selected > svg": { color: '#1C67F6'}
                }}
            >
                <BottomNavigationAction 
                    label="Home"
                    value="home" 
                    icon={
                        <HomeIcon 
                            sx={{
                                fontSize: 50,
                                color:'#191C24'
                            }}
                            onClick={ () => history.push('/home')} />
                        }
                    sx={{
                        "& .MuiBottomNavigationAction-label, .Mui-selected": { fontSize: 15 }
                    }} 
                />
                <BottomNavigationAction 
                    label="Report Map" 
                    value="map" 
                    icon={
                        <PinDropIcon 
                            sx={{
                                fontSize: 50,
                                color: '#191C24',
                                pt: 2
                            }}
                            onClick={ () => history.push('/reportmap')} />
                        }
                        sx={{
                            "& .MuiBottomNavigationAction-label, .Mui-selected": { fontSize: 15 }
                        }} 
                />
                <BottomNavigationAction 
                    label="Report" 
                    value="add" 
                    icon={
                        <AddCircleOutlineIcon 
                            sx={{
                                fontSize: 80,
                                color: '#FFBC00',
                                top: -20
                            }}
                            onClick={ () => history.push('/addreport')} />
                        }
                        sx={{
                            "& .MuiBottomNavigationAction-label, .Mui-selected": { fontSize: 15 }
                        }} 
                />
                <BottomNavigationAction 
                    label="Top Citizens" 
                    value="rank" 
                    icon={
                        <EmojiEventsIcon 
                        sx={{
                            fontSize: 50,
                            color: '#191C24',
                            pt: 2
                        }}
                        onClick={ () => history.push('/topcitizens')} />
                    }
                    sx={{
                        "& .MuiBottomNavigationAction-label, .Mui-selected": { fontSize: 15 }
                    }} 
                />
                <BottomNavigationAction 
                    label="Profile" 
                    value="profile" 
                    icon={
                        <AccountBoxIcon 
                        fontSize="large"
                        sx={{
                            color: '#191C24',
                            fontSize: 50,
                        }}
                        onClick={ () => history.push('/profile')}/>
                    }
                    sx={{
                        "& .MuiBottomNavigationAction-label, .Mui-selected": { fontSize: 15 },
                    }} 
                />
            </BottomNavigation>
        </Paper>
    </Box>
    );
}
import { useState, useRef, forwardRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Logo from './Civicly White Logo Large.png';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useSelector } from "react-redux";
import Badge from '@mui/material/Badge';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { NotificationsNoneOutlined } from '@mui/icons-material';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function Header() {
    const [open, setOpen] = useState(false);
    // const [invisible, setInvisible] = useState(false);
    const [hidden, setHidden] = useState('');
    const [id, setId] = useState('');

    const notifications = useSelector((store) => store.notifications);
    
    const notificationDetail= {
        id: id,
        is_hidden: hidden
    };

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMsgClick =() => {
        history.push('/myreports');
    }

    const hideNotification = (notification) => {
        console.log('notification is:', notification);
        console.log('notification detail is', notificationDetail);
        dispatch({ type: 'HIDE_NOTIFICATION', payload: {...notificationDetail, id: notification.id, is_hidden: true} })
    };

    // const handleBadgeVisibility = () => {
    //     setInvisible(!invisible);
    // };

    useEffect(() => {

        dispatch({ type: 'FETCH_NOTIFICATIONS' });

        const getNotifications = () => {
            dispatch({ type: 'FETCH_NOTIFICATIONS' });
        }

        getNotifications();

        const interval= setInterval(() => {
            getNotifications()
        }, 180000);

        return () => clearInterval(interval);

    }, []);

    useEffect(() => {
        console.log('yesification details are:', notificationDetail);

    }, [notificationDetail]);

    console.log("whhhhaaa", !notifications.filter(notification => notification.is_hidden === false).length === 0);

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ backgroundColor: "#8A8D9F" }}>
                    <Toolbar
                        sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        }}
                    >
                        <img
                        src={Logo}
                        style={{
                            maxHeight: 40,
                            mt: 5,
                            mb: 5,
                        }}
                    />
                            <IconButton
                                size="large"
                                edge="end"
                                position="fixed"
                                color="inherit"
                                aria-label="notifications-bell"
                                sx={{
                                    mt: 1,
                                    ml: 5,
                                    color: "#FFBC00",
                                    
                                }}
                                onClick={handleClickOpen}
                            >
                                <Badge 
                                    invisible={notifications.filter(notification => notification.is_hidden === false).length === 0}
                                    fontSize="large"
                                    color="primary"
                                    variant="dot"
                                    overlap="circular"
                                >
                                <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        <Dialog
                            fullScreen
                            aria-labelledby="customized-dialog-title"
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Transition}
                        >
                            <AppBar sx={{ position: 'relative' }}>
                                <Toolbar>
                                    <Typography 
                                        sx={{ 
                                            ml: 2, 
                                            flex: 1 
                                        }} 
                                        variant="h6" 
                                        component="div"
                                    >
                                        Notifications
                                    </Typography>
                                    <IconButton
                                        edge="end"
                                        color="inherit"
                                        onClick={handleClose}
                                        aria-label="close"
                                    >
                                        <HighlightOffIcon />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                            <List sx={{ pt: 0 }}>
                                {notifications.map(notification => (
                                    !notification.is_hidden && 
                                        <ListItem
                                            key={notification.id}
                                        >
                                            <ListItemButton onClick={() => handleMsgClick(notification)} key={notification} >
                                                <ListItemText
                                                    primary={`Report: ${notification.comments}`} secondary={`City of Minneapolis Updated Status - ${notification.notification_status}`} 
                                                >
                                                </ListItemText>
                                            </ListItemButton>
                                            <IconButton
                                                edge="end"
                                                color="inherit"
                                                onClick={() => hideNotification(notification)}
                                                aria-label="delete"
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                        </ListItem>
                                ))}
                                <Divider />
                            </List>
                        </Dialog>
                    </Toolbar>
                </AppBar>
                <Toolbar
                    sx={{ minHeight: 32,
                    }}/>
            </Box>
        </div>
    );
}
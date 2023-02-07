import * as React from 'react';
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const notifications = useSelector((store) => store.notifications);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                            <NotificationsIcon />
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
                                        <CloseIcon />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                            <List sx={{ pt: 0 }}>
                                {/* {notifications.map((notification) => (
                                    <ListItem>
                                        <ListItemButton onClick={() => handleMsgClick(notification)} key={notification} >
                                            <ListItemText primary={notification.notification_status} secondary={notification.comments} />
                                        </ListItemButton>
                                    </ListItem>
                                ))} */}
                                <Divider />
                            </List>
                        </Dialog>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </Box>
        </div>
    );
}
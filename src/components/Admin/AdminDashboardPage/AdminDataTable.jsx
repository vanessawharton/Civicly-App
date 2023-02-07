import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import { Grid, TextField } from "@mui/material"
import { useHistory, useParams } from 'react-router-dom';
import { Button, InputLabel, Select, MenuItem, FormControl, NativeSelect, Link } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';




export default function AdminDataTable() {



    const tickets = useSelector((store) => store.ticket);
    const user = useSelector((store) => store.user);
    // const { id } = useParams();
    const history = useHistory();
    // const store = useReduxStore();
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [id, setId] = useState('');
    const [status, setStatus] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [location, setLocation] = useState('');
    // const [submittedBy, setSubmittedBy] = useState();
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [license, setLicense] = useState('');
    const [lastStatusUpdate, setLastStatusUpdate] = useState('');
    const [internalComments, setInternalComments] = useState('');
    const [image, setImage] = useState('');
    const [open, setOpen] = useState(false);
    const [statusOpen, setStatusOpen] = useState(false);
    const [userId, setUserId] = useState('');
    // const [ticketDetails, setTicketDetails] = useState();

    const ticketDetails = {
        ticket_id: id,
        comments: description,
        status: status,
        timestamp: date,
        user_id: userId
    };

    useEffect(() => {
        console.log('ticket details are:', ticketDetails)
    }, [ticketDetails]);

    const columns = [
        { field: 'id', headerName: 'Report #', width: 70 },
        { field: 'status', headerName: 'Status', width: 100 },
        { field: 'categoryName', headerName: 'Category', width: 175 },
        { field: 'subcategory', headerName: 'Subcategory', width: 175 },
        { field: 'date', headerName: 'Date', width: 100 },
        // { field: 'username', headerName: 'Citizen', width: 100 },
        { field: 'description', headerName: 'Details', width: 265 }
    ];

    const handleDetails = (ticket) => {
        console.log('report clicked', ticket);
        setId(ticket.row.id);
        setStatus(ticket.row.status);
        setCategory(ticket.row.categoryName);
        setSubcategory(ticket.row.subcategory);
        // setLocation(row.location); still need to figure this out
        setDate(ticket.row.date);
        setDescription(ticket.row.description);
        setImage(ticket.row.image_url);
        // setUsername(user.username);
        setUserId(ticket.row.user_id);
        setOpen(true);
        // setTicketDetails(ticket);

    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleUpdateStatus = () => {
        console.log('UpdateStatus button clicked');
        setStatusOpen(true);
    }

    const handleSendStatusUpdate = () => {
        //dispatch 'UPDATE_TICKET_STATUS' with the new status to DB
        //or handle in the onChange of the status Select component below
        //this is where we handle sending notification too?
        dispatch({ type: 'UPDATE_TICKET_STATUS', payload: ticketDetails })
        dispatch({ type: 'SEND_NOTIFICATION', payload: ticketDetails })
        setStatusOpen(false);
        setOpen(false);
    }

    const handleSeeMap = () => {
        console.log('see map button clicked');
        //this is where we would handle showing the map view based
        //on the geolocation of submitted ticket
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid sx={{ m: 2 }}
                rows={tickets} onRowClick={handleDetails}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Report Details</DialogTitle>
                <DialogContent>
                    <TextField
                        
                        margin="dense"
                        id="name"
                        label="Report Number"
                        value={id}
                        type="text"
                        fullWidth
                        variant="standard"
                        inputProps={
                            { readOnly: true, disabled: true }
                        }
                    /><br /><br />
                    <Button variant="contained"
                        onClick={handleSeeMap}
                    >See Map Location
                    </Button>
                    <TextField

                        margin="dense"
                        id="name"
                        label="Last Status Update"
                        value={status}
                        type="text"
                        fullWidth
                        variant="standard"
                        inputProps={
                            { readOnly: true, disabled: true }
                        }
                    /><br /><br />
                    <Button style={{ backgroundColor: "#bf0000" }}
                        variant="contained"
                        onClick={handleUpdateStatus}
                    >Update Status</Button><br />
                    <TextField

                        margin="dense"
                        id="name"
                        label="Category"
                        value={category}
                        type="text"
                        fullWidth
                        variant="standard"
                        inputProps={
                            { readOnly: true, disabled: true }
                        }
                    />
                    <TextField

                        margin="dense"
                        id="name"
                        label="Subcategory"
                        value={subcategory}
                        type="text"
                        fullWidth
                        variant="standard"
                        inputProps={
                            { readOnly: true, disabled: true }
                        }
                    />
                    <TextField

                        margin="dense"
                        id="name"
                        label="Submitted By"
                        value={username}
                        type="text"
                        fullWidth
                        variant="standard"
                        inputProps={
                            { readOnly: true, disabled: true }
                        }
                    />
                    <TextField

                        margin="dense"
                        id="name"
                        label="Date"
                        value={date}
                        type="text"
                        fullWidth
                        variant="standard"
                        inputProps={
                            { readOnly: true, disabled: true }
                        }
                    />
                    <TextField

                        margin="dense"
                        id="name"
                        label="Notes"
                        value={description}
                        type="text"
                        fullWidth
                        multiline
                        maxRows={10}
                        variant="standard"
                        inputProps={
                            { readOnly: true, disabled: true }
                        }
                    />

                    <TextField

                        margin="dense"
                        id="name"
                        label="Internal Comments"
                        value={internalComments}
                        type="text"
                        fullWidth
                        variant="standard"
                        inputProps={
                            { readOnly: true, disabled: true }
                        }
                    />
                    {/* <img>need to include user image here</img> */}
                </DialogContent>
                <DialogActions>
                    <Button style={{ backgroundColor: "#5A5A5A" }}
                        variant="contained"
                        onClick={handleClose}
                    >Back To Dashboard</Button>
                    <Button style={{ backgroundColor: "#bf0000" }}
                        variant="contained"
                        onClick={handleUpdateStatus}
                    >Update Status</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={statusOpen}
                // onClose={handleStatusClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Update Status of This Report?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Changing the status of this report will send a notification to the citizen
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <FormControl fullWidth>
                        <Select labelId="status-update"
                            id="status-update"
                            value={status}
                            label="Update Status"
                            onChange={(e) => {
                                console.log('Status updated to: ', e.target.value)
                                setStatus(e.target.value)
                                // dispatch({ type: 'UPDATE_TICKET_STATUS', payload: e.target.value })
                            }}
                        >
                            <InputLabel id="Status Update">Update Status</InputLabel>
                            <MenuItem value="Accepted">Accepted</MenuItem>
                            <MenuItem value="Dispatched">Dispatched</MenuItem>
                            <MenuItem value="Closed">Closed</MenuItem>
                        </Select>
                        <Button variant="contained"
                            onClick={handleSendStatusUpdate}
                        >Send Status Update</Button>
                    </FormControl>
                </DialogActions>
            </Dialog>
        </div>
    );
}
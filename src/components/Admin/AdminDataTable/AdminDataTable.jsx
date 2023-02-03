import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import { Grid, TextField } from "@mui/material"
import { useHistory, useParams } from 'react-router-dom';
import { Button, InputLabel, FormControl, NativeSelect, Link } from '@mui/material';
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
    const [id, setId] = useState(tickets.id);
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

    const columns = [
        { field: 'id', headerName: 'Report #', width: 70 },
        { field: 'status', headerName: 'Status', width: 100 },
        { field: 'categoryName', headerName: 'Category', width: 175 },
        { field: 'subcategory', headerName: 'Subcategory', width: 175 },
        { field: 'date', headerName: 'Date', width: 100 },
        { field: 'username', headerName: 'Citizen', width: 100 },
        { field: 'description', headerName: 'Details', width: 265 }
    ];

    const handleDetails = (ticket) => {
        console.log('report clicked', ticket);
        setId(ticket.row.id);
        // setStatus(ticket.row.status);
        setCategory(ticket.row.categoryName);
        setSubcategory(ticket.row.subcategory);
        // setLocation(row.location); still need to figure this out
        //setSubmittedBy(row.submittedBy); need a SQL join for username, or anonymous
        setDate(ticket.row.date);
        setDescription(ticket.row.description);
        //setImage(row.image_url); still need to figure this out as well
        setLastStatusUpdate(ticket.row.status);
        setUsername(user.username);

        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleUpdateStatus = () => {
        console.log('UpdateStatus button clicked');
        //need to add either a sweetalert or another mui dialog for confirmation
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
                    <DialogContentText>
                        Below you will find the details for this report
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Report Number"
                        value={id}
                        type="text"
                        fullWidth
                        variant="standard"
                    /><br /><br />
                    <Button variant="contained"
                        onClick={handleSeeMap}
                    >See Map Location
                    </Button>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Last Status Update"
                        value={lastStatusUpdate}
                        type="text"
                        fullWidth
                        variant="standard"
                    /><br /><br />
                    <Button style={{ backgroundColor: "#bf0000" }}
                        variant="contained"
                        onClick={handleUpdateStatus}
                    >Update Status</Button><br />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Category"
                        value={category}
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Subcategory"
                        value={subcategory}
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    {/* <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Location"
                            value={location}
                            type="text"
                            fullWidth
                            variant="standard"
                            
                        /> */}
                    
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Submitted By"
                        value={username}
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Date"
                        value={date}
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Notes"
                        value={description}
                        type="text"
                        fullWidth
                        multiline
                        maxRows={10}
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Internal Comments"
                        value={internalComments}
                        type="text"
                        fullWidth
                        variant="standard"
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
        </div>
    );
}
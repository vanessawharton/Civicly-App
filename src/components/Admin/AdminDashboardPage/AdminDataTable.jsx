import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import { TextField } from "@mui/material"
import { Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import ReportDetailMap from '../ReportDetailMap/ReportDetailMap';
import Swal from 'sweetalert2'
import './AdminDataTable.css';


export default function AdminDataTable({ theme }) {

    const tickets = useSelector((store) => store.ticket);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const [id, setId] = useState('');
    const [status, setStatus] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [submittedBy, setSubmittedBy] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [internalComments, setInternalComments] = useState('');
    const [image, setImage] = useState('');
    const [open, setOpen] = useState(false);
    const [statusOpen, setStatusOpen] = useState(false);
    const [userId, setUserId] = useState('');
    const [userName, setUserName] =useState('');
    const [upvotes, setUpvotes] = useState('');
    // const [ticketDetails, setTicketDetails] = useState();

    //This stores the ticket values that we send in the dispatch to
    //insert a new notification.
    const ticketDetails = {
        ticket_id: id,
        comments: description,
        status: status,
        timestamp: date,
        user_id: userId
    };

    useEffect(() => {
        // console.log('ticket details are:', ticketDetails)
        console.log('tickets are:', tickets)
    }, [ticketDetails]);

    //Sets the column header labels and styling
    const columns = [
        { field: 'id', headerName: 'Report #', headerAlign: 'center', width: 100 },
        { field: 'status', headerName: 'Status', headerAlign: 'center', width: 100 },
        { field: 'categoryName', headerName: 'Category', headerAlign: 'center', width: 175 },
        { field: 'subcategory', headerName: 'Subcategory', headerAlign: 'center', width: 175 },
        {
            field: 'date', headerName: 'Date', headerAlign: 'center', width: 200,
            valueGetter: (params) => new Date(params.row.date).toLocaleDateString()
        },
        { field: 'description', headerName: 'Details', headerAlign: 'center', width: 265 }
    ];

    //This function sets our state variables for the report row that was clicked on
    //in the data grid
    const handleDetails = (ticket) => {
        console.log('report clicked', ticket);
        setId(ticket.row.id);
        setStatus(ticket.row.status);
        setCategory(ticket.row.categoryName);
        setSubcategory(ticket.row.subcategory);
        setLatitude(ticket.row.latitude);
        setLongitude(ticket.row.longitude);
        setDate(ticket.row.date);
        setDescription(ticket.row.description);
        setImage(ticket.row.image_url);
        setUserId(ticket.row.user_id);
        setUpvotes(ticket.row.upvotes);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleUpdateStatus = () => {
        // console.log('UpdateStatus button clicked');
        setStatusOpen(true);
    }

    const handleSendStatusUpdate = () => {
        //This function sends dispatches changing the status value in 
        //the ticket table, and creates a new notification in the 
        //notification table
        dispatch({ type: 'UPDATE_TICKET_STATUS', payload: ticketDetails })
        dispatch({ type: 'SEND_NOTIFICATION', payload: ticketDetails })
        Swal.fire({
            text: 'Report Status Updated!',
            confirmButtonColor: '#8cd1ff',
            confirmButtonText: 'OK'
        })
        setStatusOpen(false);
        setOpen(false);
    }

    return (
        <Box sx={{
            height: 400,
            width: '100%',
            '& .MuiDataGrid-columnHeaders': {
                backgroundColor: '#8cd1ff',
            },
        }}
        >
            <DataGrid sx={{
                boxShadow: 2,
                border: 2,
                borderColor: 'primary.light',
                '& .MuiDataGrid-cell:hover': {
                    color: 'palette.primary.main',
                },
            }}
                rows={tickets}
                onRowClick={handleDetails}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
            />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Report Details</DialogTitle>
                <Button
                    edge="end"
                    position="fixed"
                    style={{ backgroundColor: "#bf0000" }}
                    variant="contained"
                    onClick={handleUpdateStatus}
                >Update Status
                </Button>
                <DialogContent display="flex"
                >
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
                    />

                    <TextField

                        margin="dense"
                        id="name"
                        label="Citizen Upvotes"
                        value={upvotes}
                        type="text"
                        fullWidth
                        variant="standard"
                        inputProps={
                            { readOnly: true, disabled: true }
                        }
                    /><br /><br />
                    <DialogContentText className="img-txt">
                        Report Image
                    </DialogContentText>
                    <img className="report-image" style={{ maxHeight: 300, MaxWidth: 300 }} src={image} />
                    <br /><br />
                    <DialogContentText className="img-txt">
                        Report Location
                    </DialogContentText>
                    <ReportDetailMap
                        latitude={latitude}
                        longitude={longitude} /><br /><br />

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
                        label="Date"
                        value={new Date(date).toLocaleDateString()}
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
                        label="Citizen ID"
                        value={userId}
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
                        label="Notes from Citizen"
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
                </DialogContent>
                <DialogActions>
                    <Button style={{ backgroundColor: "#5A5A5A" }}
                        variant="contained"
                        onClick={handleClose}
                    >Back To Dashboard</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={statusOpen}
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
                            onChange={(e) => {
                                console.log('Status updated to: ', e.target.value)
                                setStatus(e.target.value)
                            }}
                        >
                            <InputLabel id="Status Update">Update Status</InputLabel>
                            <MenuItem value="Accepted">Accepted</MenuItem>
                            <MenuItem value="Dispatched">Dispatched</MenuItem>
                            <MenuItem value="Closed">Closed</MenuItem>
                        </Select><br />
                        <Button variant="contained"
                            onClick={handleSendStatusUpdate}
                        >Send Status Update</Button>
                    </FormControl>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
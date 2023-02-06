import Header from "../AdminHeader/AdminHeader"
import AdminDataTable from "../AdminDataTable/AdminDataTable";
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
// import useReduxStore from '../../hooks/useReduxStore';
import { Grid, TextField } from "@mui/material"
import { useHistory, useParams } from 'react-router-dom';
import { Button, InputLabel, FormControl, NativeSelect } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import './AdminDashboardPage.css';
import { useSelector } from "react-redux";


export default function AdminDashBoardPage() {

    const { id } = useParams();
    const history = useHistory();
    // const store = useReduxStore();
    const dispatch = useDispatch();
    const [reportNumber, setReportNumber] = useState();
    const [status, setStatus] = useState();
    const [category, setCategory] = useState();
    const [subcategory, setSubcategory] = useState();
    const [location, setLocation] = useState();
    const [submittedBy, setSubmittedBy] = useState();
    const [date, setDate] = useState();
    const [notes, setNotes] = useState();
    const [license, setLicense] = useState();
    const [lastStatusUpdate, setLastStatusUpdate] = useState();
    const [internalComments, setInternalComments] = useState();
    const [image, setImage] = useState();
    const [open, setOpen] = useState(false);

    const tickets = useSelector((store) => store.ticket);

    //just a placeholder dispatch here, we can change if it makes more sense
    //grabs all reports from store/reducer(however we end up hooking things up)
    useEffect(() => {
        // window.scrollTo(0, 0)
        dispatch({ type: 'FETCH_ALL_TICKETS' })
    }, []);

    //placeholder onClick function to capture details of report and
    //navigate to details view
    const reportDetails = (report) => {
        console.log('clicked on a report', report.id);

        history.push('/reportdetailview/' + report.id)
    };

    const handleNeedsReview = () => {
        console.log('needs review button clicked');
        //what do we want this button to do?
    };

    const handleReportSearch = () => {
        console.log('report search button clicked');
        //what do we want this to do?
    };

    const handleReporting = () => {
        console.log('reporting button clicked');
        //what does this button do?
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const confirmClose = () => {
        console.log('confirm close report button clicked');
        //need to add either a sweetalert or another mui dialog for confirmation
    }

    // console.log(tickets);

    return (
        <>
            <Header /><br/><br/>
            <div className="body">
                
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 10 }}
                    display="flex"
                    justifyContent="center"
                >
                    <Grid item xs={2} sm={3} md={3}
                        display="flex"
                        justifyContent="center"
                        justify="center"
                        alignItems="center">
                        <Button style={{ color: "black", backgroundColor: "#bcf5bc" }}
                            variant="contained"
                            onClick={handleNeedsReview}
                        >Needs Review
                        </Button>
                    </Grid>
                    <Grid item xs={2} sm={3} md={3}
                        display="flex"
                        justifyContent="center"
                        justify="center"
                        alignItems="center">
                        <Button style={{ color: "black", backgroundColor: "#ea80fc" }}
                            variant="contained"
                            onClick={handleReportSearch}
                        >Report Search
                        </Button>
                    </Grid>
                    <Grid item xs={2} sm={3} md={3}
                        display="flex"
                        justifyContent="center"
                        justify="center"
                        alignItems="center">
                        <Button style={{ color: "black", backgroundColor: "#ffa07a" }}
                            variant="contained"
                            onClick={handleReporting}
                        >Reporting
                        </Button>
                    </Grid>
                    <Grid>
                        <br />
                        <Grid item xs={12}
                            marginLeft={3}
                            justifyContent="center"
                            justify="center"
                            alignItems="center">
                            <br />
                            <h2>Report List</h2>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}
                        justifyContent="center"
                        justify="center"
                        alignItems="center"
                        marginLeft={5}
                        marginRight={5}>
                        <AdminDataTable />
                    </Grid>
                </Grid>
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
                            value={reportNumber}
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Status"
                            value={status}
                            type="text"
                            fullWidth
                            variant="standard"
                        />
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
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Location"
                            value={location}
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Submitted By"
                            value={submittedBy}
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
                            value={notes}
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
                            label="Last Status Update"
                            value={lastStatusUpdate}
                            type="text"
                            fullWidth
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
                            onClick={confirmClose}
                        >Close Report</Button>
                    </DialogActions>
                </Dialog>
            </div>

        </>
    )
}
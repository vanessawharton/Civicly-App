import { Grid } from "@mui/material"
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

export default function ReportDetailView() {

    const { id } = useParams();
    const history = useHistory();
    const store = useReduxStore();
    const dispatch = useDispatch();
    console.log("details item id:", id);

    //getting the details from the store on page load
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch({ type: 'GET_REPORT_DETAILS', payload: id })
    }, []);

    //the useState arguments will be filled in once we figure out what 
    //we are calling that part of the store in redux
    const [reportNumber, setReportNumber] = useState();
    const [status, setStatus] = useState();
    const [category, setCategory] = useState();
    const [subcategory, setSubcategory] = useState();
    const [location, setLocation] = useState();
    const [submittedBy, setSubmitteBy] = useState();
    const [date, setDate] = useState();
    const [note, setNote] = useState();
    const [license, setLicense] = useState();
    const [lastStatusUpdate, setLastStatusUpdate] = useState();
    const [internalComments, setInternalComments] = useState();
    const [image, setImage] = useState();

    const backToReports = () => {
        console.log('back to reports button clicked');
        history.push('/admindashboard');
    }

    return (
        //
        <>
            <Grid>
                <Grid item sx={12}>
                    <Button variant="contained"
                        align="center"
                        onClick={backToReports}
                    >Back to all Reports
                    </Button>
                </Grid>
                <Grid item sx={12}>
                    Report Number : <TextField label={reportNumber} />
                </Grid>
                <Grid item sx={12}>
                    Status: <TextField label={status} />
                </Grid>
                <Grid item sx={12}>
                    Category: <TextField label={category} />
                </Grid>
                <Grid item sx={12}>
                    Subcategory: <TextField label={subcategory} />
                </Grid>
                <Grid item sx={12}>
                    Location: <TextField label={location} />
                </Grid>
                <Grid item sx={12}>
                    Submitted by: <TextField label={submittedBy} />
                </Grid>
                <Grid item sx={12}>
                    Date Submitted: <TextField label={date} />
                </Grid>
                <Grid item sx={12}>
                    Submission note: <TextField label={note} />
                </Grid>
                <Grid item sx={12}>
                    License Plate Information: <TextField label={license} />
                </Grid>
                <Grid item sx={12}>
                    Last Status Update: <TextField label={lastStatusUpdate} />
                </Grid>
                <Grid item sx={12}>
                    Internal Comments: <TextField label={internalComments} />
                </Grid>
                <Grid item sx={12}>
                    {/* <img className="report-image"/> */}
                    {/* once image upload/download is figured out this can be updated */}
                </Grid>
            </Grid>
        </>
    )
}
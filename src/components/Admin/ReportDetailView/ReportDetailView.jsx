import { Grid } from "@mui/material"
import { TextField } from '@mui/material';

export default function ReportDetailView() {

    return (
        <>
            <Grid>
                <Grid item sx={12}>
                    Report Number : <TextField label="value goes here" />
                </Grid>
                <Grid item sx={12}>
                    Status: <TextField label="value goes here" />
                </Grid>
                <Grid item sx={12}>
                    Category: <TextField label="value goes here" />
                </Grid>
                <Grid item sx={12}>
                    Subcategory: <TextField label="value goes here" />
                </Grid>
                <Grid item sx={12}>
                    Location: <TextField label="value goes here" />
                </Grid>
                <Grid item sx={12}>
                    Submitted by: <TextField label="value goes here" />
                </Grid>
                <Grid item sx={12}>
                    Date Submitted: <TextField label="value goes here" />
                </Grid>
                <Grid item sx={12}>
                    Submission note: <TextField label="value goes here" />
                </Grid>
                <Grid item sx={12}>
                    License Plate Information: <TextField label="value goes here" />
                </Grid>
                <Grid item sx={12}>
                    Last Status Update: <TextField label="value goes here" />
                </Grid>
                <Grid item sx={12}>
                    Internal Comments: <TextField label="value goes here" />
                </Grid>
                <Grid item sx={12}>
                    {/* <img className="report-image"/> */}
                    {/* once image upload/download is figured out this can be updated */}
                </Grid>
            </Grid>
        </>

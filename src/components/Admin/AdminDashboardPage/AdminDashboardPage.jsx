import Header from "../AdminHeader/AdminHeader"
import AdminDataTable from "../AdminDataTable";
import { Grid } from "@mui/material"
import { Button } from '@mui/material';


export default function AdminDashBoardPage() {
    return (
        <>
            <Header />
            <Grid container spacing={{ xs: 2, sm: 8, md: 10 }} columns={{ xs: 2, sm: 8, md: 10 }}
                display="flex"
                justifyContent="space-evenly"
            >
                <Grid item xs={2} sm={3} 
                    display="flex"
                    justifyContent="center"
                    justify="center"
                    alignItems="center">
                    <Button variant="contained">
                        Needs Review
                    </Button>
                </Grid>
                <Grid item xs={2} sm={3} 
                    display="flex"
                    justifyContent="center"
                    justify="center"
                    alignItems="center">
                    <Button variant="contained">
                        Report Search
                    </Button>
                </Grid>
                <Grid item xs={2} sm={3} 
                    display="flex"
                    justifyContent="center"
                    justify="center"
                    alignItems="center">
                    <Button variant="contained">
                        Reporting
                    </Button>
                </Grid>
                <Grid>
                    <Grid item xs={12}
                    
                        justifyContent="center"
                        justify="center"
                        alignItems="center">
                        <h2>Report List</h2>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <AdminDataTable />
                </Grid>
            </Grid>
        </>
    )
}
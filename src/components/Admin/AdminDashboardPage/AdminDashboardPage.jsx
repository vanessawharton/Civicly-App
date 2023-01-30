import Header from "../AdminHeader/AdminHeader"
import AdminDataTable from "../AdminDataTable";
import { Grid } from "@mui/material"
import { Button } from '@mui/material';


export default function AdminDashBoardPage() {
    return (
        <>
            <Header />
            <Grid>
                <Grid item xs={4}>
                    <Button>
                        Needs Review
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button>
                        Report Search
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button>
                        Reporting
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <h2>Report List</h2>
                </Grid>
                <Grid item xs={12}>
                    <AdminDataTable />
                </Grid>
            </Grid>
        </>
    )
}
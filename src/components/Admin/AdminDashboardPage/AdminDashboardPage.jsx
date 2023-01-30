import Header from "../AdminHeader/AdminHeader"
import AdminDataTable from "../AdminDataTable/AdminDataTable";
import { Grid } from "@mui/material"
import { Button, InputLabel, FormControl, NativeSelect } from '@mui/material';
import './AdminDashboardPage.css';


export default function AdminDashBoardPage() {
    return (
        <>
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
                        <Button style={{color: "black", backgroundColor: "#bcf5bc"}}
                        variant="contained">
                            Needs Review
                        </Button>
                    </Grid>
                    <Grid item xs={2} sm={3} md={3}
                        display="flex"
                        justifyContent="center"
                        justify="center"
                        alignItems="center">
                        <Button style={{color: "black", backgroundColor: "#ea80fc"}} 
                            variant="contained">
                            Report Search
                        </Button>
                    </Grid>
                    <Grid item xs={2} sm={3} md={3}
                        display="flex"
                        justifyContent="center"
                        justify="center"
                        alignItems="center">
                        <Button style={{color: "black", backgroundColor: "#ffa07a"}}
                            variant="contained">
                            Reporting
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
            </div>

        </>
    )
}
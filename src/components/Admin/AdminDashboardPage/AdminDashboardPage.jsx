import Header from "../AdminHeader/AdminHeader"
import AdminDataTable from "../AdminDataTable/AdminDataTable";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import useReduxStore from '../../hooks/useReduxStore';
import { Grid } from "@mui/material"
import { useHistory, useParams } from 'react-router-dom';
import { Button, InputLabel, FormControl, NativeSelect } from '@mui/material';

import './AdminDashboardPage.css';


export default function AdminDashBoardPage() {

    const { id } = useParams();
    const history = useHistory();
    const store = useReduxStore();
    const dispatch = useDispatch();

    //just a placeholder dispatch here, we can change if it makes more sense
    //grabs all reports from store/reducer(however we end up hooking things up)
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch({type: 'FETCH_ALL_REPORTS'})
    }, []);

    //placeholder onClick function to capture details of report and
    //navigate to details view
    const reportDetails = (report) => {
        console.log('clicked on a report', report.id);

        history.push('/reportdetailview/' + report.id)
    }

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
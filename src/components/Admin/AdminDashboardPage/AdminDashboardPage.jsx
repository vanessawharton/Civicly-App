import AdminHeader from "../AdminHeader/AdminHeader";
import AdminDataTable from "./AdminDataTable";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Grid } from "@mui/material"
import './AdminDashboardPage.css';


export default function AdminDashBoardPage() {
    const dispatch = useDispatch();

    //useEffect to Fetch all tickets from DB on page load
    useEffect(() => {
        // window.scrollTo(0, 0)
        dispatch({ type: 'FETCH_ALL_TICKETS' })
    }, []);
    // console.log(tickets);

    return (
        <>
            <AdminHeader /><br /><br />
            <div className="body">
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 10 }}
                    display="flex"
                    justifyContent="center"
                >
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
                        <AdminDataTable /><br /><br />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
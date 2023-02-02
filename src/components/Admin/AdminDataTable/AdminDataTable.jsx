import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux";




export default function AdminDataTable() {
    
    const tickets = useSelector((store) => store.ticket);
    console.log(tickets);

    //the details header is a placeholder until we decide exactly how we want to handle the 
//onClick to see report details page
const columns = [
    { field: 'id', headerName: 'Report #', width: 70 },
    { field: 'category', headerName: 'Category', width: 100 },
    { field: 'subcategory', headerName: 'Subcategory', width: 140 },
    { field: 'date', headerName: 'Date', width: 100 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'description', headerName: 'Details', width: 70 }
];

    const handleDetails = () => {
        console.log('report clicked');
    }

    //This component will need to be updated with a .map to display DB information
    //on all tickets
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid sx={{ m: 2 }}
                rows={tickets} onRowClick={handleDetails}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}
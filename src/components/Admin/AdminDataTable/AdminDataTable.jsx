import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux";




export default function AdminDataTable() {
    
    const tickets = useSelector((store) => store.ticket);
    console.log(tickets);

    //the details header is a placeholder until we decide exactly how we want to handle the 
//onClick to see report details page
const columns = [
    { field: 'id', headerName: 'Report #', width: 70 },
    { field: 'Category', headerName: 'Category', width: 100 },
    { field: 'Subcategory', headerName: 'Subcategory', width: 140 },
    { field: 'Date', headerName: 'Date', width: 100 },
    {
        field: 'Comments', headerName: 'Comments', description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160
    },
    { field: 'Status', headerName: 'Status', width: 100 },
    { field: 'Details', headerName: 'Details', width: 70 }
];

//these rows are all placeholders just so we can see how everything looks
//this will need to be updated in the return with a .map once we get
//DB up and running and have some dummy data to work with.

const rows = [
    {
        id: 1, Category: 'Parking', Subcategory: 'Abandoned Vehicle',
        Date: '01/30/2023', Comments: 'PLEASE REMOVE', Status: 'Dispatched'
    },
    {
        id: 2, Category: 'Parking', Subcategory: 'Abandoned Vehicle',
        Date: '01/30/2023', Comments: 'still not removed', Status: 'In Progress'
    },
    {
        id: 3, Category: 'Parking', Subcategory: 'Abandoned Vehicle',
        Date: '01/30/2023', Comments: 'how long is this gonna take?!', Status: 'Closed'
    },
    {
        id: 4, Category: 'Parking', Subcategory: 'Abandoned Vehicle',
        Date: '01/30/2023', Comments: 'I give up', Status: 'Avengers requested'
    },
    {
        id: 5, Category: 'Parking', Subcategory: 'Abandoned Vehicle',
        Date: '01/30/2023', Comments: 'All hope is lost', Status: 'Gravedigger incoming'
    },
];

    

    const handleDetails = () => {
        console.log('report clicked');
    }

    //This component will need to be updated with a .map to display DB informatiom
    //on all tickets
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid sx={{ m: 2 }}
                rows={rows} onClick={handleDetails}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}
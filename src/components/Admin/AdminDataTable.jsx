import { DataGrid } from '@mui/x-data-grid';



const columns = [
    { field: 'id', headerName: 'Report #', width: 70 },
    { field: 'Category', headerName: 'First name', width: 130 },
    { field: 'Subcategory', headerName: 'Last name', width: 130 },
    { field: 'Date', headerName: 'Date', type: 'date', width: 90},
    { field: 'Comments', headerName: 'Comments', description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160},
    {field: 'Status', headerName: 'Status'}
];

const rows = [
    { id: 1, Category: 'Parking', Subcategory: 'Abandoned Vehicle', 
    Date: '01/30/2023', Comments: 'PLEASE REMOVE', Status: 'In Progress'},
    { id: 2, Category: 'Parking', Subcategory: 'Abandoned Vehicle', 
    Date: '01/30/2023', Comments: 'PLEASE REMOVE', Status: 'In Progress'},
    { id: 3, Category: 'Parking', Subcategory: 'Abandoned Vehicle', 
    Date: '01/30/2023', Comments: 'PLEASE REMOVE', Status: 'In Progress'},
    { id: 4, Category: 'Parking', Subcategory: 'Abandoned Vehicle', 
    Date: '01/30/2023', Comments: 'PLEASE REMOVE', Status: 'In Progress'},
    { id: 5, Category: 'Parking', Subcategory: 'Abandoned Vehicle', 
    Date: '01/30/2023', Comments: 'PLEASE REMOVE', Status: 'In Progress'},
];



export default function AdminDataTable() {

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    {field : 'userId', headerName : 'UserID', width : 90},
    {field : 'id', headerName : 'ID', width : 90},
    {field : 'title', headerName : 'Title', width : 300},
    {field : 'completed', headerName : 'Completed', width : 150},
];

const columnsComments = [
    {field : 'postId', headerName : 'PostID', width : 90},
    {field : 'id', headerName : 'ID', width : 90},
    {field : 'name', headerName : 'Name', width : 150},
    {field : 'email', headerName : 'Email', width : 200},
    {field : 'body', headerName : 'Body', width : 300},
]

function Table() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => setData(json))

    }, [])
  return (
    <div>
    <div style={{ height: 650, width: '100%' }}>
      <DataGrid
       rows={data}
       columns={columnsComments}
       pageSize={10}   
       rowsPerPageOptions={[5]}
       checkboxSelection
     />
     

</div></div>
  )
}


export default Table
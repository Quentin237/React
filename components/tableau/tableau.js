import React, { Component } from 'react';
//import Box from '@mui/material/Box';
//import { DataGrid } from '@mui/x-data-grid';
const users = require('../tableau/users.json');

export class Table extends Component {
  render() {
      return (
        <>
            <div>
              <table border="3">
                <tbody>
                  <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>          
                  </tr>
                  {users.users.map((item, i) => (
                      <tr key={i}>
                          <td>{item.name}</td>
                          <td>{item.phone}</td>
                          <td><a href={"mailto:"+item.email}>{item.email}</a></td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </>
    )
  }
}

export default Table





/*
const columns = [
  { field: 'id', 
    headerName: 'ID', 
    width: 200 },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 200,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
  },
];

export default function Table() {
  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[3]}
      />
    </Box>
  );
}

*/
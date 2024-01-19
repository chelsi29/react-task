import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'ProductName', headerName: 'Product Name', width: 250 },
  { field: 'Date', headerName: 'Create at', width: 130 },
  { field: 'Price',headerName: 'Price',type: 'number',width: 90},
  { field: 'Date',headerName: 'Publish',width: 160},
];

const rows = [
  { id: 1, Date: '10 Jan 2024', ProductName: 'Nike Air Force 1 NDESTRUKT', Price: 3500 },
  { id: 2, Date: '11 Feb 2024', ProductName: 'Foundations Matte Flip Flop', Price: 4200 },
  { id: 3, Date: '11 Feb 2023', ProductName: 'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear', Price: 4500 },
  { id: 4, Date: '11 Jan 2024', ProductName: 'AZoom Freak 2', Price: 1600 },
  { id: 5, Date: '11 Feb 2024', ProductName: 'Gazelle Vintage low-top sneakers', Price: 2000 },
  { id: 6, Date: '12 Jan 2020', ProductName: 'Jordan Delta', Price: 1500 },
  { id: 7, Date: '11 Feb 2024', ProductName: 'Rod Laver low-top sneakers', Price: 4400 },
  { id: 8, Date: '11 Feb 2024', ProductName: 'Nike Blazer Low 77 Vintage', Price: 3600 },
  { id: 9, Date: '12 Jan 2023', ProductName: 'Ultraboost 21 sneakers', Price: 6500 },
];

const product = () => {
  return (

    <div style={{ height: 400, width: '70%', marginTop: '100px',marginLeft: '300px'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>

  )
}

export default product

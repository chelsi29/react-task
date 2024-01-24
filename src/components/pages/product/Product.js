import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [editProductId, setEditProductId] = useState(null);

  useEffect(() => {
    const productData = localStorage.getItem("product");
    setData(JSON.parse(productData) || []);
  }, []);

  const handleEdit = (productId) => {
    localStorage.setItem("products", JSON.stringify(productId));
    console.log("Editing product with ID:", productId);
    setEditProductId(productId);
    navigate("/Editproduct");
  };

  const handleDelete = (productId) => {
    console.log("Deleting product with ID:", productId);

    const newData = data.map((product) => product.id !== productId);
    console.log("New data after deletion:", newData);

    setData(newData);
    localStorage.setItem("product", JSON.stringify(newData));
    console.log("Updated local storage:", localStorage.getItem("product"));
  };

  const handleAddProduct = () => {
    navigate("/addproduct");
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "text", headerName: "ProductName", width: 350 },
    { field: "amount", headerName: "Amount", type: "number", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            onClick={() => handleEdit(params.row.id)}
            style={{ marginRight: "10px" }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div
      style={{ height: 400, width: "60%", margin: "auto", marginTop: "100px" }}
    >
      <Button
        variant="contained"
        onClick={handleAddProduct}
        style={{ marginLeft: "80%", marginBottom: "20px" }}
      >
        Add Product
      </Button>
      <DataGrid
        rows={data.map((row, index) => ({ ...row, id: index + 1 }))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        disableSelectionOnClick
        disableColumnMenu
        disableColumnSelector
        disableColumnFilter
        disableColumnReorder
      />
    </div>
  );
};

export default Product;

//--------------------------------------------------------------------write code--------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom"

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "text", headerName: "ProductName", width: 350 },
//   { field: "amount", headerName: "Amount", type: "number", width: 90 },
//   {
//     field: "action",
//     headerName: "Action",
//     width: 150,
//     renderCell: (params) => (
//       <Button
//         variant="contained"
//         onClick={() => handleEdit(params.row.id)}
//         style={{ marginLeft: "20px" }}
//       >
//         Edit
//       </Button>
//     ),
//   },
// ];

// const rows = [

// ];

// const Product = () => {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate()

//   useEffect(() => {
//     const productData = localStorage.getItem("product");
//     setData(JSON.parse(productData) || []);
//   }, []);

//   const handleEdit = (productId) => {

//     navigate(`/editproduct/${productId}`);
//   };

//   return (
//     <>
//       <div style={{ height: 400, width: "60%", marginTop: "100px", marginLeft: "300px" }}>
//         <Button variant="contained" href="addproduct" style={{ marginLeft: "80%" }}>
//           Add Product
//         </Button>

//         <Button variant="contained" href="deleteproduct" style={{ marginLeft: "20px" }}>
//           Delete
//         </Button>
//         <DataGrid
//           rows={data.map((row, index) => ({ ...row, id: index + 1 }))}
//           columns={columns}
//           pageSize={10}
//           pagination
//         />
//       </div>
//     </>
//   );
// };

// export default Product;

// import React from "react";
// import SideNav from "../../dashboard/sideNav";
// import { DataGrid } from "@mui/x-data-grid";
// import Box from "@mui/material/Box";
// import { Button,TableRow, TableCell } from "@mui/material";
// import { useState } from "react";
// import { useEffect } from "react";
// // import { useNavigate } from "react-router-dom";

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "text", headerName: "ProductName", width: 350 },
//   { field: "amount", headerName: "Amount", type: "number", width: 90 },
//   // { field: "Date", headerName: "Publish", width: 160 },
//   {
//     field: "action",
//     headerName: "Action",
//     width: "150px" ,
//     renderCell: (params) => (
//       <Button
//         variant="contained"
//         href={`editproduct/${params.id}`}
//         style={{ marginLeft: "20px" }}
//       >
//         Edit
//       </Button>
//     ),
//   },
// ];

// const rows = [
//   {
//     // id: 1,
//     Date: "10 Jan 2024",
//     ProductName: "Nike Air Force 1 NDESTRUKT",
//     Price: 3500,
//   },
//   {
//     // id: 2,
//     Date: "11 Feb 2024",
//     ProductName: "Foundations Matte Flip Flop",
//     Price: 4200,
//   },
//   {
//     // id: 3,
//     Date: "11 Feb 2023",
//     ProductName: "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
//     Price: 4500,
//   },
//   { id: 4, Date: "11 Jan 2024", ProductName: "AZoom Freak 2", Price: 1600 },
//   {
//     // id: 5,
//     Date: "11 Feb 2024",
//     ProductName: "Gazelle Vintage low-top sneakers",
//     Price: 2000,
//   },
//   { id: 6, Date: "12 Jan 2020", ProductName: "Jordan Delta", Price: 1500 },
//   {
//     // id: 7,
//     Date: "11 Feb 2024",
//     ProductName: "Rod Laver low-top sneakers",
//     Price: 4400,
//   },
//   {
//     // id: 8,
//     Date: "11 Feb 2024",
//     ProductName: "Nike Blazer Low 77 Vintage",
//     Price: 3600,
//   },
//   {
//     // id: 9,
//     Date: "12 Jan 2023",
//     ProductName: "Ultraboost 21 sneakers",
//     Price: 6500,
//   },

// ];

// const Product = () => {
//   const [data, setData] = useState([]);
//   // const navigate = useNavigate();

//   useEffect(() => {
//     const productData = localStorage.getItem("product");
//     setData(JSON.parse(productData) );
//   }, []);

//   return (
//     <>
//       <div
//         style={{
//           height: 400,
//           width: "70%",
//           marginTop: "100px",
//           marginLeft: "300px",
//         }}
//       >
//         <Button
//           variant="contained"
//           href="addproduct"
//           style={{ marginLeft: "80%" }}
//         >
//           Add Product
//         </Button>

//         <Button
//           variant="contained"
//           href="deleteproduct"
//           style={{ marginLeft: "20px" }}
//         >
//           Delete
//         </Button>
//         <DataGrid
//           rows={data.map((row, index) => ({ ...row, id: index + 1 })) }
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: { page: 0, pageSize: 5 },
//             },
//           }}
//           pageSizeOptions={[5, 10]}
//           // {data.map((row) => (
//           //   <TableRow key={row.id}>
//           //     <TableCell>{row.id}</TableCell>
//           //     <TableCell>{row.name}</TableCell>
//           //     {/* Add other table cells based on your data structure */}
//           //   </TableRow>
//           // ))}

//           // checkboxSelection
//         />
//       </div>
//     </>
//   );
// };

// export default Product;

// -----------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import {
//   Table,
//   TableContainer,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Paper,
//   Button,
//   TextField,
//   TablePagination,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Typography,
// } from '@mui/material';

// const generateUniqueId = () => {
//   return new Date().getTime();
// };

// const DataTable = ({ data, onDelete, onUpdate }) => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [editedData, setEditedData] = useState({});

//   const handleEditClick = (row) => {
//     setEditedData(row);
//     setOpenDialog(true);
//   };

//   const handleUpdate = () => {
//     onUpdate(editedData);
//     setOpenDialog(false);
//   };

//   const handleCloseDialog = () => {
//     setEditedData({});
//     setOpenDialog(false);
//   };

//   return (
//     <div>
//      {/* <Paper
//           variant="outlined"
//           sx={{ my: { xs: 3, md: 20 }, p: { xs: 2, md: 3 } }}
//         > */}
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Age</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell>{row.name}</TableCell>
//                 <TableCell>{row.age}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" onClick={() => onDelete(row.id)}>Delete</Button>
//                   <Button variant="contained" onClick={() => handleEditClick(row)} style={{marginLeft:"20px"}} >Edit</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>Edit </DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Name"
//             name="name"
//             value={editedData.name || ''}
//             onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
//           />
//           <TextField
//             label="Age"
//             name="age"
//             value={editedData.age || ''}
//             onChange={(e) => setEditedData({ ...editedData, age: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button  variant="contained" onClick={handleCloseDialog}>Cancel</Button>
//           <Button variant="contained" onClick={handleUpdate}>Update</Button>
//         </DialogActions>
//       </Dialog>
//     {/* </Paper> */}
//     </div>
//   );
// };

// const CrudTable = () => {
//   const [data, setData] = useState(() => JSON.parse(localStorage.getItem('crudData')) || []);
//   const [input, setInput] = useState({ name: '', age: '' });
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleAdd = () => {
//     const newEntry = { ...input, id: generateUniqueId() };
//     setData([...data, newEntry]);
//     setInput({ name: '', age: '' });
//   };

//   const handleDelete = (id) => {
//     const newData = data.filter((entry) => entry.id !== id);
//     setData(newData);
//   };

//   const handleUpdate = (updatedData) => {
//     const updatedList = data.map((entry) =>
//       entry.id === updatedData.id ? { ...entry, ...updatedData } : entry
//     );
//     setData(updatedList);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInput((prevInput) => ({ ...prevInput, [name]: value }));
//   };

//   useEffect(() => {
//     localStorage.setItem('crudData', JSON.stringify(data));
//   }, [data]);

//   return (
//     <div>
//       <TextField label="Name" name="name" value={input.name} onChange={handleInputChange} />
//       <TextField label="Age" name="age" value={input.age} onChange={handleInputChange} />
//       <Button variant="contained" onClick={handleAdd}>
//         Add
//       </Button>

//       <Typography variant="h6" style={{ marginTop: '16px' }}>
//         Total Entries: {data.length}
//       </Typography>

//       <DataTable data={data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)} onDelete={handleDelete} onUpdate={handleUpdate} />

//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={data.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </div>
//   );
// };

// export default CrudTable;

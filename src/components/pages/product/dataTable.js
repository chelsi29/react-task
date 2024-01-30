import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Paper,
  Button,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ListItem from "./listitem";

const DataTable = ({
  data,
  input,
  setInput,
  onDelete,
  onUpdate,
  onAdd,
  onInputChange,
  filter,
  sortBy,
  sortOrder,
  onSortChange,
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditClick = (row) => {
    setInput(row);
    setIsEditing(true);
    setOpenDialog(true);
  };

  const handleUpdate = () => {
    onUpdate(input);
    setOpenDialog(false);
    setIsEditing(false);
  };

  const handleAdd = () => {
    onAdd();
    setOpenDialog(false);
    setIsEditing(true);
    setInput({});
  };

  const handleCloseDialog = () => {
    setInput({});
    setOpenDialog(false);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setInput({});
          setIsEditing(false);
          setOpenDialog(true);
        }}
        style={{ marginLeft: "60%", marginTop: "130px" }}
      >
        Add Product
      </Button>
      <TableContainer
        component={Paper}
        style={{ width: "40%", margin: "auto", marginTop: "20px" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <ListItem
                    row={row}
                    onDelete={onDelete}
                    onEditClick={handleEditClick}
                  />
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {isEditing ? "Edit Product" : "Create Product"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Product Name"
            name="name"
            value={input.name || ""}
            onChange={(e) => onInputChange(e)}
          />
          <TextField
            label="Amount"
            name="amount"
            value={input.amount || ""}
            onChange={(e) => onInputChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} variant="contained">
            Cancel
          </Button>
          <Button
            onClick={isEditing ? handleUpdate : handleAdd}
            variant="contained"
          >
            {isEditing ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DataTable;

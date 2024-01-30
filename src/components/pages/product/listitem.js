import React from "react";
import {Button,TableCell} from "@mui/material";

const ListItem = ({ row, onDelete, onEditClick }) => {
  return (
    <React.Fragment>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.amount}</TableCell>
      <TableCell>
        <Button variant="contained" onClick={() => onDelete(row.id)}>
          Delete
        </Button>
        <Button
          variant="contained"
          onClick={() => onEditClick(row)}
          style={{ marginLeft: "10px" }}
        >
          Edit
        </Button>
      </TableCell>
    </React.Fragment>
  );
};

export default ListItem;

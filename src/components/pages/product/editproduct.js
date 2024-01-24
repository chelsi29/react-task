import React, { useState, useEffect } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const Editproduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [editedProduct, setEditedProduct] = useState({
    id: "",
    text: "",
    amount: "",
  });

  useEffect(() => {
    const productData = localStorage.getItem("product");
    setData(JSON.parse(productData) || []);

    const productToEdit = data.filter(
      (item) => item.id === parseInt(productId)
    );

    if (productToEdit) {
      setEditedProduct(productToEdit);
    } else {
      navigate("/product");
    }
  }, [productId, data, navigate]);

  return (
    <div style={{ width: "60%", margin: "auto", marginTop: "100px" }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 20 }, p: { xs: 2, md: 3 } }}
      >
        <Typography variant="h5" style={{ margin: "10px" }}>
          Edit Product
        </Typography>
        <TextField
          label="Product Name"
          value={editedProduct.text}
          onChange={(e) =>
            setEditedProduct({ ...editedProduct, text: e.target.value })
          }
          style={{ float: "left", width: "50%", margin: "20px" }}
        />
        <TextField
          label="Amount"
          value={editedProduct.amount}
          onChange={(e) =>
            setEditedProduct({ ...editedProduct, amount: e.target.value })
          }
          type="number"
          style={{ width: "30%", margin: "20px" }}
        />
        <br />
        <Button
          variant="contained"
          style={{ marginTop: "20px", marginLeft: "20px" }}
        >
          Update
        </Button>
      </Paper>
    </div>
  );
};

export default Editproduct;

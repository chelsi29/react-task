import React, { useState } from "react";
import { Container, TextField, Typography, Paper } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Addproduct = () => {
  const navigate = useNavigate();
  const [text, settext] = useState("");
  const [amount, setamount] = useState("");

  const handleTextChange = (e) => {
    settext(e.target.value);
    // console.log('give reply')
  };

  const handleAmountChange = (e) => {
    setamount(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log({ text, amount });

    const product =
      localStorage.getItem("product") &&
      localStorage.getItem("product").length > 0
        ? JSON.parse(localStorage.getItem("product"))
        : [];
    localStorage.setItem(
      "product",
      JSON.stringify([...product, { text, amount }])
    );

    navigate("/product");
  };

  return (
    <>
      <div style={{ width: "60%", margin: "auto", marginTop: "100px" }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 20 }, p: { xs: 2, md: 3 } }}
        >
          <Typography variant="h5" style={{ margin: "10px" }}>
            Create New Product
          </Typography>
          <TextField
            value={text}
            onChange={(e) => handleTextChange(e)}
            label="Product Name "
            multiline
            style={{ float: "left", width: "50%", margin: "20px" }}
          />
          <div style={{}}>
            <FormControl style={{ width: "30%", margin: "20px" }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                label="amount"
                onChange={(e) => handleAmountChange(e)}
              />
            </FormControl>
          </div>

          <Button
            variant="contained"
            onClick={handleSubmit}
            href="#"
            style={{ margin: "10px", marginLeft: "20px" }}
          >
            Create
          </Button>
        </Paper>
      </div>
    </>
  );
};

export default Addproduct;

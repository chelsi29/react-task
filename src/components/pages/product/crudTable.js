import React, { useState, useEffect } from "react";
import DataTable from "./dataTable";
import ListItem from "./listitem";

const generateUniqueId = () => {
  return new Date().getTime();
};

const CrudTable = () => {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("crudData")) || []
  );
  const [input, setInput] = useState({ name: "", amount: "" });
  

  const handleAdd = () => {
    const newEntry = { ...input, id: generateUniqueId() };
    setData((prevData) => [...prevData, newEntry]);
    setInput({ name: "", amount: "" });
  };
  const handleDelete = (id) => {
    const newData = data.filter((entry) => entry.id !== id);
    setData(newData);
  };

  const handleUpdate = (updatedData) => {
    const updatedList = data.map((entry) =>
      entry.id === updatedData.id ? { ...entry, ...updatedData } : entry
    );
    setData(updatedList);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
    console.log("add value", value);
  };

  useEffect(() => {
    localStorage.setItem("crudData", JSON.stringify(data));
  }, [data]);

  return (
    <DataTable
      data={data}
      onAdd={handleAdd}
      onDelete={handleDelete}
      onUpdate={handleUpdate}
      onInputChange={handleInputChange}
      input={input}
      setInput={setInput}
    />
  );
};

export default CrudTable;

import React from "react";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import { Routes, Route } from "react-router-dom";
import SideNav from "./components/dashboard/sideNav";
import Apps from "./components/pages/apps";
import CrudTable from "./components/pages/product/crudTable";

import "./App.css";

function App() {


  return (
    <>
      {/* <Login/>  
      {/* <SignUp/>  */}
      {/* <SideNav/> */}
        
        {/* <Routes>
        <Route path="/Login" exact element={<Login />}></Route>
        </Routes>
      <div style={{ display: "flex" }}>
        <SideNav />
        </div>
      */}
      <div>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/Signup" exact element={<SignUp />}></Route>
        <Route path="/Sidenav" exact element={<SideNav />}></Route>
        <Route path="/apps" exact element={<Apps />}></Route>
        <Route path="/crudTable" exact element={<CrudTable />}></Route>
      </Routes>
      </div> 

      
    </>
  );
}

export default App;

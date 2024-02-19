import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import SideNav from "./components/dashboard/sideNav";
import Apps from "./components/pages/apps";
import CrudTable from "./components/pages/product/crudTable";
import User from "./components/headerappbar/user/user";
import Products from "./components/headerappbar/produts/products";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail && storedPassword) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (email, password) => {
    const authenticated = email === 'abc@example.com' && password === '1234';
    if (authenticated) {
      setIsLoggedIn(true);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn && <SideNav />} 
      <Routes>
        {!isLoggedIn && <Route path="/" element={<Login onLogin={handleLogin} />} />} 
        {!isLoggedIn && <Route path="/signup" element={<SignUp />} />}
        {isLoggedIn && (
          <>
            <Route path="/user" element={<User />} />
            <Route path="/products" element={<Products />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/crudTable" element={<CrudTable />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;




// import React, { useState } from "react";
// import Login from "./components/login/login";
// import SignUp from "./components/signup/signup";
// import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
// import SideNav from "./components/dashboard/sideNav";
// import Apps from "./components/pages/apps";
// import CrudTable from "./components/pages/product/crudTable";
// import User from "./components/headerappbar/user/user";
// import Products from "./components/headerappbar/produts/products";
// import "./App.css";
// import HeaderAppBar from "./components/headerappbar/headerappbar";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <>
//       {/* <Router>
//         <Routes>
//       {isLoggedIn && <Route path="/" element={<SideNav />} />}
//           <Route path="/" exact element={<Login />}></Route>
//           <Route path="/Signup" exact element={<SignUp />}></Route>
//           <Route path="/Sidenav" exact element={<SideNav />}></Route>
//           <Route path="/headerappbar" exact element={<HeaderAppBar />}></Route>
//           <Route path="/User" exact element={<User />}></Route>
//           <Route path="/Products" exact element={<Products />}></Route>
//           <Route path="/apps" exact element={<Apps />}></Route>
//           <Route path="/crudTable" exact element={<CrudTable />}></Route>
//         </Routes>
//         {!isLoggedIn && <button onClick={handleLogin}>Login</button>}
//       </Router> */}
// <BrowserRouter>
//       <Router>
//       <Routes>
//         {isLoggedIn && <Route path="/" element={<SideNav />} />}
//         <Route path="/" exact element={<SideNav />}></Route>
//           <Route path="/Signup" exact element={<SignUp />}></Route>
//           <Route path="/headerappbar" exact element={<HeaderAppBar />}></Route>
//           <Route path="/User" exact element={<User />}></Route>
//           <Route path="/Products" exact element={<Products />}></Route>
//           <Route path="/apps" exact element={<Apps />}></Route>
//           <Route path="/crudTable" exact element={<CrudTable />}></Route>
//         {/* <Route path="/" element={<Home />} /> */}
//       </Routes>
//       {/* Render login button if user is not logged in */}
//       {!isLoggedIn && <button onClick={handleLogin}>Login</button>}
//     </Router>
// </BrowserRouter>
//     </>
//   );
// }

// export default App;

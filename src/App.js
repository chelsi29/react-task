import Login from './components/login/login';
import SignUp from './components/signup/signup';
import {Routes,Route} from 'react-router-dom';
import SideNav from './components/sideNav';
// import Apps from './components/pages/apps';
import Product from './components/pages/product';
// import PrivateRoute from './components/routes/PrivateRoute';

import './App.css';

function App() {
  return (
  <>
    {/* <Login/>   */}
    {/* <SignUp/>  */}
   {/* <SideNav/> */}
   
    <Routes>
      <Route path='/' exact element={<Login/>}></Route>
      <Route path='/Signup' exact element={<SignUp/>}></Route>
      <Route path='/Sidenav' exact element={<SideNav/>}></Route>
      {/* <Route path='/apps' exact element={<Apps/>} ></Route> */}
      <Route path='/Product' exact element={<Product/>} ></Route> 
      

    </Routes>

   </>
  );
}

export default App;

import Login from './components/login/login'
import SignUp from './components/signup/signup';
import {Routes,Route} from 'react-router-dom';
// import SideNav from './components/sideNav';
// import Apps from './components/dashboard/apps';
// import Product from './components/dashboard/product';

import './App.css';

function App() {
  return (
  <>
   {/* <Login/>  */}
   {/* <SignUp/> */}
   {/* <SideNav/> */}
   
    <Routes>
      <Route path='/' exact element={<Login/>}></Route>
      <Route path='/Signup' exact element={<SignUp/>}></Route>
      {/* <Route path='/' exact element={<Apps/>} ></Route>
      <Route path='/Product' exact element={<Product/>} ></Route> */}

    </Routes>

   </>
  );
}

export default App;

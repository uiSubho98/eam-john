import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Orders from './component/Orders/Orders'
import Inventory from './component/Inventory/Inventory'
import About from './component/About/About'
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp'

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Shop></Shop>}></Route>
       <Route path='/shop' element={<Shop></Shop>}></Route>
       <Route path='/orders' element={<Orders></Orders>}></Route>
       <Route path='/inventory' element={<Inventory></Inventory>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='/about' element={<About></About>}></Route>
     </Routes>
   
    </div>
  );
}

export default App;

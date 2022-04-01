import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Orders from './component/Orders/Orders'
import Inventory from './component/Inventory/Inventory'
import About from './component/About/About'

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Shop></Shop>}></Route>
       <Route path='/shop' element={<Shop></Shop>}></Route>
       <Route path='/orders' element={<Orders></Orders>}></Route>
       <Route path='/inventory' element={<Inventory></Inventory>}></Route>
       <Route path='/about' element={<About></About>}></Route>
     </Routes>
   
    </div>
  );
}

export default App;

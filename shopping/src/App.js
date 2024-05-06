import React from 'react'
import './styles/App.css';
import Home from './components/home';
import Products from './components/Products';
import Cart from './components/cart';
import Signup from './components/signup';
import Login from './components/login';
import Profile from './components/profile';
import CheckOut from './components/checkout';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <main>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;

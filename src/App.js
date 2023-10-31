import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Cart from "./pages/Cart";


import ProductList from './test/Test';
import { ShoppingProvider, useShopping } from './test/ShoppingContext';
import Detail from './test/Detail';

function App() {
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Test" element={<ProductList/>}/>
            <Route path="/Cart" element={<Cart/>}/>

            <Route path="test/products/:productId" element={<Detail/>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ShoppingProvider>
  );
}

export default App;

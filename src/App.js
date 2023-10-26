<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
=======
import React from 'react';
import './App.css';
import MainPage from './pages/Cart'; // MainPage 컴포넌트를 임포트

function App() {
  return (
    <div className="App">
      <MainPage /> 
    </div>
>>>>>>> fbf027c17944cc3357f4e76bf31be8344b886bd2
  );
}

export default App;

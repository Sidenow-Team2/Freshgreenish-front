import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from './pages/Cart'; // MainPage 컴포넌트를 임포트

function App() {
  return (
    <Router>
    <div className="App">
       <Header />
      <MainPage /> 
      <Footer />
    </div>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';


import { Provider } from 'react-redux';
import { createContext } from 'react';


import ProductList from './test/Test';
import { ShoppingProvider, useShopping } from './test/ShoppingContext';




function App() {
  return (
    <ShoppingProvider>
      <div className="App">
        {/* from temp */}
        <ProductList/>

      </div>
    </ShoppingProvider>
  );
}

export default App;

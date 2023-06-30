
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home';
import Store from './pages/store/Store';
import CartProvider from './pages/bag/Cart';

function App() {
  return (
    <CartProvider>
    
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Store' element={<Store/>} />
      </Routes>
    </BrowserRouter>
    
    </CartProvider>
  );
}

export default App;
import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import ItemDetails from './components/products/ItemDetails';
import ProductsContainer from './components/products/ProductsContainer';

function App() {
  const [efectuarAnimacion,setEfectuarAnimacion]=useState('text-center')

  const currency = (number)=>{
    return new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(number);
  };

  return (
    <>
      <BrowserRouter>

        <Header setEfectuarAnimacion={setEfectuarAnimacion} />

        <Routes>
          <Route path='/' element={<ProductsContainer efectuarAnimacion={efectuarAnimacion} setEfectuarAnimacion={setEfectuarAnimacion} currency={currency}  />} ></Route>
          <Route path='/zapatillas/:idmarca' element={<ProductsContainer efectuarAnimacion={efectuarAnimacion} setEfectuarAnimacion={setEfectuarAnimacion} currency={currency}  />} ></Route>
          <Route path='/zapatilla/:idmarca/:idzapatilla' element={<ItemDetails currency={currency}  />} ></Route>
        </Routes>

      </BrowserRouter>
      
    </>
  );
}

export default App;

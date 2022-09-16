import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/cart/Cart';
import GenericContext from './components/context/GenericContext';
import Header from './components/header/Header';
import ItemDetails from './components/products/ItemDetails';
import ProductsContainer from './components/products/ProductsContainer';

function App() {
  

  return (
    <>
      <GenericContext>
        <BrowserRouter>
        
          <Header />
        
          <Routes>
            <Route path='/' element={<ProductsContainer />} ></Route>
            <Route path='/zapatillas/:idmarca' element={<ProductsContainer />} ></Route>
            <Route path='/zapatilla/:idmarca/:idzapatilla' element={<ItemDetails />} ></Route>
            <Route path='/cart' element={<Cart/>} ></Route>
          </Routes>
        
        </BrowserRouter>
      </GenericContext>
      
    </>
  );
}

export default App;

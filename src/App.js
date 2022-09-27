import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/cart/Cart';
import Checkout from './components/cart/Checkout';
import ViewPurchase from './components/cart/ViewPurchase';
import GenericContext from './components/context/GenericContext';
import Header from './components/header/Header';
import CleaningProducts from './components/products/CleaningProducts';
import ItemDetails from './components/products/ItemDetails';


function App() {
  

  return (
    <>
      <GenericContext>
        <BrowserRouter>
        
          <Header />
        
          <Routes>
            <Route path='/' element={<CleaningProducts/>} ></Route>
            <Route path='/zapatillas/:idmarca' element={<CleaningProducts />} ></Route>
            <Route path='/zapatilla/:idmarca/:idzapatilla' element={<ItemDetails />} ></Route>
            <Route path='/cart' element={<Cart/>} ></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/ver-compras' element={<ViewPurchase/>}></Route>
          </Routes>
        
        </BrowserRouter>
      </GenericContext>
      
    </>
  );
}

export default App;

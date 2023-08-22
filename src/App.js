import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './store/reducers/ui';
import { generateProductData } from './constrains/product';
import Products from './pages/Products';
import Carts from './pages/Carts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Wishlist from './pages/Wishlist';
import Error404 from './components/Error404';
function App() {
  const { totalProduct } = useSelector((state) => state.ui);

  const dispatch = useDispatch()
  const initProducts = () => {
    dispatch(setProducts(generateProductData(12)));
  }
  useEffect(() => {
    if (totalProduct < 1)
      initProducts()
  }, [])
  return (
    <Router>
      <Header />
      <div className="container">

        <Routes>
          <Route
            path='/'
            element={
              <Products />
            }
          />
          <Route
            path='/carts'
            element={
              <Carts />
            }
          />
          <Route
            path='/wishlists'
            element={
              <Wishlist />
            }
          />
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

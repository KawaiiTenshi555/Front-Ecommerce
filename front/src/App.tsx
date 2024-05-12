import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Shop from "./pages/Shop";
import Categorie from './pages/Categorie';
import Checkout from './pages/Checkout';
import Error from './pages/404';
import Ordersum from './pages/OrderSummary';
import Product from './components/Products';
import ShoppingCard from './pages/ShoppingCard';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categorie" element={<Categorie />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ordersum" element={<Ordersum />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shoppingcard" element={<ShoppingCard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
export default App;
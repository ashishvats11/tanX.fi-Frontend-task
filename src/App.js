import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/auth/LoginForm';
import RegisterForm from './Components/auth/RegisterForm';
import Nav from './Components/common/Nav';
import ProductList from './Components/product/ProductList';
import ProductDetail from './Components/product/ProductDetail';

const App = () => {
  return (
    <Router>
      <Nav />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm onLoginSuccess={{/* function to handle success */}} />} />
        <Route path="/register" element={<RegisterForm onRegisterSuccess={{/* function to handle success */}} />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

// Home component that includes Nav and ProductList
const Home = () => {
  return (
    <>
      
      <ProductList />
      
    </>
  );
};

export default App;
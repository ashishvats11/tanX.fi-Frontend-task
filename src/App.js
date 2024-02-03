import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/auth/LoginForm';
import RegisterForm from './Components/auth/RegisterForm';
import Nav from './Components/common/Nav';
import ProductList from './Components/product/ProductList';
import ProductDetail from './Components/product/ProductDetail';
import { UserProvider } from './context/userContext';

const App = () => {
  return (
    <UserProvider>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      
      </Routes>
    </Router>
    </UserProvider>
  );
};


const Home = () => {
  return (
    <>
      <ProductList />
    </>
  );
};

export default App;

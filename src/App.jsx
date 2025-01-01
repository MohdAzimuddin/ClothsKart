import React from 'react';  // Fixed the import statement
import { Routes, Route } from "react-router-dom"; // Importing routing components from React Router
import Homepage from './pages/Homepage/Homepage'; 
import ProductDetails from './pages/ProductDetails/ProductDetails'; // Importing the ProductDetails component
// Importing the Cart
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import ProductList from './Components/ProductList/ProductList'; // Importing the ProductList
import OrderConfirmation from './Components/OrderConfirmation/OrderConfirmation';


// Main App component that serves as the entry point for the application
const App = () => {
  return (
    <>
      {/* Navbar component displayed on all pages */}
      <Navbar />        
      {/* Routes to manage navigation between pages */}
      <Routes>
        {/* Route for the homepage */}
        <Route path='/' element={<Homepage />} />

        {/* Add this route for the product list */}
        <Route path="/products" element={<ProductList />} /> 

        {/* Renders ProductDetails for a dynamic product ID */}
        <Route path='/product/:id' element={<ProductDetails />} />

        {/* Rendering Product Cart */}
        <Route path='/cart' element={<Cart />} />
        {/* order confirmation */}
        <Route path="/order-confirmation" element={<OrderConfirmation/>} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;

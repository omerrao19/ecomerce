// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ProductsProvider } from './context/ProductsContext';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';

// Import CSS - Make sure this path is correct
import './styles/global.css';

function App() {
    return (
        <AuthProvider>
            <ProductsProvider>
                <CartProvider>
                    <Router>
                        <div className="App">
                            <Navbar />
                            <main className="main-content">
                                <Routes>
                                    {/* Public Routes */}
                                    <Route path="/" element={<Home />} />
                                    <Route path="/products" element={<Products />} />
                                    <Route path="/products/:id" element={<ProductDetail />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/contact" element={<Contact />} />
                                    <Route path="/cart" element={<Cart />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/register" element={<Register />} />

                                    {/* Protected Routes */}
                                    <Route
                                        path="/checkout"
                                        element={
                                            <ProtectedRoute>
                                                <Checkout />
                                            </ProtectedRoute>
                                        }
                                    />

                                    {/* 404 Page */}
                                    <Route path="*" element={<div className="container">Page Not Found</div>} />
                                </Routes>
                            </main>
                            <Footer />
                        </div>
                    </Router>
                </CartProvider>
            </ProductsProvider>
        </AuthProvider>
    );
}

export default App;
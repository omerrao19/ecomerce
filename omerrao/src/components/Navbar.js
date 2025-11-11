// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const { currentUser, logout } = useAuth();
    const { getCartItemsCount } = useCart();

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-brand">
                    <Link to="/">🛍️ OmerRao Store</Link>
                </div>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="nav-actions">
                    <Link to="/cart" className="cart-link">
                        🛒 Cart ({getCartItemsCount()})
                    </Link>

                    {currentUser ? (
                        <div className="user-menu">
                            <span className="welcome-text">Hello, {currentUser.name}</span>
                            <button onClick={logout} className="btn-logout">Logout</button>
                        </div>
                    ) : (
                        <div className="auth-links">
                            <Link to="/login" className="btn-login">Login</Link>
                            <Link to="/register" className="btn-register">Register</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
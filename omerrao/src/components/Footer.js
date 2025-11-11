// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content container">
                <div className="footer-section">
                    <h3>🛍️ OmerRao Store</h3>
                    <p>Your trusted online shopping destination for quality products at great prices.</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><Link to="/shipping">Shipping Info</Link></li>
                        <li><Link to="/returns">Returns</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <p>📧 contact@omerrao.com</p>
                    <p>📞 (555) 123-4567</p>
                    <p>📍 123 Commerce St, City, State</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2024 OmerRao Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
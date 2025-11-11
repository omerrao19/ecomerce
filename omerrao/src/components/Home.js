// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to OmerRao Store</h1>
                    <p className="hero-subtitle">Discover amazing products at great prices</p>
                    <Link to="/products" className="btn btn-primary hero-cta">
                        Shop Now
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="features container">
                <div className="feature-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🚚</div>
                        <h3>Free Shipping</h3>
                        <p>Free shipping on orders over $50</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Secure Payment</h3>
                        <p>Your payment information is safe with us</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">↩️</div>
                        <h3>Easy Returns</h3>
                        <p>30-day return policy for all items</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📞</div>
                        <h3>24/7 Support</h3>
                        <p>Get help whenever you need it</p>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="featured-products container">
                <h2 className="section-title">Featured Products</h2>
                <div className="products-grid">
                    <div className="product-card placeholder">
                        <p>Featured products coming soon...</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
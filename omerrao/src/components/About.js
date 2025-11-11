// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-hero">
                <div className="container">
                    <h1>About OmerRao Store</h1>
                    <p>Your trusted partner in online shopping</p>
                </div>
            </div>

            <div className="container">
                <div className="about-content">
                    <section className="about-section">
                        <h2>Our Story</h2>
                        <p>
                            Founded in 2024, OmerRao Store began as a small passion project with a big vision:
                            to create an online shopping experience that puts customers first. We believe that
                            everyone deserves access to quality products at fair prices, delivered with
                            exceptional service.
                        </p>
                    </section>

                    <section className="about-section">
                        <h2>Our Mission</h2>
                        <p>
                            To revolutionize online shopping by providing a seamless, secure, and enjoyable
                            experience for every customer. We're committed to offering carefully curated
                            products, competitive pricing, and outstanding customer support.
                        </p>
                    </section>

                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">⭐</div>
                            <h3>Quality First</h3>
                            <p>We meticulously select every product to ensure it meets our high standards.</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">💝</div>
                            <h3>Customer Focused</h3>
                            <p>Your satisfaction is our top priority. We're here to make you happy.</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🚀</div>
                            <h3>Fast Delivery</h3>
                            <p>We work hard to get your orders to you as quickly as possible.</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🛡️</div>
                            <h3>Secure Shopping</h3>
                            <p>Your privacy and security are protected with every transaction.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
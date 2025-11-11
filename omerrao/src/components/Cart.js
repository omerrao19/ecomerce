// src/components/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const { currentUser } = useAuth();

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty container">
                <div className="empty-cart-icon">🛒</div>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any items to your cart yet.</p>
                <Link to="/products" className="btn btn-primary">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-page container">
            <h1 className="page-title">Shopping Cart</h1>

            <div className="cart-content">
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="item-image">
                                <img src={item.image} alt={item.name} />
                            </div>

                            <div className="item-details">
                                <h3 className="item-name">{item.name}</h3>
                                <p className="item-category">{item.category}</p>
                                <div className="item-price">${item.price}</div>
                            </div>

                            <div className="quantity-controls">
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="quantity-btn"
                                    disabled={item.quantity <= 1}
                                >
                                    −
                                </button>
                                <span className="quantity-display">{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="quantity-btn"
                                >
                                    +
                                </button>
                            </div>

                            <div className="item-total">
                                ${(item.price * item.quantity).toFixed(2)}
                            </div>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="remove-btn"
                                title="Remove item"
                            >
                                🗑️
                            </button>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <div className="summary-card">
                        <h3>Order Summary</h3>

                        <div className="summary-row">
                            <span>Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
                            <span>${getCartTotal().toFixed(2)}</span>
                        </div>

                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>{getCartTotal() > 50 ? 'Free' : '$9.99'}</span>
                        </div>

                        <div className="summary-row">
                            <span>Tax</span>
                            <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-row total">
                            <span>Total</span>
                            <span>
                                ${(getCartTotal() + (getCartTotal() > 50 ? 0 : 9.99) + (getCartTotal() * 0.08)).toFixed(2)}
                            </span>
                        </div>

                        {getCartTotal() < 50 && (
                            <div className="shipping-notice">
                                🚚 Add ${(50 - getCartTotal()).toFixed(2)} more for free shipping!
                            </div>
                        )}

                        <div className="checkout-actions">
                            {currentUser ? (
                                <Link to="/checkout" className="btn btn-checkout">
                                    Proceed to Checkout
                                </Link>
                            ) : (
                                <Link to="/login" className="btn btn-checkout">
                                    Login to Checkout
                                </Link>
                            )}

                            <button onClick={clearCart} className="btn btn-clear-cart">
                                Clear Cart
                            </button>

                            <Link to="/products" className="continue-shopping">
                                ← Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
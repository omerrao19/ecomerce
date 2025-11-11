// src/components/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductsContext';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { getProductById } = useProducts();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        const productData = getProductById(id);
        setProduct(productData);
    }, [id, getProductById]);

    const handleAddToCart = () => {
        addToCart(product, quantity);
        alert('Product added to cart!');
    };

    if (!product) {
        return (
            <div className="product-detail-loading container">
                <div className="loading-spinner"></div>
                <p>Loading product...</p>
            </div>
        );
    }

    return (
        <div className="product-detail container">
            <button onClick={() => navigate(-1)} className="back-button">
                ← Back to Products
            </button>

            <div className="product-detail-content">
                <div className="product-images">
                    <div className="main-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                </div>

                <div className="product-info">
                    <h1 className="product-title">{product.name}</h1>
                    <p className="product-category">{product.category}</p>
                    <div className="product-price">${product.price}</div>

                    <div className="product-description">
                        <p>{product.description}</p>
                    </div>

                    <div className="product-meta">
                        <div className="stock-info">
                            <span className={`stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                            </span>
                        </div>
                    </div>

                    <div className="purchase-section">
                        <div className="quantity-selector">
                            <label htmlFor="quantity">Quantity:</label>
                            <input
                                id="quantity"
                                type="number"
                                min="1"
                                max={product.stock}
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className="quantity-input"
                            />
                        </div>

                        <div className="action-buttons">
                            <button
                                onClick={handleAddToCart}
                                className="btn btn-add-to-cart"
                                disabled={product.stock === 0}
                            >
                                Add to Cart
                            </button>

                            <button
                                onClick={() => {
                                    addToCart(product, quantity);
                                    navigate('/cart');
                                }}
                                className="btn btn-buy-now"
                                disabled={product.stock === 0}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="product-features">
                        <div className="feature">
                            <span className="feature-icon">🚚</span>
                            <span>Free shipping on orders over $50</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">↩️</span>
                            <span>30-day return policy</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🔒</span>
                            <span>Secure checkout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
// src/components/Products.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductsContext';
import './Products.css';

const Products = () => {
    const { products } = useProducts();
    const { addToCart } = useCart();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = [...new Set(products.map(p => p.category))];

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="products-page container">
            <h1 className="page-title">Our Products</h1>

            {/* Search and Filter */}
            <div className="products-controls">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>

                <div className="filter-box">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="category-select"
                    >
                        <option value="">All Categories</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Products Count */}
            <div className="products-count">
                Showing {filteredProducts.length} of {products.length} products
            </div>

            {/* Products Grid */}
            <div className="products-grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="product-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-category">{product.category}</p>
                            <p className="product-description">{product.description}</p>
                            <div className="product-price">${product.price}</div>
                            <div className="product-actions">
                                <Link to={`/products/${product.id}`} className="btn btn-view-details">
                                    View Details
                                </Link>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="btn btn-add-to-cart"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
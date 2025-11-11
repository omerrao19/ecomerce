// src/context/ProductsContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductsContext = createContext();

export function useProducts() {
    return useContext(ProductsContext);
}

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock products data - replace with actual API call
        const mockProducts = [
            {
                id: 1,
                name: 'Wireless Bluetooth Headphones',
                price: 99.99,
                category: 'Electronics',
                image: 'https://via.placeholder.com/300x300/007bff/ffffff?text=Headphones',
                description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
                stock: 15
            },
            {
                id: 2,
                name: 'Smart Watch Series 5',
                price: 199.99,
                category: 'Electronics',
                image: 'https://via.placeholder.com/300x300/28a745/ffffff?text=Smart+Watch',
                description: 'Feature-rich smartwatch with heart rate monitoring and GPS.',
                stock: 8
            },
            {
                id: 3,
                name: 'Laptop Backpack',
                price: 49.99,
                category: 'Accessories',
                image: 'https://via.placeholder.com/300x300/ffc107/000000?text=Backpack',
                description: 'Durable laptop backpack with multiple compartments and USB charging port.',
                stock: 20
            },
            {
                id: 4,
                name: 'Phone Case',
                price: 19.99,
                category: 'Accessories',
                image: 'https://via.placeholder.com/300x300/dc3545/ffffff?text=Phone+Case',
                description: 'Protective phone case with shock absorption and sleek design.',
                stock: 50
            },
            {
                id: 5,
                name: 'Mechanical Keyboard',
                price: 79.99,
                category: 'Electronics',
                image: 'https://via.placeholder.com/300x300/6f42c1/ffffff?text=Keyboard',
                description: 'RGB mechanical keyboard with customizable keys and fast response time.',
                stock: 12
            },
            {
                id: 6,
                name: 'Wireless Mouse',
                price: 29.99,
                category: 'Electronics',
                image: 'https://via.placeholder.com/300x300/20c997/ffffff?text=Mouse',
                description: 'Ergonomic wireless mouse with precision tracking and long battery life.',
                stock: 25
            }
        ];

        // Simulate API loading
        setTimeout(() => {
            setProducts(mockProducts);
            setLoading(false);
        }, 1000);
    }, []);

    const getProductById = (id) => {
        return products.find(product => product.id === parseInt(id));
    };

    const getProductsByCategory = (category) => {
        return products.filter(product => product.category === category);
    };

    const value = {
        products,
        loading,
        getProductById,
        getProductsByCategory
    };

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
}
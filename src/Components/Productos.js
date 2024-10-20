import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/productos')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Nuestros Productos</h1>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Products;
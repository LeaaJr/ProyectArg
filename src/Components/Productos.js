import React from 'react';
import ProductList from '../Components/ProductList';

const Products = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Nuestros Productos</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
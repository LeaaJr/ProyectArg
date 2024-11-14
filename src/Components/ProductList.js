import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ImgProd from './ImgProd';

const ProductList = ({ onShowAlert }) => {
  const [searchTerm, setSearchTerm] = useState('')

const products = [
  { 
    id: 1, 
    name: 'Yerba Canarias 1kg', 
    price: 10.99, 
    image: ImgProd.Can1kg,
    image2: ImgProd.Can1kg2,
    image3: ImgProd.Can1kg3,
    description: 'Su sabor es fuerte y amargo, y su textura es casi cremosa Producto sin agregados artificiales de conservantes ni otros productos químicos',
    stock: 3 // Cantidad disponible en stock
  },
  { 
    id: 2, 
    name: 'Yerba Canarias 500gr', 
    price: 5.99, 
    image: ImgProd.Can500g,
    image2: ImgProd.Can500g2,
    image3: ImgProd.Can500g3,
    description: 'Su sabor es fuerte y amargo, y su textura es casi cremosa Producto sin agregados artificiales de conservantes ni otros productos químicos',
    stock: 10 // Cantidad disponible en stock
  },
  { 
    id: 3, 
    name: 'Yerba Canarias Edicion Especial 1kg', 
    price: 7.99, 
    image: ImgProd.Canes1kg1,
    image2: ImgProd.Canes1kg2,
    image3: ImgProd.Canes1kg3,
    description: 'El sabor es moderadamente intenso, fino aroma, levemente ahumado y parejo, que perdura durante el tiempo de la infusión',
    stock: 10 // Cantidad disponible en stock
  },
  { 
    id: 4, 
    name: 'Yerba Playadito 500gr', 
    price: 15.99, 
    image: ImgProd.Pla5g1,
    image2: ImgProd.Pla5g2,
    image3: ImgProd.Pla5g3,
    description: 'Playadito está elaborada con palo y libre de gluten, se caracteriza por su delicioso sabor suave. Recomendado para quienes toman mate con frecuencia y prefieren sabores suaves y duraderos',
    stock: 10 // Cantidad disponible en stock
  },
  { 
    id: 5, 
    name: 'Yerba Playadito 1kg', 
    price: 15.99, 
    image: ImgProd.Pla1kg1,
    image2: ImgProd.Pla1kg2,
    image3: ImgProd.Pla1kg1,
    description: 'Playadito está elaborada con palo y libre de gluten, se caracteriza por su delicioso sabor suave. Recomendado para quienes toman mate con frecuencia y prefieren sabores suaves y duraderos',
    stock: 10 // Cantidad disponible en stock
  },
  { 
    id: 6, 
    name: 'Yerba Playadito Edición Especial 500gr', 
    price: 15.99, 
    image:  ImgProd.Plaed1,
    image2: ImgProd.Plaed2,
    image3: ImgProd.Plaed3,
    description: 'Playadito está elaborada con palo y libre de gluten, se caracteriza por su delicioso sabor suave. Recomendado para quienes toman mate con frecuencia y prefieren sabores suaves y duraderos',
    stock: 10 // Cantidad disponible en stock
  },
  { 
    id: 7, 
    name: 'Yerba Baldo 1kg', 
    price: 15.99, 
    image:  ImgProd.Balkg1,
    image2: ImgProd.Balkg2,
    image3: ImgProd.Balkg3,
    description: 'Playadito está elaborada con palo y libre de gluten, se caracteriza por su delicioso sabor suave. Recomendado para quienes toman mate con frecuencia y prefieren sabores suaves y duraderos',
    stock: 10 // Cantidad disponible en stock
  },
  { 
    id: 8, 
    name: 'Dulce de Leche Havanna', 
    price: 7.00, 
    image:  ImgProd.DdlHav1,
    image2: ImgProd.DdlHav2,
    image3: ImgProd.DdlHav3,
    description: 'Un dulce con múltiples usos, desde el desayuno, untandolo en pan o tostadas, colaciones, acompañando alguna fruta, hasta para la realización de diversos postres. Sin gluten',
    stock: 10 // Cantidad disponible en stock
  },
  { 
    id: 9, 
    name: 'Alfajor Dulce de Leche Blanco', 
    price: 0.70,
    image:  ImgProd.AddlBlan1,
    image2: ImgProd.AddlBlan2,
    image3: ImgProd.AddlBlan1,
    description: 'Alfajor compuesto por dos galletas con cacao unidas por dulce de leche y bañadas con una capa de cobertura blanca',
    stock: 10 // Cantidad disponible en stock
  },

];

const filteredProducts = products.filter(product =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
  <div className="container mx-auto px-4 py-8">
    <div className="flex justify-end mb-6 pt-16">
      <input
        type="text"
        placeholder="Buscar productos..."
        className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} onShowAlert={onShowAlert} />
      ))}
    </div>
  </div>
);
};

export default ProductList;
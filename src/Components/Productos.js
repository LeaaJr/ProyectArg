import React from 'react';
import { useParams } from 'react-router-dom';

const Productos = () => {
  const { categoria } = useParams();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Productos - {categoria}</h1>
      {/* Aquí puedes agregar la lógica para mostrar los productos según la categoría */}
      <p>Mostrando productos de la categoría: {categoria}</p>
    </div>
  );
};

export default Productos;
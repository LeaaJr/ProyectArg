import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [stockAlert, setStockAlert] = useState(null); // Estado para el alert de stock

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        // Verifica si hay suficiente stock
        if (existingProduct.quantity + product.quantity <= product.stock) {
          return prevCart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          );
        } else {
          setStockAlert('No hay suficiente stock disponible'); // Mensaje de error
          return prevCart; // No se agrega el producto
        }
      } else {
        // Si el producto no existe, agrégalo al carrito
        if (product.quantity <= product.stock) {
          return [...prevCart, product];
        } else {
          setStockAlert('No hay suficiente stock disponible'); // Mensaje de error
          return prevCart; // No se agrega el producto
        }
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === id);
      if (existingProduct) {
        if (quantity <= 0) {
          return prevCart.filter(item => item.id !== id); // Elimina el producto si la cantidad es 0
        } else if (quantity <= existingProduct.stock) {
          return prevCart.map(item =>
            item.id === id
              ? { ...item, quantity }
              : item
          );
        } else {
          setStockAlert('No hay suficiente stock disponible'); // Mensaje de error
          return prevCart; // No se actualiza la cantidad
        }
      }
      return prevCart; // Si no existe el producto, no se hace nada
    });
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, total, stockAlert, setStockAlert }}>
      {children}
    </CartContext.Provider>
  );
};
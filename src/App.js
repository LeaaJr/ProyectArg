import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CarritoPage from './Components/CarritoPage';
import ProductCards from './Components/ProductCard'; // Asegúrate de que este sea el nombre correcto
import Footer from './Components/Footer';
import { CartProvider } from './Context/CartContext';
import Alert from './Components/Alert';

function App() {
  const [alert, setAlert] = useState(null);
  const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 15 },
    { id: 3, name: 'Producto 3', price: 20 },
    { id: 4, name: 'Producto 4', price: 25 },
    { id: 5, name: 'Producto 5', price: 30 },
    { id: 6, name: 'Producto 6', price: 35 },
    // Agrega más productos según sea necesario
  ];

  const handleCloseAlert = () => {
    setAlert(null);
  };

  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {alert && <Alert message={alert.message} type={alert.type} onClose={handleCloseAlert} />}
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<ProductCards products={products} />} />
              <Route path="/carrito" element={<CarritoPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CarritoPage from './Components/CarritoPage';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import { CartProvider } from './Context/CartContext';
import Alert from './Components/Alert';
import WhatsAppButton from './Components/WhatsAppButton';

function App() {
  const [alert, setAlert] = useState(null); // Estado para la alerta

  const handleShowAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null); // Oculta el alert después de 1 segundo
    }, 1000);
  };

  const handleCloseAlert = () => {
    setAlert(null);
  };

  return (
    <CartProvider>
      <WhatsAppButton />
      <Router>
        <div className="flex flex-col min-h-screen">
          {alert && <Alert message={alert.message} type={alert.type} onClose={handleCloseAlert} />}
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<ProductList onShowAlert={handleShowAlert} />} /> {/* Pasa la función para mostrar alert */}
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
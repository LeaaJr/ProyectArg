import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CarritoPage from './Components/CarritoPage';
import Products from './Components/Productos';
import Footer from './Components/Footer';
import WhatsAppButton from './Components/WhatsAppButton';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/carrito" element={<CarritoPage />} />
          </Routes>
        </main>
        <WhatsAppButton />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
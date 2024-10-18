import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
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
            {/* Otras rutas */}
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Productos from './Components/Productos';
import Navbar from './Components/Navbar';
// Asegúrate de que la ruta de importación sea correcta

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos/:categoria" element={<Productos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
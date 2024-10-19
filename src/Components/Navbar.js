import './Style/Navbar.css';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          TuTienda
        </Link>
        <div className="navbar-links">
          {['Inicio', 'Productos', 'Carrito'].map((item) => (
            <Link
              key={item}
              to={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}
              className="navbar-link"
            >
              {item}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-button"
          aria-label="Abrir menú"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        {['Inicio', 'Productos', 'Carrito'].map((item) => (
          <Link
            key={item}
            to={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}
            className="navbar-link"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

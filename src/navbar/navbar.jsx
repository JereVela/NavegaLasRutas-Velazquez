import { Link } from 'react-router-dom';
import React from 'react';
import "./NavBar.css";
import CartWidget from '../cartwidget/cartwidget';
import Logo from './logo';

const NavBar = () => {
  return (
    <header>
      <Logo />
      <h1>HandZone</h1>

      <nav>
        <nav>
          <ul>
            <li><Link to="/catalogo">Catálogo</Link></li>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/categoria/Camisetas">Camisetas</Link></li>
            <li><Link to="/categoria/Pelotas">Pelotas</Link></li>
            <li><Link to="/categoria/Medias%20y%20Vendas">Medias y Vendas</Link></li>
            <li><Link to="/categoria/Zapatillas">Zapatillas</Link></li>
          </ul>
        </nav>

      </nav>

      <div className="carrito">
        <Link to="/carrito">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;

import React from 'react';
import '../App.css';

function NavBar() {
  return (
    <header className="navbar">
      <div className="logo">Igor<span>.Dev</span></div>
      <nav>
        <ul>
          <li><a href="#hero">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#experience">Carreira</a></li>
        </ul>
      </nav>
      <a href="https://wa.me/SEUNUMERO" target="_blank" className="btn-contact">
        Contato
      </a>
    </header>
  );
}

export default NavBar;
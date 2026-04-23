import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../App.css';

function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <header className="navbar">
      <div className="navbar__logo">
        Igor<span className="highlight">.Dev</span>
      </div>

      <button
        className="navbar__toggle"
        aria-controls="primary-navigation"
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={toggleMenu}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav>
        <ul id="primary-navigation" className={`navbar__links ${open ? "is-open" : ""}`} role="menubar">
          <li><a href="#hero">Início</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#experience">Carreira</a></li>
        </ul>
      </nav>

      <a href="https://wa.me/5541992871080" target="_blank" rel="noopener noreferrer" className="btn-contact">
        Contato
      </a>
    </header>
  );
}

export default NavBar;
import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Terminal, Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import '../App.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSettingsOpen(false);
  };

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        Igor<span className="highlight">.Dev</span>
      </div>

      <div className="navbar__actions">
        {/* Desktop Toggles (Hidden on Mobile) */}
        <div className="desktop-only-toggles">
          <div className="toggle-group">
            <button className={`toggle-btn ${theme === 'dark' ? 'active' : ''}`} onClick={() => toggleTheme('dark')}><Moon size={16}/></button>
            <button className={`toggle-btn ${theme === 'light' ? 'active' : ''}`} onClick={() => toggleTheme('light')}><Sun size={16}/></button>
            <button className={`toggle-btn ${theme === 'mono' ? 'active' : ''}`} onClick={() => toggleTheme('mono')}><Terminal size={16}/></button>
          </div>
          <div className="toggle-group">
            <button className={`toggle-btn ${language === 'pt' ? 'active' : ''}`} onClick={() => setLanguage('pt')}>PT</button>
            <button className={`toggle-btn ${language === 'en' ? 'active' : ''}`} onClick={() => setLanguage('en')}>EN</button>
            <button className={`toggle-btn ${language === 'es' ? 'active' : ''}`} onClick={() => setLanguage('es')}>ES</button>
          </div>
        </div>

        {/* Mobile Buttons */}
        <button className="mobile-toggle-btn settings-icon" onClick={toggleSettings}>
          <Settings size={24} className={settingsOpen ? 'rotating' : ''} />
        </button>

        <button className="mobile-toggle-btn" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Settings Dropdown (Vertical on Mobile) */}
      <div className={`navbar__dropdown settings-dropdown ${settingsOpen ? 'is-open' : ''}`}>
        <div className="dropdown-section">
          <span className="dropdown-label">{t('theme_label') || 'Tema'}</span>
          <div className="toggle-group-vertical">
            <button className={`toggle-btn ${theme === 'dark' ? 'active' : ''}`} onClick={() => toggleTheme('dark')}>Dark</button>
            <button className={`toggle-btn ${theme === 'light' ? 'active' : ''}`} onClick={() => toggleTheme('light')}>Light</button>
            <button className={`toggle-btn ${theme === 'mono' ? 'active' : ''}`} onClick={() => toggleTheme('mono')}>Mono</button>
          </div>
        </div>
        <div className="dropdown-section">
          <span className="dropdown-label">{t('lang_label') || 'Idioma'}</span>
          <div className="toggle-group-vertical">
            <button className={`toggle-btn ${language === 'pt' ? 'active' : ''}`} onClick={() => setLanguage('pt')}>Português</button>
            <button className={`toggle-btn ${language === 'en' ? 'active' : ''}`} onClick={() => setLanguage('en')}>English</button>
            <button className={`toggle-btn ${language === 'es' ? 'active' : ''}`} onClick={() => setLanguage('es')}>Español</button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown */}
      <nav className={`navbar__dropdown menu-dropdown ${menuOpen ? 'is-open' : ''}`}>
        <ul className="navbar__links">
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>{t('nav_start')}</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>{t('nav_projects')}</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)}>{t('nav_career')}</a></li>
        </ul>
        <a href="#contact" className="btn-contact-mobile" onClick={() => setMenuOpen(false)}>
          {t('nav_contact')}
        </a>
      </nav>

      {/* Desktop Links (Hidden on Mobile) */}
      <nav className="desktop-links">
        <ul className="navbar__links-desktop">
          <li><a href="#hero">{t('nav_start')}</a></li>
          <li><a href="#projects">{t('nav_projects')}</a></li>
          <li><a href="#experience">{t('nav_career')}</a></li>
        </ul>
        <a href="#contact" className="btn-contact">
          {t('nav_contact')}
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
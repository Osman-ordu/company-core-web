import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from '../../CThemeToggle';
import styles from './styles.module.scss';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      const mobileMenu = document.querySelector(`.${styles['c-header__mobile-menu']}`);
      mobileMenu.classList.add(styles['c-header__mobile-menu--closing']);

      setTimeout(() => {
        setMobileMenuOpen(false);
        mobileMenu.classList.remove(styles['c-header__mobile-menu--closing']);
        document.body.style.overflow = '';
      }, 100);
    } else {
      setMobileMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <header className={styles['c-header']} onClick={(e) => e.stopPropagation()}>
      <div className={styles['c-header__content']}>
        <Link to="/" className={`${styles['c-header__logo']} ${mobileMenuOpen ? styles['c-header__logo--hidden'] : ''}`}>
          ARSAGO
        </Link>
        <nav className={styles['c-header__nav-links']}>
          <NavLink to="/projeler" className={({ isActive }) => `${styles['c-header__nav-link']} ${isActive ? styles['c-header__nav-link--active'] : ''}`}>
            Projeler
          </NavLink>
          <NavLink to="/hakkimizda" className={({ isActive }) => `${styles['c-header__nav-link']} ${isActive ? styles['c-header__nav-link--active'] : ''}`}>
            Hakkımızda
          </NavLink>
          <NavLink to="/kampanyalar" className={({ isActive }) => `${styles['c-header__nav-link']} ${isActive ? styles['c-header__nav-link--active'] : ''}`}>
            Kampanyalar
          </NavLink>
          <NavLink to="/basinda-biz" className={({ isActive }) => `${styles['c-header__nav-link']} ${isActive ? styles['c-header__nav-link--active'] : ''}`}>
            Basında Biz
          </NavLink>
          <NavLink to="/is-ortagim" className={({ isActive }) => `${styles['c-header__nav-link']} ${isActive ? styles['c-header__nav-link--active'] : ''}`}>
            İş Ortağım
          </NavLink>
          <NavLink to="/iletisim" className={({ isActive }) => `${styles['c-header__nav-link']} ${isActive ? styles['c-header__nav-link--active'] : ''}`}>
            İletişim
          </NavLink>
          <div className={styles['c-header__actions']}>
            <ThemeToggle />
            <a href="tel:4440982" className={styles['c-header__phone-number']}>
              444 0 982
            </a>
          </div>
        </nav>
        <button className={`${styles['c-header__hamburger']} ${mobileMenuOpen ? styles['c-header__hamburger--open'] : ''}`} onClick={toggleMobileMenu} aria-label="Menu">
          <span className={styles['c-header__hamburger-line']}></span>
          <span className={styles['c-header__hamburger-line']}></span>
          <span className={styles['c-header__hamburger-line']}></span>
        </button>
      </div>
      {mobileMenuOpen && <div className={styles['c-header__backdrop']} onClick={toggleMobileMenu}></div>}
      <div className={`${styles['c-header__mobile-menu']} ${mobileMenuOpen ? styles['c-header__mobile-menu--open'] : ''}`}>
        <header className={styles['c-header__mobile-header']}>
          <div className={styles['c-header__mobile-content']}>
            <Link to="/" className={`${styles['c-header__mobile-logo']} ${!mobileMenuOpen ? styles['c-header__mobile-logo--hidden'] : ''}`}>
              ARSAGO
            </Link>
            <div className={styles['c-header__mobile-close-wrapper']}>
              <ThemeToggle />
              <button className={`${styles['c-header__hamburger']} ${styles['c-header__hamburger--open']}`} onClick={toggleMobileMenu} aria-label="Close menu">
                <span className={styles['c-header__hamburger-line']}></span>
                <span className={styles['c-header__hamburger-line']}></span>
                <span className={styles['c-header__hamburger-line']}></span>
              </button>
            </div>
          </div>
        </header>
        <div className={styles['c-header__mobile-nav']}>
          <NavLink to="/projeler" className={({ isActive }) => `${styles['c-header__mobile-nav-link']} ${isActive ? styles['c-header__mobile-nav-link--active'] : ''}`}>
            Projeler
          </NavLink>
          <NavLink to="/hakkimizda" className={({ isActive }) => `${styles['c-header__mobile-nav-link']} ${isActive ? styles['c-header__mobile-nav-link--active'] : ''}`}>
            Hakkımızda
          </NavLink>
          <NavLink to="/kampanyalar" className={({ isActive }) => `${styles['c-header__mobile-nav-link']} ${isActive ? styles['c-header__mobile-nav-link--active'] : ''}`}>
            Kampanyalar
          </NavLink>
          <NavLink to="/basinda-biz" className={({ isActive }) => `${styles['c-header__mobile-nav-link']} ${isActive ? styles['c-header__mobile-nav-link--active'] : ''}`}>
            Basında Biz
          </NavLink>
          <NavLink to="/is-ortagim" className={({ isActive }) => `${styles['c-header__mobile-nav-link']} ${isActive ? styles['c-header__mobile-nav-link--active'] : ''}`}>
            İş Ortağım
          </NavLink>
          <NavLink to="/iletisim" className={({ isActive }) => `${styles['c-header__mobile-nav-link']} ${isActive ? styles['c-header__mobile-nav-link--active'] : ''}`}>
            İletişim
          </NavLink>
          <a href="tel:4440982" className={`${styles['c-header__mobile-nav-link']} ${styles['c-header__mobile-phone']}`}>
            <span>444 0 982</span>
          </a>

          <div className={styles['c-header__mobile-contact']}>
            <h3 className={styles['c-header__mobile-contact-title']}>Bize Ulaşın</h3>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>Merkez Ofis:</h4>
              <p className={styles['c-header__mobile-contact-text']}>Maslak Polaris Plaza, Ahi Evran Cad. No:21 Kat:17 34398 Sarıyer/İstanbul</p>
            </div>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>Çağrı Merkezi:</h4>
              <p className={styles['c-header__mobile-contact-text']}>444 09 82</p>
            </div>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>WhatsApp Destek Hattı:</h4>
              <p className={styles['c-header__mobile-contact-text']}>+90 (850) 811 97 77</p>
            </div>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>E-Posta Adresi:</h4>
              <p className={styles['c-header__mobile-contact-text']}>info@arsago.com.tr</p>
            </div>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>Çalışma Günleri:</h4>
              <p className={styles['c-header__mobile-contact-text']}>Haftanın 7 Günü</p>
            </div>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>Çalışma Saatleri:</h4>
              <p className={styles['c-header__mobile-contact-text']}>10:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

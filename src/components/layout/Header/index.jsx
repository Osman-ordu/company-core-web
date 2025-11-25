import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../../ThemeToggle';
import styles from './styles.module.scss';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      // Close menu with animation
      const mobileMenu = document.querySelector(`.${styles['c-header__mobile-menu']}`);
      mobileMenu.classList.add(styles['c-header__mobile-menu--closing']);
      
      // Wait for animation to complete before hiding
      setTimeout(() => {
        setMobileMenuOpen(false);
        mobileMenu.classList.remove(styles['c-header__mobile-menu--closing']);
        document.body.style.overflow = '';
      }, 100); // Same duration as CSS transition
    } else {
      // Open menu
      setMobileMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };


  return (
    <header className={styles['c-header']} onClick={(e) => e.stopPropagation()}>
      <div className={styles['c-header__content']}>
        <Link to="/" className={`${styles['c-header__logo']} ${mobileMenuOpen ? styles['c-header__logo--hidden'] : ''}`}>ARSAGO</Link>
        <nav className={styles['c-header__nav-links']}>
          <Link to="/projeler" className={styles['c-header__nav-link']}>Projeler</Link>
          <Link to="/hakkimizda" className={styles['c-header__nav-link']}>Hakkımızda</Link>
          <Link to="/kampanyalar" className={styles['c-header__nav-link']}>Kampanyalar</Link>
          <Link to="/basinda-biz" className={styles['c-header__nav-link']}>Basında Biz</Link>
          <Link to="/is-ortagim" className={styles['c-header__nav-link']}>İş Ortağım</Link>
          <Link to="/iletisim" className={styles['c-header__nav-link']}>İletişim</Link>
          <div className={styles['c-header__actions']}>
            <ThemeToggle />
            <a href="tel:4440982" className={styles['c-header__phone-number']}>444 0 982</a>
          </div>
        </nav>
        <button 
          className={`${styles['c-header__hamburger']} ${mobileMenuOpen ? styles['c-header__hamburger--open'] : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span className={styles['c-header__hamburger-line']}></span>
          <span className={styles['c-header__hamburger-line']}></span>
          <span className={styles['c-header__hamburger-line']}></span>
        </button>
      </div>
      {mobileMenuOpen && <div className={styles['c-header__backdrop']} onClick={toggleMobileMenu}></div>}
      <div className={`${styles['c-header__mobile-menu']} ${mobileMenuOpen ? styles['c-header__mobile-menu--open'] : ''}`}>
        <header className={styles['c-header__mobile-header']}>
          <div className={styles['c-header__mobile-content']}>
            <Link to="/" className={`${styles['c-header__mobile-logo']} ${!mobileMenuOpen ? styles['c-header__mobile-logo--hidden'] : ''}`}>ARSAGO</Link>
            <div className={styles['c-header__mobile-close-wrapper']}>
              <ThemeToggle />
              <button 
                className={`${styles['c-header__hamburger']} ${styles['c-header__hamburger--open']}`} 
                onClick={toggleMobileMenu}
                aria-label="Close menu"
              >
                <span className={styles['c-header__hamburger-line']}></span>
                <span className={styles['c-header__hamburger-line']}></span>
                <span className={styles['c-header__hamburger-line']}></span>
              </button>
            </div>
          </div>
        </header>
        <div className={styles['c-header__mobile-nav']}>
          <Link to="/projeler" className={styles['c-header__mobile-nav-link']}>Projeler</Link>
          <Link to="/hakkimizda" className={styles['c-header__mobile-nav-link']}>Hakkımızda</Link>
          <Link to="/kampanyalar" className={styles['c-header__mobile-nav-link']}>Kampanyalar</Link>
          <Link to="/basinda-biz" className={styles['c-header__mobile-nav-link']}>Basında Biz</Link>
          <Link to="/is-ortagim" className={styles['c-header__mobile-nav-link']}>İş Ortağım</Link>
          <Link to="/iletisim" className={styles['c-header__mobile-nav-link']}>İletişim</Link>
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


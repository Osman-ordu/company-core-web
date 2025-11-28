import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBuilding, FaInfoCircle, FaTag, FaNewspaper, FaHandshake, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaCalendarAlt, FaClock } from 'react-icons/fa';
import ThemeToggle from '../../CThemeToggle';
import styles from './styles.module.scss';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  const closeMobileMenu = () => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      mobileMenuRef.current.classList.add(styles['c-header__mobile-menu--closing']);

      setTimeout(() => {
        setMobileMenuOpen(false);
        if (mobileMenuRef.current) {
          mobileMenuRef.current.classList.remove(styles['c-header__mobile-menu--closing']);
        }
        document.body.style.overflow = '';
      }, 100);
    }
  };

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    } else {
      setMobileMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      mobileMenuRef.current.classList.add(styles['c-header__mobile-menu--closing']);

      setTimeout(() => {
        setMobileMenuOpen(false);
        if (mobileMenuRef.current) {
          mobileMenuRef.current.classList.remove(styles['c-header__mobile-menu--closing']);
        }
        document.body.style.overflow = '';
      }, 100);
    }
  }, [location.pathname]);

  return (
    <header className={styles['c-header']} onClick={(e) => e.stopPropagation()}>
      <div className={styles['c-header__content']}>
        <Link to="/" className={`${styles['c-header__logo']} ${mobileMenuOpen ? styles['c-header__logo--hidden'] : ''}`} onClick={closeMobileMenu}>
          ArsaLife
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
      <div ref={mobileMenuRef} className={`${styles['c-header__mobile-menu']} ${mobileMenuOpen ? styles['c-header__mobile-menu--open'] : ''}`}>
        <header className={styles['c-header__mobile-header']}>
          <div className={styles['c-header__mobile-content']}>
            <Link to="/" className={`${styles['c-header__mobile-logo']} ${!mobileMenuOpen ? styles['c-header__mobile-logo--hidden'] : ''}`} onClick={closeMobileMenu}>
              ArsaLife
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
          <NavLink to="/projeler" className={({ isActive }) => `${styles['c-header__mobile-nav-link']} ${isActive ? styles['c-header__mobile-nav-link--active'] : ''}`} onClick={closeMobileMenu}>
            <FaBuilding className={styles['c-header__mobile-nav-icon']} />
            Projeler
          </NavLink>
          <NavLink to="/hakkimizda" className={({ isActive }) => `${styles['c-header__mobile-nav-link']} ${isActive ? styles['c-header__mobile-nav-link--active'] : ''}`} onClick={closeMobileMenu}>
            <FaInfoCircle className={styles['c-header__mobile-nav-icon']} />
            Hakkımızda
          </NavLink>
          <NavLink to="/kampanyalar" className={({ isActive }) => `${styles['c-header__mobile-nav-link']} ${isActive ? styles['c-header__mobile-nav-link--active'] : ''}`} onClick={closeMobileMenu}>
            <FaTag className={styles['c-header__mobile-nav-icon']} />
            Kampanyalar
          </NavLink>
          <NavLink to="/basinda-biz" className={({ isActive }) => `${styles['c-header__mobile-nav-link']} ${isActive ? styles['c-header__mobile-nav-link--active'] : ''}`} onClick={closeMobileMenu}>
            <FaNewspaper className={styles['c-header__mobile-nav-icon']} />
            Basında Biz
          </NavLink>
          <NavLink to="/is-ortagim" className={({ isActive }) => `${styles['c-header__mobile-nav-link']} ${isActive ? styles['c-header__mobile-nav-link--active'] : ''}`} onClick={closeMobileMenu}>
            <FaHandshake className={styles['c-header__mobile-nav-icon']} />
            İş Ortağım
          </NavLink>
          <NavLink to="/iletisim" className={({ isActive }) => `${styles['c-header__mobile-nav-link']} ${isActive ? styles['c-header__mobile-nav-link--active'] : ''}`} onClick={closeMobileMenu}>
            <FaPhone className={styles['c-header__mobile-nav-icon']} />
            İletişim
          </NavLink>
          <a href="tel:4440982" className={`${styles['c-header__mobile-nav-link']} ${styles['c-header__mobile-phone']}`} onClick={closeMobileMenu}>
            <span>444 0 982</span>
          </a>

          <div className={styles['c-header__mobile-contact']}>
            <h3 className={styles['c-header__mobile-contact-title']}>Bize Ulaşın</h3>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>
                <FaMapMarkerAlt className={styles['c-header__mobile-contact-icon']} />
                Merkez Ofis:
              </h4>
              <p className={styles['c-header__mobile-contact-text']}>Maslak Polaris Plaza, Ahi Evran Cad. No:21 Kat:17 34398 Sarıyer/İstanbul</p>
            </div>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>
                <FaPhone className={styles['c-header__mobile-contact-icon']} />
                Çağrı Merkezi:
              </h4>
              <p className={styles['c-header__mobile-contact-text']}>444 09 82</p>
            </div>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>
                <FaWhatsapp className={styles['c-header__mobile-contact-icon']} />
                WhatsApp Destek Hattı:
              </h4>
              <p className={styles['c-header__mobile-contact-text']}>+90 (850) 811 97 77</p>
            </div>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>
                <FaEnvelope className={styles['c-header__mobile-contact-icon']} />
                E-Posta Adresi:
              </h4>
              <p className={styles['c-header__mobile-contact-text']}>info@arsago.com.tr</p>
            </div>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>
                <FaCalendarAlt className={styles['c-header__mobile-contact-icon']} />
                Çalışma Günleri:
              </h4>
              <p className={styles['c-header__mobile-contact-text']}>Haftanın 7 Günü</p>
            </div>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>
                <FaClock className={styles['c-header__mobile-contact-icon']} />
                Çalışma Saatleri:
              </h4>
              <p className={styles['c-header__mobile-contact-text']}>10:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

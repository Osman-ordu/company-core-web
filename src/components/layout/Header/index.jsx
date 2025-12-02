import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBuilding, FaInfoCircle, FaTag, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaCalendarAlt, FaClock, FaNewspaper, FaHandshake } from 'react-icons/fa';
import ThemeToggle from '../../CThemeToggle';
import styles from './styles.module.scss';
import { SITE_CONFIG } from '../../../config';

// Icon mapping for menu items
const iconMap = {
  FaBuilding,
  FaInfoCircle,
  FaTag,
  FaPhone,
  FaNewspaper,
  FaHandshake,
};

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
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Route değiştiğinde mobile menüyü kapat
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <header className={styles['c-header']} onClick={(e) => e.stopPropagation()}>
      <div className={styles['c-header__content']}>
        <Link to="/" className={`${styles['c-header__logo']} ${mobileMenuOpen ? styles['c-header__logo--hidden'] : ''}`} onClick={closeMobileMenu}>
          {SITE_CONFIG.companyName}
        </Link>
        <nav className={styles['c-header__nav-links']}>
          {SITE_CONFIG.navigation.header
            .filter((item) => item.enabled)
            .map((item) => (
              <NavLink key={item.path} to={item.path} className={({ isActive }) => `${styles['c-header__nav-link']} ${isActive ? styles['c-header__nav-link--active'] : ''}`}>
                {item.label}
              </NavLink>
            ))}
          <div className={styles['c-header__actions']}>
            <ThemeToggle />
            <a href={`tel:${SITE_CONFIG.contact.phone.raw}`} className={styles['c-header__phone-number']}>
              {SITE_CONFIG.contact.phone.display}
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
              {SITE_CONFIG.companyName}
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
          {SITE_CONFIG.navigation.header
            .filter((item) => item.enabled)
            .map((item) => {
              const IconComponent = iconMap[item.icon] || FaPhone;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `${styles['c-header__mobile-nav-link']} ${isActive ? styles['c-header__mobile-nav-link--active'] : ''}`}
                  onClick={closeMobileMenu}
                >
                  <IconComponent className={styles['c-header__mobile-nav-icon']} />
                  {item.label}
                </NavLink>
              );
            })}
          <a href={`tel:${SITE_CONFIG.contact.phone.raw}`} className={`${styles['c-header__mobile-nav-link']} ${styles['c-header__mobile-phone']}`} onClick={closeMobileMenu}>
            <span>{SITE_CONFIG.contact.phone.display}</span>
          </a>

          <div className={styles['c-header__mobile-contact']}>
            <h3 className={styles['c-header__mobile-contact-title']}>Bize Ulaşın</h3>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>{SITE_CONFIG.contact.address.office.title}:</h4>
              <p className={styles['c-header__mobile-contact-text']}>
                <FaMapMarkerAlt className={styles['c-header__mobile-contact-icon']} />
                {SITE_CONFIG.contact.address.office.full}
              </p>
            </div>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>Çağrı Merkezi:</h4>
              <p className={styles['c-header__mobile-contact-text']}>
                <FaPhone className={styles['c-header__mobile-contact-icon']} />
                {SITE_CONFIG.contact.phone.display}
              </p>
            </div>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>WhatsApp Destek Hattı:</h4>
              <p className={styles['c-header__mobile-contact-text']}>
                <FaWhatsapp className={styles['c-header__mobile-contact-icon']} />
                {SITE_CONFIG.contact.whatsapp.display}
              </p>
            </div>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>E-Posta Adresi:</h4>
              <p className={styles['c-header__mobile-contact-text']}>
                <FaEnvelope className={styles['c-header__mobile-contact-icon']} />
                {SITE_CONFIG.contact.email.general}
              </p>
            </div>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>Çalışma Günleri:</h4>
              <p className={styles['c-header__mobile-contact-text']}>
                <FaCalendarAlt className={styles['c-header__mobile-contact-icon']} />
                {SITE_CONFIG.contact.workingHours.days}
              </p>
            </div>

            <div className={styles['c-header__mobile-contact-item']}>
              <h4 className={styles['c-header__mobile-contact-subtitle']}>Çalışma Saatleri:</h4>
              <p className={styles['c-header__mobile-contact-text']}>
                <FaClock className={styles['c-header__mobile-contact-icon']} />
                {SITE_CONFIG.contact.workingHours.hours}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

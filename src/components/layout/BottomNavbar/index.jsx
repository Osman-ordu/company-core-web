import React from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaPhone } from 'react-icons/fa';
import { HELP_DESK_EVENTS, BREAKPOINTS } from '../../CHelpDesk/constants';
import styles from './styles.module.scss';

const BottomNavbar = () => {
  const handleContactClick = (e) => {
    if (window.innerWidth <= BREAKPOINTS.MOBILE) {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent(HELP_DESK_EVENTS.OPEN));
    }
  };

  return (
    <nav className={styles['c-bottom-navbar']}>
      <Link to="/projeler" className={styles['c-bottom-navbar__item']}>
        <FaBuilding className={styles['c-bottom-navbar__icon']} />
        <span className={styles['c-bottom-navbar__text']}>Projeleri İncele</span>
      </Link>
      <Link to="/iletisim" className={styles['c-bottom-navbar__item']} onClick={handleContactClick}>
        <FaPhone className={styles['c-bottom-navbar__icon']} />
        <span className={styles['c-bottom-navbar__text']}>İletişime Geç</span>
      </Link>
    </nav>
  );
};

export default BottomNavbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaPhone } from 'react-icons/fa';
import styles from './styles.module.scss';

const BottomNavbar = () => {
  return (
    <nav className={styles['c-bottom-navbar']}>
      <Link to="/projeler" className={styles['c-bottom-navbar__item']}>
        <FaBuilding className={styles['c-bottom-navbar__icon']} />
        <span className={styles['c-bottom-navbar__text']}>Projeleri İncele</span>
      </Link>
      <Link to="/iletisim" className={styles['c-bottom-navbar__item']}>
        <FaPhone className={styles['c-bottom-navbar__icon']} />
        <span className={styles['c-bottom-navbar__text']}>İletişime Geç</span>
      </Link>
    </nav>
  );
};

export default BottomNavbar;


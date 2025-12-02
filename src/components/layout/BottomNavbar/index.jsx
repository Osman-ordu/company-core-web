import React from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaPhone } from 'react-icons/fa';
import { HELP_DESK_EVENTS, BREAKPOINTS } from '../../CHelpDesk/constants';
import styles from './styles.module.scss';
import { SITE_CONFIG } from '../../../config';

const iconMap = {
  FaBuilding,
  FaPhone,
};

const BottomNavbar = () => {
  const handleContactClick = (e) => {
    if (window.innerWidth <= BREAKPOINTS.MOBILE) {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent(HELP_DESK_EVENTS.OPEN));
    }
  };

  return (
    <nav className={styles['c-bottom-navbar']}>
      {SITE_CONFIG.navigation.bottomNav.map((item) => {
        const IconComponent = iconMap[item.icon];
        return (
          <Link
            key={item.path}
            to={item.path}
            className={styles['c-bottom-navbar__item']}
            onClick={item.path === SITE_CONFIG.pages.contact.path ? handleContactClick : undefined}
          >
            <IconComponent className={styles['c-bottom-navbar__icon']} />
            <span className={styles['c-bottom-navbar__text']}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavbar;

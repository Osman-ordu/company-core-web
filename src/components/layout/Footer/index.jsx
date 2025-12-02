import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { footerLocations, footerCorporate, footerInvestments } from '../../../db/General';
import { SITE_CONFIG } from '../../../config';

const Footer = () => {
  return (
    <footer className={styles['c-footer']}>
      <div className={styles['c-footer__content']}>
        <div className={styles['c-footer__section']}>
          <h3 className={styles['c-footer__title']}>{footerLocations.title}</h3>
          {footerLocations.items.map((item) => (
            <Link key={item.path} to={item.path} className={styles['c-footer__link']}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles['c-footer__section']}>
          <h3 className={styles['c-footer__title']}>{footerCorporate.title}</h3>
          {footerCorporate.items.map((item) => (
            <Link key={item.path} to={item.path} className={styles['c-footer__link']}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles['c-footer__section']}>
          <h3 className={styles['c-footer__title']}>{footerInvestments.title}</h3>
          {footerInvestments.items.map((item) => (
            <Link key={item.path} to={item.path} className={styles['c-footer__link']}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles['c-footer__section']}>
          <h3 className={styles['c-footer__contact-item-title']}>{SITE_CONFIG.navigation.footer.help.title}</h3>
          <div className={styles['c-footer__contact-info']}>
            <div className={styles['c-footer__contact-item']}>
              <span className={styles['c-footer__contact-text']}>{SITE_CONFIG.contact.email.general}</span>
            </div>
            <div className={styles['c-footer__contact-item']}>
              <span className={styles['c-footer__contact-phone']}>{SITE_CONFIG.contact.phone.display}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

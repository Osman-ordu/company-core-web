import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { SITE_CONFIG } from '../../../config';

const FooterCopyright = () => {
  return (
    <div className={styles['c-footer-copyright']}>
      <div className={styles['c-footer-copyright__container']}>
        <p className={styles['c-footer-copyright__text']}>
          © {SITE_CONFIG.copyright.year} <strong>{SITE_CONFIG.copyright.companyName}</strong> | Bu internet sitesinde yer alan tüm bilgiler ve logoya ilişkin tüm fikri mülkiyet hakları <strong>{SITE_CONFIG.copyright.rightsOwner}</strong>'na aittir.
        </p>
        <div className={styles['c-footer-copyright__links']}>
          <Link to={SITE_CONFIG.legal.kvkk.path} className={styles['c-footer-copyright__link']}>
            {SITE_CONFIG.legal.kvkk.label}
          </Link>
          <Link to={SITE_CONFIG.legal.commercialCommunication.path} className={styles['c-footer-copyright__link']}>
            {SITE_CONFIG.legal.commercialCommunication.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyright;


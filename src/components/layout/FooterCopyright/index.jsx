import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const FooterCopyright = () => {
  return (
    <div className={styles['c-footer-copyright']}>
      <div className={styles['c-footer-copyright__container']}>
        <p className={styles['c-footer-copyright__text']}>
          © 2025 <strong>Arsago</strong> | Bu internet sitesinde yer alan tüm bilgiler ve logoya ilişkin tüm fikri mülkiyet hakları <strong>GO Şirketler Grubu</strong>'na aittir.
        </p>
        <div className={styles['c-footer-copyright__links']}>
          <Link to="/kvkk" className={styles['c-footer-copyright__link']}>KVKK</Link>
          <Link to="/ticari-iletisim-izni" className={styles['c-footer-copyright__link']}>Ticari İletişim İzni</Link>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyright;


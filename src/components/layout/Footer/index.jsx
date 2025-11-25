import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles['c-footer']}>
      <div className={styles['c-footer__content']}>
        <div className={styles['c-footer__section']}>
          <h3 className={styles['c-footer__title']}>SİZE NASIL YARDIMCI OLABİLİRİZ?</h3>
          <div className={styles['c-footer__contact-info']}>
            <div className={styles['c-footer__contact-item']}>
              <span className={styles['c-footer__contact-text']}>info@arsago.com.tr</span>
            </div>
            <div className={styles['c-footer__contact-item']}>
              <span className={styles['c-footer__contact-text']}>444 0 982</span>
            </div>
          </div>
        </div>

        <div className={styles['c-footer__section']}>
          <h3 className={styles['c-footer__title']}>NERELERDEYİZ</h3>
          <Link to="/istanbul" className={styles['c-footer__link']}>İstanbul</Link>
          <Link to="/bursa" className={styles['c-footer__link']}>Bursa</Link>
          <Link to="/izmir" className={styles['c-footer__link']}>İzmir</Link>
          <Link to="/mugla" className={styles['c-footer__link']}>Muğla</Link>
          <Link to="/kirikkale" className={styles['c-footer__link']}>Kırıkkale</Link>
          <Link to="/canakkale" className={styles['c-footer__link']}>Çanakkale</Link>
          <Link to="/balikesir" className={styles['c-footer__link']}>Balıkesir</Link>
          <Link to="/tekirdag" className={styles['c-footer__link']}>Tekirdağ</Link>
        </div>

        <div className={styles['c-footer__section']}>
          <h3 className={styles['c-footer__title']}>KURUMSAL</h3>
          <Link to="/hakkimizda" className={styles['c-footer__link']}>Hakkımızda</Link>
          <Link to="/is-ortagim" className={styles['c-footer__link']}>İş Ortağım</Link>
          <Link to="/basinda-biz" className={styles['c-footer__link']}>Basında Biz</Link>
          <Link to="/blog" className={styles['c-footer__link']}>Blog</Link>
          <Link to="/sss" className={styles['c-footer__link']}>SSS</Link>
          <Link to="/iletisim" className={styles['c-footer__link']}>Bize Ulaşın</Link>
        </div>

        <div className={styles['c-footer__section']}>
          <h3 className={styles['c-footer__title']}>YATIRIMLARIMIZ</h3>
          <Link to="/kep" className={styles['c-footer__link']}>KEP - Konut Edindirme Projesi</Link>
          <Link to="/ilk-tarlam" className={styles['c-footer__link']}>İlk Tarlam</Link>
          <Link to="/villa-arsalari" className={styles['c-footer__link']}>Villa Arsaları</Link>
          <Link to="/yatirim-arsalari" className={styles['c-footer__link']}>Yatırım Arsaları</Link>
          <Link to="/koyum-projesi" className={styles['c-footer__link']}>Köyüm Projesi</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

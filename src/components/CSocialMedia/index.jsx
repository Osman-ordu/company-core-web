import React from 'react';
import styles from './styles.module.scss';
import { FaInstagram, FaSquareFacebook, FaXTwitter, FaYoutube, FaLinkedin, FaTiktok } from 'react-icons/fa6';

const CSocialMedia = () => {
  return (
    <section className={`section-container ${styles['c-social-media']}`}>
      <div className={styles['c-social-media__content-title']}>
        <h3>#arsalife</h3>
        <p>Sosyal medya hesaplarımızı takip edin!</p>
      </div>

      <div className={styles['c-social-media__content-links']}>
        <div className={styles['c-social-media__content-links-items']}></div>
        <div className={styles['c-social-media__content-links-items']}>
          <a href="https://www.instagram.com/arsago.com.tr" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={45} />
          </a>
          <a href="https://www.facebook.com/arsago.com.tr" target="_blank" rel="noopener noreferrer">
            <FaSquareFacebook size={45} />
          </a>
          <a href="https://www.x.com/arsago" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={45} />
          </a>
          <a href="https://www.x.com/arsago" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={45} />
          </a>
          <a href="https://www.x.com/arsago" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={45} />
          </a>
          <a href="https://www.x.com/arsago" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={45} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CSocialMedia;

import React from 'react';
import styles from './styles.module.scss';
import { FaInstagram, FaSquareFacebook, FaXTwitter, FaYoutube, FaLinkedin, FaTiktok } from 'react-icons/fa6';
import { SITE_CONFIG } from '../../config';

const CSocialMedia = () => {
  return (
    <section className={`section-container ${styles['c-social-media']}`}>
      <div className={styles['c-social-media__content-title']}>
        <h3>#{SITE_CONFIG.companyName}</h3>
        <p>Sosyal medya hesaplarımızı takip edin!</p>
      </div>

      <div className={styles['c-social-media__content-links']}>
        <div className={styles['c-social-media__content-links-items']}></div>
        <div className={styles['c-social-media__content-links-items']}>
          {SITE_CONFIG.socialMedia.instagram.enabled && (
            <a href={SITE_CONFIG.socialMedia.instagram.url} target="_blank" rel="noopener noreferrer">
              <FaInstagram size={45} />
            </a>
          )}
          {SITE_CONFIG.socialMedia.facebook.enabled && (
            <a href={SITE_CONFIG.socialMedia.facebook.url} target="_blank" rel="noopener noreferrer">
              <FaSquareFacebook size={45} />
            </a>
          )}
          {SITE_CONFIG.socialMedia.twitter.enabled && (
            <a href={SITE_CONFIG.socialMedia.twitter.url} target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={45} />
            </a>
          )}
          {SITE_CONFIG.socialMedia.youtube.enabled && (
            <a href={SITE_CONFIG.socialMedia.youtube.url} target="_blank" rel="noopener noreferrer">
              <FaYoutube size={45} />
            </a>
          )}
          {SITE_CONFIG.socialMedia.linkedin.enabled && (
            <a href={SITE_CONFIG.socialMedia.linkedin.url} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={45} />
            </a>
          )}
          {SITE_CONFIG.socialMedia.tiktok.enabled && (
            <a href={SITE_CONFIG.socialMedia.tiktok.url} target="_blank" rel="noopener noreferrer">
              <FaTiktok size={45} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default CSocialMedia;

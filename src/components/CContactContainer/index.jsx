import React from 'react';
import CContactForm from '../CContactForm';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import styles from './styles.module.scss';
import { SITE_CONFIG } from '../../config';

const CContactContainer = () => {
  return (
    <section className={`section-container ${styles['c-contact-container']}`}>
      <div className={styles['c-contact-container__wrapper']}>
        <div className={styles['c-contact-container__details']}>
          <h5 className={styles['c-contact-container__details-title']}>Detaylı bilgi sahibi olun.</h5>
          <div className={styles['c-contact-container__details-description']}>
            Size en uygun yatırım fırsatlarını kaçırmayın. Projelerimiz, ödeme planları ve imar süreçleri hakkında detaylı bilgi almak için formu doldurun, uzman ekibimiz sizi arasın!
          </div>
          <ul className={styles['c-contact-container__details-list']}>
            <li className={styles['c-contact-container__details-item']}>
              <span className={styles['c-contact-container__details-item-label']}>çağrı merkezi:</span>
              <span className={styles['c-contact-container__details-item-value']}>
                <FaPhone className={styles['c-contact-container__details-item-icon']} />
                {SITE_CONFIG.contact.phone.display}
              </span>
            </li>
            <li className={styles['c-contact-container__details-item']}>
              <span className={styles['c-contact-container__details-item-label']}>whatsapp destek hattı:</span>
              <span className={styles['c-contact-container__details-item-value']}>
                <FaWhatsapp className={styles['c-contact-container__details-item-icon']} />
                {SITE_CONFIG.contact.whatsapp.display}
              </span>
            </li>
            <li className={styles['c-contact-container__details-item']}>
              <span className={styles['c-contact-container__details-item-label']}>e-posta adresi:</span>
              <span className={styles['c-contact-container__details-item-value']}>
                <FaEnvelope className={styles['c-contact-container__details-item-icon']} />
                {SITE_CONFIG.contact.email.general}
              </span>
            </li>
          </ul>
        </div>
        <div className={styles['c-contact-container__form']}>
          <CContactForm
            className={styles['c-contact-container__form-form']}
            title="İletişim formu"
            description="Müşteri temsilcilerimiz ile yatırımlarınız ile ilgili görüşme sağlayarak hemen arsago ailesine katılın!"
          />
        </div>
      </div>
    </section>
  );
};

export default CContactContainer;

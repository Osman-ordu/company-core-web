import React from 'react';
import CButton from '../../../components/CButton';
import styles from './styles.module.scss';

const CampaignItem = ({ image, title, content, buttonText = 'form doldurun', reverse = false }) => {
  return (
    <div className={`${styles['c-campaign-item']} ${reverse ? styles['c-campaign-item--reverse'] : ''}`}>
      <div className={styles['c-campaign-item__image-wrapper']}>
        <img src={image} alt={title} className={styles['c-campaign-item__image']} />
      </div>
      <div className={styles['c-campaign-item__content']}>
        <h3 className={styles['c-campaign-item__title']}>{title}</h3>
        <div className={styles['c-campaign-item__text']}>{content}</div>
        <CButton type="primary" className={styles['c-campaign-item__button']}>
          {buttonText}
        </CButton>
      </div>
    </div>
  );
};

export default CampaignItem;

import React from 'react';
import CButton from '../../../components/CButton';
import styles from './styles.module.scss';
import CImg from '../../../components/CImg';
import { CAnimatedWrapper } from '../../../components/CAnimatedWrapper';

const CampaignItem = ({ image, title, content, buttonText = 'form doldurun', reverse = false }) => {
  return (
    <CAnimatedWrapper variant="scaleOpacity" delay={0.1}>
      <div className={`${styles['c-campaign-item']} ${reverse ? styles['c-campaign-item--reverse'] : ''}`}>
        <div className={styles['c-campaign-item__image-wrapper']}>
          <CImg src={image} alt={title} className={styles['c-campaign-item__image']} />
        </div>
        <div className={styles['c-campaign-item__content']}>
          <h3 className={styles['c-campaign-item__title']}>{title}</h3>
          <div className={styles['c-campaign-item__text']}>{content}</div>
          <CButton type="primary" className={styles['c-campaign-item__button']}>
            {buttonText}
          </CButton>
        </div>
      </div>
    </CAnimatedWrapper>
  );
};

export default CampaignItem;

import React from 'react';
import CImg from '../../../components/CImg';
import { features } from '../../../db/General';
import styles from './styles.module.scss';

const FeaturesSection = () => {
  return (
    <>
      <section className={styles['c-features']}>
        <div className={`section-container ${styles['c-features__wrapper']}`}>
          <div className={styles['c-features__grid']}>
            {features?.map((feature, index) => (
              <div key={index} className={styles['c-features__item']}>
                <div className={styles['c-features__icon']}>
                  <CImg src={feature.icon} alt={feature.title} />
                </div>
                <h3 className={styles['c-features__title']}>{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;

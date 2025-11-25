import React from 'react';
import CImg from '../../CImg';
import styles from './styles.module.scss';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'https://arsago.com.tr/wp-content/uploads/2025/04/zamaninda-teslim-1.svg',
      title: 'Zamanında eksiksiz teslim',
    },
    {
      icon: 'https://arsago.com.tr/wp-content/uploads/2025/04/vadeli-odeme-1.svg',
      title: 'Vadeli ödeme seçenekleri',
    },
    {
      icon: 'https://arsago.com.tr/wp-content/uploads/2025/04/search_1265775.svg',
      title: 'Güvenli ve şeffaf süreç yönetimi',
    },
    {
      icon: 'https://arsago.com.tr/wp-content/uploads/2025/04/kazanc-firsati-1.svg',
      title: 'Yatırımda alırken kazanç fırsatı',
    },
  ];

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

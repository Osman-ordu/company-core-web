import React from 'react';
import styles from './styles.module.scss';

const FeaturesSection = () => {
  const features = [
    {
      icon: '⏱️',
      title: 'ZAMANINDA EKSİKSİZ TESLİM',
    },
    {
      icon: '💰',
      title: 'VADELİ ÖDEME SEÇENEKLERİ',
    },
    {
      icon: '🔒',
      title: 'GÜVENLİ VE ŞEFFAF SÜREÇ YÖNETİMİ',
    },
    {
      icon: '📈',
      title: 'YATIRIMDA ALIRKEN KAZANÇ FIRSATI',
    },
  ];



  return (
    <>
      <section className={styles['c-features']}>
        <div className={styles['c-features__wrapper']}>
          <div className={styles['c-features__grid']}>
            {features?.map((feature, index) => (
              <div key={index} className={styles['c-features__item']}>
                <div className={styles['c-features__icon']}>{feature.icon}</div>
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


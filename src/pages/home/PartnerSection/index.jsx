import React from 'react';
import CButton from '../../../components/CButton';
import styles from './styles.module.scss';

const PartnerSection = () => {
  return (
    <section className={styles['c-partner']}>
      <div className={`section-container ${styles['c-partner__wrapper']}`}>
        <div className={styles['c-partner__content']}>
          <h3 className={styles['c-partner__title']}>İş Ortağım programıyla kazanmaya hemen başla!</h3>
          <p className={styles['c-partner__text']}>
            Arsago İş Ortağım Programı, bireysel ve kurumsal emlak danışmanlarına doğrudan ve öncelikli Arsago projelerine erişim sağlayan kârlı ve sürdürülebilir bir iş modeli sunar.
          </p>
          <CButton type="primary" to="/is-ortagim">
            Üye İş Yeri Olmak İstiyorum
          </CButton>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;

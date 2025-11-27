import React from 'react';
import CButton from '../../../components/CButton';
import CVideo from '../../../components/CVideo';
import styles from './styles.module.scss';
import { videos } from '../../../db/General';

const AboutSection = () => {
  return (
    <>
      <section className={styles['c-about']}>
        <div className={`section-container ${styles['c-about__wrapper']}`}>
          <h2 className={styles['c-about__title']}>Neden ARSAGO ?</h2>
          <div className={styles['c-about__video-container']}>
            <CVideo videoId={videos.main} className={styles['c-about__video']} />
          </div>
          <div className={styles['c-about__content']}>
            <h2 className={styles['c-about__title--desktop']}>Neden ARSAGO ?</h2>
            <p className={styles['c-about__text']}>
              Arsago, gayrimenkul yatırımına yenilikçi bir bakış sunan, arsa geliştirme ve proje üretiminde uzmanlaşmış bir yatırım şirketidir.
              <br />
              <br />
              Doğada yaşamı, şehirde kazancı mümkün kılarken; yatırımcılarına risksiz, şeffaf ve sürdürülebilir fırsatlar sunar.
              <br />
              <br />
              "İlk Tarlam" ve "KEP Konut Edindirme Projesi" gibi özgün modellerimizle, yalnızca toprak değil, gelecek de kazandırırız. Bugünün doğru yatırımıyla yarının yaşam alanlarını birlikte inşa
              ediyoruz.
            </p>
            <CButton type="primary" to="/hakkimizda">
              Hakkımızda
            </CButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;

import React from 'react';
import CButton from '../../../components/CButton';
import styles from './styles.module.scss';

const AboutSection = () => {
  const videos = {
    main: '88KbviDjZ2I', // Örnek video ID - değiştirilebilir
    secondary: 'jNQXAC9IVRw', // Örnek video ID - değiştirilebilir
    promo: '9bZkp7q19f0', // Örnek video ID - değiştirilebilir
  };

  const videoUrl = `https://www.youtube.com/embed/${videos.main}?feature=oembed&loop=1&mute=1&controls=0&autoplay=1&playlist=${videos.main}`;

  return (
    <>
      <section className={styles['c-about']}>
        <div className={`section-container ${styles['c-about__wrapper']}`}>
          <h2 className={styles['c-about__title']}>Neden ARSAGO ?</h2>
          <div className={styles['c-about__video-container']}>
            <iframe
              src={videoUrl}
              allowFullScreen
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              width="100%"
              height="100%"
              loading="lazy"
              className={styles['c-about__video']}
            ></iframe>
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

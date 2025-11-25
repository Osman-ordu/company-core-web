import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const AboutSection = () => {
  return (
    <>
      <section className={styles['c-about']}>
        <div className={`section-container ${styles['c-about__wrapper']}`}>
          <div className={styles['c-about__content']}>
            <h2 className={styles['c-about__title']}>neden arsago ?</h2>
            <p className={styles['c-about__text']}>
              Arsago, gayrimenkul yatırımına yenilikçi bir bakış sunan, arsa geliştirme ve proje üretiminde uzmanlaşmış bir yatırım şirketidir.
              <br /><br />
              Doğada yaşamı, şehirde kazancı mümkün kılarken; yatırımcılarına risksiz, şeffaf ve sürdürülebilir fırsatlar sunar.
              <br /><br />
              "İlk Tarlam" ve "KEP Konut Edindirme Projesi" gibi özgün modellerimizle, yalnızca toprak değil, gelecek de kazandırırız.
              Bugünün doğru yatırımıyla yarının yaşam alanlarını birlikte inşa ediyoruz.
            </p>
            <Link to="/hakkimizda" className={styles['c-about__button']}>Hakkımızda</Link>
          </div>
          <div className={styles['c-about__image-container']}>
            <div 
              className={styles['c-about__image']} 
              style={{ backgroundImage: 'url(https://via.placeholder.com/600x400)' }}
            />
          </div>
        </div>
      </section>

      <section className={styles['c-partner']}>
        <div className={`section-container ${styles['c-partner__wrapper']}`}>
          <div className={styles['c-partner__content']}>
            <h3 className={styles['c-partner__title']}>İş Ortağım programıyla kazanmaya hemen başla!</h3>
            <p className={styles['c-partner__text']}>
              Arsago İş Ortağım Programı, bireysel ve kurumsal emlak danışmanlarına doğrudan ve
              öncelikli Arsago projelerine erişim sağlayan kârlı ve sürdürülebilir bir iş modeli sunar.
            </p>
            <Link to="/is-ortagim" className={styles['c-partner__button']}>Üye İş Yeri Olmak İstiyorum</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;


import React from 'react';
import styles from './styles.module.scss';

const CQuadrupleArea = () => {
  const main = [
    {
      title: 'arsaysa o, arsago!',
      imageDesktop: 'https://arsago.com.tr/wp-content/uploads/2025/04/arsaysa-o-arsago-445x445.png',
      imageMobile: 'https://arsago.com.tr/wp-content/uploads/2025/04/arsaysa-o-arsago-220x220.png',
    },
  ];
  const fields = [
    {
      title: 'Doğa o, değer o',
      description: 'Toprakla başlayan yatırımız ile doğanın içinde yaşam ve yatırım fırsatları sunuyoruz!',
    },
    {
      title: 'Başlangıç o, gelecek o',
      description: 'Toprakla başlayan yatırımınız, geleceğinize kazanç, nesillerinize bırakacağınız miras sunuyoruz!',
    },
    {
      title: 'Toprak o, hayat o',
      description: 'Toprakla başlayan yatırımınız ile hayallerinizi gerçeğe dönüştürecek yatırım ekosistemini sunuyoruz!',
    },
    {
      title: 'Yatırım o, yaşam o',
      description: 'Toprakla başlayan yatırımınız ile doğadaki sakin ve huzurlu yaşamın kapılarını açıyoruz!',
    },
  ];

  const mainData = main[0];
  const leftFields = fields.slice(0, 2);
  const rightFields = fields.slice(2, 4);

  return (
    <section className={`section-container ${styles['c-quadruple-area']}`}>
      <h3 className={styles['c-quadruple-area__title']}>{mainData.title}</h3>
      <div className={styles['c-quadruple-area__content']}>
        <div className={styles['c-quadruple-area__left']}>
          {leftFields?.map((field, index) => (
            <div key={index} className={styles['c-quadruple-area__field']}>
              <h4 className={styles['c-quadruple-area__field-title']}>{field.title}</h4>
              <p className={styles['c-quadruple-area__field-description']}>{field.description}</p>
            </div>
          ))}
        </div>
        <div className={styles['c-quadruple-area__center']}>
          <picture>
            <source media="(max-width: 768px)" srcSet={mainData.imageMobile} />
            <img src={mainData.imageDesktop} alt={mainData.title} className={styles['c-quadruple-area__image']} />
          </picture>
        </div>
        <div className={styles['c-quadruple-area__right']}>
          {rightFields.map((field, index) => (
            <div key={index} className={styles['c-quadruple-area__field']}>
              <h4 className={styles['c-quadruple-area__field-title']}>{field.title}</h4>
              <p className={styles['c-quadruple-area__field-description']}>{field.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CQuadrupleArea;

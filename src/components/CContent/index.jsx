import React from 'react';
import styles from './styles.module.scss';

const CContent = () => {
  return (
    <div className={styles['c-content']}>
      <h4 className={styles['c-content__title']}>neden arsago ?</h4>
      <p className={styles['c-content__text']}>
        Arsago, gayrimenkul yatırımında uzmanlığı, şeffaflığı ve sürdürülebilirliği esas alarak hareket eden, arsa geliştirme ve proje üretiminde öncü bir markadır.
      </p>
      <p className={styles['c-content__text']}>
        Şirketimiz, yüksek değer potansiyeline sahip bölgelerde imarlı, altyapısı tamamlanmış ve yatırım odaklı projeler sunarak yatırımcılarına güvenilir ve uzun vadeli çözümler üretmektedir.
      </p>
      <p className={styles['c-content__text']}>
        Kurulduğumuz günden bu yana; “İlk Tarlam” Projesi ile doğada yatırım yapmak isteyen bireyleri doğru lokasyonlarla buluşturduk, “KEP Konut Edindirme Projesi” ile arsa yatırımını daire
        sahipliğine dönüştüren yenilikçi bir model geliştirdik, İstanbul’dan Çanakkale’ye, Balıkesir’den İzmir’e, Muğla’dan Kıbrıs’a kadar geniş bir coğrafyada projeler hayata geçirdik.
      </p>
      <p className={styles['c-content__text']}>
        Her bir Arsago projesi, detaylı analizler, bölgesel kalkınma potansiyeli, altyapı olanakları ve uzun vadeli yatırım getirisi göz önünde bulundurularak tasarlanır.
      </p>
    </div>
  );
};

export default CContent;

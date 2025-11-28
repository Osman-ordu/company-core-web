import React from 'react';
import { videos } from '../../db/General';
import CVideo from '../../components/CVideo';
import styles from './styles.module.scss';
import CTimeline from '../../components/CTimeline';
import CStats from '../../components/CStats';
import { timelineItems } from '../../db/General';
import CQuadrupleArea from '../../components/CQuadrupleArea';
import CQuadrupleTextArea from '../../components/CQuadrupleTextArea';
import CFooterBanner from '../../components/CFooterBanner';

const About = () => {
  return (
    <div className={styles['c-about']}>
      <div className={`section-container ${styles['c-about__wrapper']}`}>
        <div className={styles['c-about__video-section']}>
          <div className={styles['c-about__video-container']}>
            <CVideo videoId={videos.promo} className={styles['c-about__video']} />
          </div>
        </div>
        <div className={styles['c-about__content-wrapper']}>
          <div className={styles['c-about__content']}>
            <h4 className={styles['c-about__content-title']}>neden arsago ?</h4>
            <p className={styles['c-about__content-text']}>
              Arsago, gayrimenkul yatırımında uzmanlığı, şeffaflığı ve sürdürülebilirliği esas alarak hareket eden, arsa geliştirme ve proje üretiminde öncü bir markadır.
            </p>
            <p className={styles['c-about__content-text']}>
              Şirketimiz, yüksek değer potansiyeline sahip bölgelerde imarlı, altyapısı tamamlanmış ve yatırım odaklı projeler sunarak yatırımcılarına güvenilir ve uzun vadeli çözümler üretmektedir.
            </p>
            <p className={styles['c-about__content-text']}>
              Kurulduğumuz günden bu yana; “İlk Tarlam” Projesi ile doğada yatırım yapmak isteyen bireyleri doğru lokasyonlarla buluşturduk, “KEP Konut Edindirme Projesi” ile arsa yatırımını daire
              sahipliğine dönüştüren yenilikçi bir model geliştirdik, İstanbul’dan Çanakkale’ye, Balıkesir’den İzmir’e, Muğla’dan Kıbrıs’a kadar geniş bir coğrafyada projeler hayata geçirdik.
            </p>
            <p className={styles['c-about__content-text']}>
              Her bir Arsago projesi, detaylı analizler, bölgesel kalkınma potansiyeli, altyapı olanakları ve uzun vadeli yatırım getirisi göz önünde bulundurularak tasarlanır.
            </p>
          </div>
          <div className={styles['c-about__timeline-container']}>
            <CTimeline items={timelineItems} />
          </div>
        </div>
      </div>
      <CStats />
      <CQuadrupleArea />
      <CQuadrupleTextArea />
      <CFooterBanner />
    </div>
  );
};

export default About;

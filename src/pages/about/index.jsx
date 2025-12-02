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
import CContent from '../../components/CContent';
import { CAnimatedWrapper } from '../../components/CAnimatedWrapper';
import CMetaGenerator from '../../components/CMetaGenerator';
import { metaData } from '../../db/MetaData';

const About = () => {
  return (
    <>
      <CMetaGenerator title={metaData.about.title} description={metaData.about.description} keywords={metaData.about.keywords} path={metaData.about.path} />
      <div className={styles['c-about']}>
        <div className={`section-container ${styles['c-about__wrapper']}`}>
          <div className={styles['c-about__video-section']}>
            <div className={styles['c-about__video-container']}>
              <CVideo videoId={videos.promo} className={styles['c-about__video']} />
            </div>
          </div>
          <div className={styles['c-about__container-wrapper']}>
            <CContent />
            <CTimeline className={styles['c-about__timeline-container']} items={timelineItems} />
          </div>
        </div>
        <CStats />
        <CQuadrupleArea />
        <CAnimatedWrapper variant="scaleOpacity" delay={0.15}>
          <CQuadrupleTextArea />
        </CAnimatedWrapper>
        <CFooterBanner />
      </div>
    </>
  );
};

export default About;

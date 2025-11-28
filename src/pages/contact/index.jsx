import React from 'react';
import styles from './styles.module.scss';
import CContactContainer from '../../components/CContactContainer';
import CGoogleMap from '../../components/CGoogleMap';
import { CAnimatedWrapper } from '../../components/CAnimatedWrapper';

const Contact = () => {
  const address = ['şair necmettin halil onan blv.,', '34540 çatalca/istanbul'];
  const latitude = 41.1482831;
  const longitude = 28.4614675;

  return (
    <div className={styles['c-contact']}>
      <CAnimatedWrapper variant="scaleOpacity" delay={0.1}>
        <CGoogleMap companyName="Arsalife Gayrimenkul" companySubtitle="" address={address} latitude={latitude} longitude={longitude} />
      </CAnimatedWrapper>
      <div className={`section-container`}>
        <CAnimatedWrapper variant="scaleOpacity" delay={0.15}>
          <CContactContainer />
        </CAnimatedWrapper>
      </div>
    </div>
  );
};

export default Contact;

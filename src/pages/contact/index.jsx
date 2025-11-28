import React from 'react';
import styles from './styles.module.scss';
import CContactContainer from '../../components/CContactContainer';
import CGoogleMap from '../../components/CGoogleMap';

const Contact = () => {
  const address = ['şair necmettin halil onan blv.,', '34540 çatalca/istanbul'];
  const latitude = 41.1482831;
  const longitude = 28.4614675;

  return (
    <div className={styles['c-contact']}>
      <CGoogleMap companyName="Arsalife Gayrimenkul" companySubtitle="" address={address} latitude={latitude} longitude={longitude} />
      <div className={`section-container`}>
        <CContactContainer />
      </div>
    </div>
  );
};

export default Contact;

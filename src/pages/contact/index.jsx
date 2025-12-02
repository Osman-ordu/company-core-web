import React from 'react';
import { SITE_CONFIG } from '../../config';
import styles from './styles.module.scss';
import CContactContainer from '../../components/CContactContainer';
import CGoogleMap from '../../components/CGoogleMap';
import { CAnimatedWrapper } from '../../components/CAnimatedWrapper';
import CMetaGenerator from '../../components/CMetaGenerator';
import { metaData } from '../../db/MetaData';

const Contact = () => {
  const address = SITE_CONFIG.contact.address.map.lines;
  const latitude = SITE_CONFIG.contact.address.map.latitude;
  const longitude = SITE_CONFIG.contact.address.map.longitude;

  return (
    <>
      <CMetaGenerator title={metaData.contact.title} description={metaData.contact.description} keywords={metaData.contact.keywords} path={metaData.contact.path} />
      <div className={styles['c-contact']}>
        <CAnimatedWrapper variant="scaleOpacity" delay={0.1}>
          <CGoogleMap companyName={`${SITE_CONFIG.companyName} Gayrimenkul`} companySubtitle="" address={address} latitude={latitude} longitude={longitude} />
        </CAnimatedWrapper>
        <div className={`section-container`}>
          <CAnimatedWrapper variant="scaleOpacity" delay={0.15}>
            <CContactContainer />
          </CAnimatedWrapper>
        </div>
      </div>
    </>
  );
};

export default Contact;

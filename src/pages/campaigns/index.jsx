import React from 'react';
import CampaignItem from './Components/CampaignItem';
import { campaigns } from '../../db/General';
import styles from './styles.module.scss';

const Campaigns = () => {
  return (
    <section className={styles['c-campaigns']}>
      <div className={`section-container ${styles['c-campaigns__wrapper']}`}>
        <div className={styles['c-campaigns__list']}>
          {campaigns?.map((campaign, index) => (
            <CampaignItem key={index} image={campaign.image} title={campaign.title} content={campaign.content} buttonText={campaign.buttonText} reverse={campaign.reverse} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaigns;

import React from 'react';
import styles from './styles.module.scss';

const CGoogleMap = ({ companyName = '', companySubtitle = '', address = [], latitude = 0, longitude = 0 }) => {
  const fullAddress = address.join(', ');
  const encodedAddress = encodeURIComponent(fullAddress);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  const embedUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=tr&z=15&output=embed`;

  return (
    <section className={styles['c-google-map']}>
      <div className={styles['c-google-map__map']}>
        <iframe src={embedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${companyName} Location`}></iframe>
      </div>
      <div className={styles['c-google-map__info-box']}>
        <div className={styles['c-google-map__info-content']}>
          <h3 className={styles['c-google-map__company-name']}>{companyName}</h3>
          <p className={styles['c-google-map__company-subtitle']}>{companySubtitle}</p>
          <div className={styles['c-google-map__address']}>
            {address.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={styles['c-google-map__directions-link']}>
            yol tarifi alın
          </a>
        </div>
      </div>
    </section>
  );
};

export default CGoogleMap;

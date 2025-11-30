import React from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa6';
import styles from './styles.module.scss';
import { ICON_SIZES } from './constants';

const ACTION_ITEMS = [
  {
    id: 'whatsapp',
    icon: FaWhatsapp,
    title: 'Whatsapp Hattı',
    subtitle: 'Hemen iletişim kurun',
    handler: 'handleWhatsApp',
  },
  {
    id: 'phone',
    icon: FaPhone,
    title: 'Bizi arayın',
    subtitle: 'Destek hattımızı arayın',
    handler: 'handlePhone',
  },
  {
    id: 'email',
    icon: FaEnvelope,
    title: 'E-Posta Gönderin',
    subtitle: 'E-posta gönderin',
    handler: 'handleEmail',
  },
];

const HelpDeskActions = ({ contactActions }) => {
  return (
    <>
      {ACTION_ITEMS.map((item) => {
        const Icon = item.icon;
        const handleClick = contactActions[item.handler];

        return (
          <button
            key={item.id}
            className={styles['c-help-desk__action']}
            onClick={handleClick}
            type="button"
            aria-label={item.title}
          >
            <div className={styles['c-help-desk__action-icon']} aria-hidden="true">
              <Icon size={ICON_SIZES.ACTION} />
            </div>
            <div className={styles['c-help-desk__action-text']}>
              <span className={styles['c-help-desk__action-title']}>{item.title}</span>
              <span className={styles['c-help-desk__action-subtitle']}>{item.subtitle}</span>
            </div>
          </button>
        );
      })}
    </>
  );
};

export default HelpDeskActions;


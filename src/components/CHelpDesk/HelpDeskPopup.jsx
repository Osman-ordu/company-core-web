import React from 'react';
import { FaX } from 'react-icons/fa6';
import HelpDeskActions from './HelpDeskActions';
import styles from './styles.module.scss';
import { ICON_SIZES } from './constants';

const HelpDeskPopup = ({ isOpen, onClose, contactActions }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className={`${styles['c-help-desk__overlay']} ${isOpen ? styles['c-help-desk__overlay--open'] : ''}`} onClick={handleOverlayClick} aria-hidden={!isOpen} />

      <div
        className={`${styles['c-help-desk__popup']} ${isOpen ? styles['c-help-desk__popup--open'] : ''}`}
        onClick={handlePopupClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="help-desk-title"
        aria-hidden={!isOpen}
      >
        <div className={styles['c-help-desk__header']}>
          <div className={styles['c-help-desk__header-content']}>
            <h3 id="help-desk-title">Arsalife destek hattı</h3>
            <p>Müşteri temsilcilerimiz ile hızlıca iletişim kurun!</p>
          </div>
          <button className={styles['c-help-desk__close']} onClick={onClose} aria-label="Kapat" type="button">
            <FaX size={ICON_SIZES.CLOSE} />
          </button>
        </div>

        <div className={styles['c-help-desk__content']}>
          <HelpDeskActions contactActions={contactActions} />
        </div>
      </div>
    </>
  );
};

export default HelpDeskPopup;

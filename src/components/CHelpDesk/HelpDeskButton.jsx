import React from 'react';
import { FaMessage } from 'react-icons/fa6';
import styles from './styles.module.scss';
import { ICON_SIZES } from './constants';

const HelpDeskButton = ({ onClick, isShifted }) => {
  return (
    <button
      className={`${styles['c-help-desk__button']} ${isShifted ? styles['c-help-desk__button--shifted'] : ''}`}
      onClick={onClick}
      aria-label="Destek hattı"
      type="button"
    >
      <FaMessage size={ICON_SIZES.BUTTON} />
    </button>
  );
};

export default HelpDeskButton;


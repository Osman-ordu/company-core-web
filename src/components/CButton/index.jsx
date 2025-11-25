import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const CButton = ({ 
  children, 
  type = 'primary', 
  to, 
  onClick, 
  className = '', 
  disabled = false,
  ...props 
}) => {
  const baseClassName = `${styles['c-button']} ${styles[`c-button--${type}`]} ${className}`.trim();

  if (to && !disabled) {
    return (
      <Link to={to} className={baseClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={baseClassName} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default CButton;


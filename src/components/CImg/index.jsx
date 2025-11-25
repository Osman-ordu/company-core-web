import React, { useState } from 'react';
import styles from './styles.module.scss';

const CImg = ({ src, alt = '', className = '', loading = 'lazy', decoding = 'async', fetchPriority, onLoad, onError, placeholder, ...props }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLoad = (e) => {
    setImageLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setImageError(true);
    if (onError) onError(e);
  };

  // If image failed to load and we have a placeholder, show placeholder
  if (imageError && placeholder) {
    return <img src={placeholder} alt={alt} className={`${styles['c-img']} ${className}`} loading="eager" decoding="sync" {...props} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${styles['c-img']} ${className} ${imageLoaded ? styles['c-img--loaded'] : ''}`}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

export default CImg;

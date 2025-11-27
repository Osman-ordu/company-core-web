import React from 'react';
import styles from './styles.module.scss';

const CVideo = ({ videoId, className = '', loading = 'lazy', decoding = 'async', fetchPriority = 'high', onLoad, onError, placeholder, ...props }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}?feature=oembed&loop=1&mute=1&controls=0&autoplay=1&playlist=${videoId}`;
  return (
    <iframe
      src={videoUrl}
      allowFullScreen
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      width="100%"
      height="100%"
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      onLoad={onLoad}
      onError={onError}
      placeholder={placeholder}
      {...props}
      className={`${styles['c-video']} ${className}`}
    ></iframe>
  );
};

export default CVideo;

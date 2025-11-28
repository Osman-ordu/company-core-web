import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './styles.module.scss';

const CScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const clientHeight = window.innerHeight;
      
      // Sayfanın en altına yaklaşıldığında göster (son 200px içinde)
      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
      const threshold = 200; // 200px öncesinden göster
      
      if (distanceFromBottom < threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // İlk yüklemede kontrol et
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className={styles['c-scroll-to-top']}
      onClick={scrollToTop}
      aria-label="Yukarı çık"
    >
      <FaArrowUp className={styles['c-scroll-to-top__icon']} />
    </button>
  );
};

export default CScrollToTop;


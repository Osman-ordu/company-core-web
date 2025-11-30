import { useState, useEffect, useCallback } from 'react';
import { HELP_DESK_EVENTS, SCROLL_THRESHOLD } from './constants';

export const useHelpDesk = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const clientHeight = window.innerHeight;

      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
      setScrollToTopVisible(distanceFromBottom < SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOpenHelpDesk = () => {
      setIsOpen(true);
    };

    window.addEventListener(HELP_DESK_EVENTS.OPEN, handleOpenHelpDesk);

    return () => {
      window.removeEventListener(HELP_DESK_EVENTS.OPEN, handleOpenHelpDesk);
    };
  }, []);

  const openPopup = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  const togglePopup = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    scrollToTopVisible,
    openPopup,
    closePopup,
    togglePopup,
  };
};


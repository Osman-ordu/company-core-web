import { useCallback } from 'react';
import { CONTACT_INFO } from './constants';

export const useContactActions = () => {
  const handleWhatsApp = useCallback(() => {
    window.open(CONTACT_INFO.whatsapp.url, '_blank', 'noopener,noreferrer');
  }, []);

  const handlePhone = useCallback(() => {
    window.location.href = CONTACT_INFO.phone.url;
  }, []);

  const handleEmail = useCallback(() => {
    window.location.href = CONTACT_INFO.email.url;
  }, []);

  return {
    handleWhatsApp,
    handlePhone,
    handleEmail,
  };
};


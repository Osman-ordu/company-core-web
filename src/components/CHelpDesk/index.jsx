import React from 'react';
import HelpDeskButton from './HelpDeskButton';
import HelpDeskPopup from './HelpDeskPopup';
import { useHelpDesk } from './useHelpDesk';
import { useContactActions } from './useContactActions';

const CHelpDesk = () => {
  const { isOpen, scrollToTopVisible, togglePopup, closePopup } = useHelpDesk();
  const contactActions = useContactActions();

  return (
    <>
      <HelpDeskButton onClick={togglePopup} isShifted={scrollToTopVisible} />
      <HelpDeskPopup isOpen={isOpen} onClose={closePopup} contactActions={contactActions} />
    </>
  );
};

export default CHelpDesk;

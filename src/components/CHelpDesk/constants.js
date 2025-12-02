import { SITE_CONFIG } from '../../config';

// Contact info artık config'den geliyor
export const CONTACT_INFO = {
  whatsapp: {
    phone: SITE_CONFIG.contact.whatsapp.raw,
    url: SITE_CONFIG.contact.whatsapp.url,
  },
  phone: {
    number: SITE_CONFIG.contact.phone.formatted,
    url: `tel:${SITE_CONFIG.contact.phone.raw}`,
  },
  email: {
    address: SITE_CONFIG.contact.email.support,
    url: `mailto:${SITE_CONFIG.contact.email.support}`,
  },
};

export const HELP_DESK_EVENTS = {
  OPEN: 'openHelpDesk',
};

export const SCROLL_THRESHOLD = 200;

export const BREAKPOINTS = {
  MOBILE: 1024,
};

export const ICON_SIZES = {
  BUTTON: 24,
  CLOSE: 18,
  ACTION: 20,
};

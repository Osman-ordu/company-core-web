export const SITE_CONFIG = {
  baseUrl: 'https://www.ArsaTR.com.tr',
  companyName: 'ArsaTR',
  companyGroupName: 'GO Şirketler Grubu', 
  language: 'tr',
  defaultOgImage: '/default-og-image.jpg',

  contact: {
    phone: {
      display: '444 0 982',
      raw: '4440982', 
      formatted: '+90 444 0 982',
    },
    whatsapp: {
      display: '+90 (850) 811 97 77',
      raw: '905508119777',
      url: 'https://wa.me/905508119777',
    },
    email: {
      general: 'info@ArsaTR.com.tr', 
      support: 'destek@ArsaTR.com.tr', 
    },
    address: {
      office: {
        title: 'Merkez Ofis',
        lines: [
          'Maslak Polaris Plaza',
          'Ahi Evran Cad. No:21 Kat:17',
          '34398 Sarıyer/İstanbul'
        ],
        full: 'Maslak Polaris Plaza, Ahi Evran Cad. No:21 Kat:17 34398 Sarıyer/İstanbul',
      },
      map: {
        title: 'Ofis Adresi',
        lines: [
          'şair necmettin halil onan blv.,',
          '34540 çatalca/istanbul'
        ],
        latitude: 41.1482831,
        longitude: 28.4614675,
      },
    },
    workingHours: {
      days: 'Haftanın 7 Günü',
      hours: '10:00 - 18:00',
    },
  },

  navigation: {
    header: [
      {
        label: 'Projeler',
        path: '/projeler',
        icon: 'FaBuilding',
        enabled: true,
      },
      {
        label: 'Hakkımızda',
        path: '/hakkimizda',
        icon: 'FaInfoCircle',
        enabled: true,
      },
      {
        label: 'Kampanyalar',
        path: '/kampanyalar',
        icon: 'FaTag',
        enabled: true,
      },
      {
        label: 'Basında Biz',
        path: '/basinda-biz',
        icon: 'FaNewspaper',
        enabled: false,
      },
      {
        label: 'İş Ortağım',
        path: '/is-ortagim',
        icon: 'FaHandshake',
        enabled: false, 
      },
      {
        label: 'İletişim',
        path: '/iletisim',
        icon: 'FaPhone',
        enabled: true,
      },
    ],
    footer: {
      help: {
        title: 'SİZE NASIL YARDIMCI OLABİLİRİZ ?',
      },
    },
    bottomNav: [
      {
        label: 'Projeleri İncele',
        path: '/projeler',
        icon: 'FaBuilding',
      },
      {
        label: 'İletişime Geç',
        path: '/iletisim',
        icon: 'FaPhone',
      },
    ],
  },

  socialMedia: {
    instagram: {
      url: 'https://www.instagram.com/ArsaTR.com.tr',
      enabled: true,
    },
    facebook: {
      url: 'https://www.facebook.com/ArsaTR.com.tr',
      enabled: true,
    },
    twitter: {
      url: 'https://www.x.com/ArsaTR',
      enabled: true,
    },
    youtube: {
      url: 'https://www.x.com/ArsaTR', 
      enabled: true,
    },
    linkedin: {
      url: 'https://www.x.com/ArsaTR',
      enabled: true,
    },
    tiktok: {
      url: 'https://www.x.com/ArsaTR',
      enabled: true,
    },
  },

  legal: {
    kvkk: {
      label: 'KVKK',
      path: '/kvkk',
    },
    commercialCommunication: {
      label: 'Ticari İletişim İzni',
      path: '/ticari-iletisim-izni',
    },
  },

  pages: {
    home: {
      path: '/',
      label: 'Ana Sayfa',
    },
    campaigns: {
      path: '/kampanyalar',
      label: 'Kampanyalar',
    },
    about: {
      path: '/hakkimizda',
      label: 'Hakkımızda',
    },
    projects: {
      path: '/projeler',
      label: 'Projeler',
    },
    contact: {
      path: '/iletisim',
      label: 'İletişim',
    },
  },

  copyright: {
    year: new Date().getFullYear(), 
    companyName: 'ArsaTR', 
    rightsOwner: 'GO Şirketler Grubu',
  },

  theme: {
    defaultTheme: 'light',
    enableThemeToggle: true,
  },

  helpDesk: {
    enabled: true,
    title: 'destek hattı',
    description: 'Müşteri temsilcilerimiz ile hızlıca iletişim kurun!',
  },

  stats: [
    {
      number: 22,
      label: 'Yıllık tecrübe',
    },
    {
      number: 12,
      label: 'Proje',
    },
    {
      number: 2535,
      label: 'Memnun müşteri',
    },
  ],

  videos: {
    main: 'Q887wtIdozA',
    secondary: '2TDLK92kzM',
    promo: 'RW9dalk7YLw',
  },

};

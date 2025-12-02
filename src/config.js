export const SITE_CONFIG = {
  // Temel Site Bilgileri
  baseUrl: 'https://www.arsalife.com',
  companyName: 'Arsalife',
  companyGroupName: 'GO Şirketler Grubu', // Footer copyright için
  language: 'tr',
  defaultOgImage: '/default-og-image.jpg', // Meta tags için varsayılan görsel

  // İletişim Bilgileri
  contact: {
    phone: {
      display: '444 0 982', // Görünen format
      raw: '4440982', // tel: linki için
      formatted: '+90 444 0 982', // Alternatif format
    },
    whatsapp: {
      display: '+90 (850) 811 97 77',
      raw: '905508119777', // WhatsApp linki için
      url: 'https://wa.me/905508119777',
    },
    email: {
      general: 'info@arsago.com.tr', // Genel iletişim
      support: 'destek@arsalife.com', // Destek hattı
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

  // Navigasyon Menüleri
  navigation: {
    // Header menü öğeleri
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
        enabled: false, // Şu an disabled
      },
      {
        label: 'İş Ortağım',
        path: '/is-ortagim',
        icon: 'FaHandshake',
        enabled: false, // Şu an disabled
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
    // Bottom navbar (mobil için)
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
      url: 'https://www.instagram.com/arsago.com.tr',
      enabled: true,
    },
    facebook: {
      url: 'https://www.facebook.com/arsago.com.tr',
      enabled: true,
    },
    twitter: {
      url: 'https://www.x.com/arsago',
      enabled: true,
    },
    youtube: {
      url: 'https://www.x.com/arsago', // Şu an placeholder
      enabled: true,
    },
    linkedin: {
      url: 'https://www.x.com/arsago', // Şu an placeholder
      enabled: true,
    },
    tiktok: {
      url: 'https://www.x.com/arsago', // Şu an placeholder
      enabled: true,
    },
  },

  // Yasal Linkler
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

  // Sayfa Yapılandırması
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

  // Copyright Bilgileri
  copyright: {
    year: new Date().getFullYear(), // Dinamik yıl
    companyName: 'Arsago', // Copyright'ta görünen isim (farklı olabilir)
    rightsOwner: 'GO Şirketler Grubu',
  },

  // Tema ve Görsel Ayarları
  theme: {
    defaultTheme: 'light', // 'light' | 'dark' | 'auto'
    enableThemeToggle: true,
  },

  // Help Desk / Destek Hattı
  helpDesk: {
    enabled: true,
    title: 'destek hattı',
    description: 'Müşteri temsilcilerimiz ile hızlıca iletişim kurun!',
  },

  // İstatistikler / Stats
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

  // Video ID'leri (YouTube)
  videos: {
    main: 'Q887wtIdozA',
    secondary: '2TDLK92kzM',
    promo: 'RW9dalk7YLw',
  },

};
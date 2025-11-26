export const animationVariants = {
  fadeSlideUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99], // Smooth cubic bezier
    },
  },
  spring: {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
  scaleOpacity: {
    initial: { opacity: 0, scale: 0.9, y: 30 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  smoothScale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1], // Subtle bounce
    },
  },
  slideFade: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  rotateFade: {
    initial: { opacity: 0, rotate: -5, y: 50, scale: 0.95 },
    animate: { opacity: 1, rotate: 0, y: 0, scale: 1 },
    transition: {
      duration: 0.75,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

export const cities = [
    'Adana', 'Adıyaman', 'Afyon', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya',
    'Ardahan', 'Artvin', 'Aydın', 'Balıkesir', 'Bartın', 'Batman', 'Bayburt', 'Bilecik',
    'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı', 'Çorum',
    'Denizli', 'Diyarbakır', 'Düzce', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
    'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Iğdır', 'Isparta', 'İstanbul',
    'İzmir', 'Kahramanmaraş', 'Karabük', 'Karaman', 'Kars', 'Kastamonu', 'Kayseri', 'Kırıkkale',
    'Kırklareli', 'Kırşehir', 'Kilis', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa',
    'Mardin', 'Mersin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Osmaniye',
    'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Şanlıurfa', 'Şırnak',
    'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak'
  ];

export const features = [
    {
      icon: 'https://arsago.com.tr/wp-content/uploads/2025/04/zamaninda-teslim-1.svg',
      title: 'Zamanında eksiksiz teslim',
    },
    {
      icon: 'https://arsago.com.tr/wp-content/uploads/2025/04/vadeli-odeme-1.svg',
      title: 'Vadeli ödeme seçenekleri',
    },
    {
      icon: 'https://arsago.com.tr/wp-content/uploads/2025/04/search_1265775.svg',
      title: 'Güvenli ve şeffaf süreç yönetimi',
    },
    {
      icon: 'https://arsago.com.tr/wp-content/uploads/2025/04/kazanc-firsati-1.svg',
      title: 'Yatırımda alırken kazanç fırsatı',
    },
  ];

  export const heroSlides = [
    {
      desktopImage: 'https://arsago.com.tr/wp-content/uploads/2025/08/web-1100x660px.jpg',
      mobileImage: 'https://arsago.com.tr/wp-content/uploads/2025/08/mobil-480x720px.jpg',
    },
    {
      desktopImage: 'https://arsago.com.tr/wp-content/uploads/2025/04/mugla-web.jpg',
      mobileImage: 'https://arsago.com.tr/wp-content/uploads/2025/06/mugla-mobil.jpg',
    },
    {
      desktopImage: 'https://arsago.com.tr/wp-content/uploads/2025/08/1_Web.jpg',
      mobileImage: 'https://arsago.com.tr/wp-content/uploads/2025/08/1_Mobil.jpg',
    },
  ];

  export const projects = [
    {
        id: 1,
        name: 'Kırıkkale Yahşihan Konut Edindirme Projeleri',
        location: 'Kırıkkale',
        image: 'https://arsago.com.tr/wp-content/uploads/2025/03/Kirikkale-Yahsihan-Konut-Edindirme-Prpjeleri.png',
        status: 'ongoing',
        category: ['ongoing', 'investment'],
        slug: 'kirikkale-yahsihan',
      },
      {
        id: 2,
        name: 'Şile Villa Arsaları',
        location: 'İstanbul',
        image: 'https://arsago.com.tr/wp-content/uploads/2025/03/sile-villa-scaled-1500x800.jpg',
        status: 'ongoing',
        category: ['ongoing', 'investment', 'villa'],
        slug: 'istanbul-sile-villa',
      },
      {
        id: 3,
        name: 'Ankara Çankaya Yatırım Arsaları',
        location: 'Ankara',
        image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=1500&h=800&fit=crop',
        status: 'ongoing',
        category: ['ongoing', 'investment'],
        slug: 'ankara-cankaya-yatirim',
      },
      {
        id: 4,
        name: 'İzmir Karşıyaka Yatırım Projesi',
        location: 'İzmir',
        image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1500&h=800&fit=crop',
        status: 'ongoing',
        category: ['ongoing', 'investment'],
        slug: 'izmir-karsiyaka-yatirim',
      },
      {
        id: 5,
        name: 'Bursa Nilüfer Yatırım Arsaları',
        location: 'Bursa',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1500&h=800&fit=crop',
        status: 'completed',
        category: ['completed', 'investment'],
        slug: 'bursa-nilufer-yatirim',
      },
      // KEP Projects
      {
        id: 6,
        name: 'Muğla Akyaka Konut Edindirme Projeleri',
        location: 'Muğla',
        image: 'https://arsago.com.tr/wp-content/uploads/2025/03/koyum-mugla-akyaka.png',
        status: 'ongoing',
        category: ['ongoing', 'kep'],
        slug: 'mugla-akyaka-kep',
      },
      {
        id: 7,
        name: 'Antalya Kaş KEP Projesi',
        location: 'Antalya',
        image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=1500&h=800&fit=crop',
        status: 'ongoing',
        category: ['ongoing', 'kep'],
        slug: 'antalya-kas-kep',
      },
      {
        id: 8,
        name: 'Bodrum KEP Konut Projesi',
        location: 'Muğla',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1500&h=800&fit=crop',
        status: 'ongoing',
        category: ['ongoing', 'kep'],
        slug: 'mugla-bodrum-kep',
      },
      {
        id: 9,
        name: 'Fethiye KEP Projesi',
        location: 'Muğla',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1500&h=800&fit=crop',
        status: 'completed',
        category: ['completed', 'kep'],
        slug: 'mugla-fethiye-kep',
      },
      // Village Projects
      {
        id: 10,
        name: 'Kapadokya Köyüm Projeleri',
        location: 'Kapadokya',
        image: 'https://arsago.com.tr/wp-content/uploads/2025/08/anasayfakapak-kapadokya2-scaled-1500x800.jpg',
        status: 'ongoing',
        category: ['ongoing', 'village'],
        slug: 'kapadokya-koyum',
      },
      {
        id: 11,
        name: 'Safranbolu Köyüm Projesi',
        location: 'Karabük',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1500&h=800&fit=crop',
        status: 'ongoing',
        category: ['ongoing', 'village'],
        slug: 'karabuk-safranbolu-koyum',
      },
      {
        id: 12,
        name: 'Amasra Köyüm Projesi',
        location: 'Bartın',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1500&h=800&fit=crop',
        status: 'ongoing',
        category: ['ongoing', 'village'],
        slug: 'bartin-amasra-koyum',
      },
      {
        id: 13,
        name: 'Ayder Köyüm Projesi',
        location: 'Rize',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a74c?w=1500&h=800&fit=crop',
        status: 'completed',
        category: ['completed', 'village'],
        slug: 'rize-ayder-koyum',
      },
      // Villa Projects
      {
        id: 14,
        name: 'Balıkesir Savastepe Villa Arsaları',
        location: 'Balıkesir',
        image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1500&h=800&fit=crop',
        status: 'ongoing',
        category: ['ongoing', 'villa'],
        slug: 'balikesir-savastepe',
      },
      {
        id: 15,
        name: 'Kapak Balıkesir Villa Arsaları',
        location: 'Balıkesir',
        image: 'https://arsago.com.tr/wp-content/uploads/2025/04/KAPAK-BALIKESIR-1500x800.png',
        status: 'ongoing',
        category: ['ongoing', 'villa'],
        slug: 'balikesir-villa',
      },
      {
        id: 16,
        name: 'Çeşme Alaçatı Villa Arsaları',
        location: 'İzmir',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1500&h=800&fit=crop',
        status: 'ongoing',
        category: ['ongoing', 'villa'],
        slug: 'izmir-cesme-alacati-villa',
      },
      {
        id: 17,
        name: 'Marmaris Villa Arsaları',
        location: 'Muğla',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1500&h=800&fit=crop',
        status: 'ongoing',
        category: ['ongoing', 'villa'],
        slug: 'mugla-marmaris-villa',
      },
      {
        id: 18,
        name: 'Datça Villa Arsaları',
        location: 'Muğla',
        image: 'https://images.unsplash.com/photo-1600585152915-d0bec72a2752?w=1500&h=800&fit=crop',
        status: 'completed',
        category: ['completed', 'villa'],
        slug: 'mugla-datca-villa',
      },
      // First Farm Projects
      {
        id: 19,
        name: 'Eskişehir İlk Tarlam Projesi',
        location: 'Eskişehir',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1500&h=800&fit=crop',
        status: 'ongoing',
        category: ['ongoing', 'first-farm'],
        slug: 'eskisehir-ilk-tarlam',
      },
      {
        id: 20,
        name: 'Konya İlk Tarlam Projesi',
        location: 'Konya',
        image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1500&h=800&fit=crop',
        status: 'ongoing',
        category: ['ongoing', 'first-farm'],
        slug: 'konya-ilk-tarlam',
      },
      {
        id: 21,
        name: 'Afyonkarahisar İlk Tarlam Projesi',
        location: 'Afyonkarahisar',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1500&h=800&fit=crop',
        status: 'ongoing',
        category: ['ongoing', 'first-farm'],
        slug: 'afyonkarahisar-ilk-tarlam',
      },
      {
        id: 22,
        name: 'Uşak İlk Tarlam Projesi',
        location: 'Uşak',
        image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1500&h=800&fit=crop',
        status: 'completed',
        category: ['completed', 'first-farm'],
        slug: 'usak-ilk-tarlam',
      },
      // Additional Ongoing Projects
      {
        id: 23,
        name: 'Trabzon Uzungöl Yatırım Projesi',
        location: 'Trabzon',
        image: 'https://images.unsplash.com/photo-1600585152915-d0bec72a2752?w=1500&h=800&fit=crop',
        status: 'ongoing',
        category: ['ongoing', 'investment'],
        slug: 'trabzon-uzungol-yatirim',
      },
      {
        id: 24,
        name: 'Edirne Köyüm Projesi',
        location: 'Edirne',
        image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1500&h=800&fit=crop',
        status: 'ongoing',
        category: ['ongoing', 'village'],
        slug: 'edirne-koyum',
      },
      {
        id: 25,
        name: 'Çanakkale Assos Villa Arsaları',
        location: 'Çanakkale',
        image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1500&h=800&fit=crop',
        status: 'ongoing',
        category: ['ongoing', 'villa'],
        slug: 'canakkale-assos-villa',
      },
  ];

  export const projectFilters = [
    { id: 'all', label: 'Tümü' },
    { id: 'ongoing', label: 'Satışı Devam Edenler' },
    { id: 'first-farm', label: 'İlk Tarlam' },
    { id: 'kep', label: 'KEP' },
    { id: 'village', label: 'Köyüm Projeleri' },
    { id: 'villa', label: 'Villa Arsaları' },
    { id: 'investment', label: 'Yatırım Arsaları' },
    { id: 'completed', label: 'Satışı Tamamlanan' },
  ];

  export const stats = [
      {
        number: '81',
        label: 'ülke',
      },
      {
        number: '30+',
        label: 'şehir',
      },
      {
        number: '50+',
        label: 'tamamlanan proje',
      },
      {
        number: '5M+',
        label: 'm² proje alanı',
      },
      {
        number: '10K+',
        label: 'mutlu müşteri',
      },
    ];

    export   const campaigns = [
      {
        image: 'https://arsago.com.tr/wp-content/uploads/2025/09/Kare-2.jpg',
        title: "180 Bin TL Peşinatla Kapadokya'da\nArsa Sahibi Olun!",
        content:
          "Kapadokya'da kendi evinin sahibi olmanın yolu: önce arsa, sonra hayalindeki yaşam!\n\n• 250 – 470 m² arası turizm imarlı müstakil tapulu parseller\n• 99 parsel | 6 aya varan taksit avantajı\n• UNESCO mirası Kapadokya'nın kalbinde\n\nDetaylı bilgi almak ve fırsatları kaçırmamak için hemen formu doldurun.",
        buttonText: 'form doldurun',
        reverse: false,
      },
      {
        image: 'https://arsago.com.tr/wp-content/uploads/2025/08/kirikkale.jpg',
        title: "Kırıkkale'de 1.800.000 TL'ye Ev Sahibi Olun!",
        content:
          "Kırıkkale'de kendi evinin sahibi olmanın yolu: önce arsa, sonra hayalindeki yaşam!\n\n• 250 – 470 m² arası turizm imarlı müstakil tapulu parseller\n• 99 parsel | 6 aya varan taksit avantajı\n• UNESCO mirası Kapadokya'nın kalbinde\n\nDetaylı bilgi almak ve fırsatları kaçırmamak için hemen formu doldurun.",
        buttonText: 'form doldurun',
        reverse: true,
      },
      {
        image: 'https://arsago.com.tr/wp-content/uploads/2025/08/kibris.jpg',
        title: "Kıbrıs'ta 2.800.000 TL'ye Ev Sahibi Olun!",
        content:
          "Kıbrıs'ta kendi evinin sahibi olmanın yolu: önce arsa, sonra hayalindeki yaşam!\n\n• 250 – 470 m² arası turizm imarlı müstakil tapulu parseller\n• 99 parsel | 6 aya varan taksit avantajı\n• UNESCO mirası Kapadokya'nın kalbinde\n\nDetaylı bilgi almak ve fırsatları kaçırmamak için hemen formu doldurun.",
        buttonText: 'form doldurun',
        reverse: false,
      },
      {
        image: 'https://arsago.com.tr/wp-content/uploads/2025/08/sile.png',
        title: "İstanbul'da 2.800.000 TL'ye Ev Sahibi Olun!",
        content:
          "Şile'de kendi evinin sahibi olmanın yolu: önce arsa, sonra hayalindeki yaşam!\n\n• 250 – 470 m² arası turizm imarlı müstakil tapulu parseller\n• 99 parsel | 6 aya varan taksit avantajı\n• UNESCO mirası Kapadokya'nın kalbinde\n\nDetaylı bilgi almak ve fırsatları kaçırmamak için hemen formu doldurun.",
        buttonText: 'form doldurun',
        reverse: true,
      },
    ];
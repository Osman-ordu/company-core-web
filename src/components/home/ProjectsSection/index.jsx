import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CButton from '../../CButton';
import styles from './styles.module.scss';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filters = [
    { id: 'all', label: 'Tümü' },
    { id: 'ongoing', label: 'Satışı Devam Edenler' },
    { id: 'first-farm', label: 'İlk Tarlam' },
    { id: 'kep', label: 'KEP' },
    { id: 'village', label: 'Köyüm Projeleri' },
    { id: 'villa', label: 'Villa Arsaları' },
    { id: 'investment', label: 'Yatırım Arsaları' },
    { id: 'completed', label: 'Satışı Tamamlanan' },
  ];

  const projects = [
    // Investment Projects
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

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter((project) => project.category.includes(activeFilter));
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  return (
    <section className={styles['c-projects']}>
      <div className={`section-container ${styles['c-projects__wrapper']}`}>
        <h2 className={styles['c-projects__title']}>Projeler</h2>
        <div className={styles['c-projects__filter-tabs']}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`${styles['c-projects__filter-tab']} ${activeFilter === filter.id ? styles['c-projects__filter-tab--active'] : ''}`}
              onClick={() => {
                setActiveFilter(filter.id);
                setShowAll(false);
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className={styles['c-projects__grid']}>
          {displayedProjects.map((project) => (
            <Link key={project.id} to={`/proje/${project.slug}`} className={styles['c-projects__card']}>
              <div className={styles['c-projects__image']} style={{ backgroundImage: `url(${project.image})` }}>
                <div className={styles['c-projects__overlay']}></div>
                <div className={`${styles['c-projects__status']} ${project.status === 'ongoing' ? styles['c-projects__status--ongoing'] : styles['c-projects__status--completed']}`}>
                  {project.status === 'ongoing' ? 'Satışı Devam Eden' : 'Satışı Tamamlandı'}
                </div>
                <div className={styles['c-projects__info']}>
                  <h4 className={styles['c-projects__location']}>{project.location}</h4>
                  <h3 className={styles['c-projects__name']}>{project.name}</h3>
                  <span className={styles['c-projects__view-button']}>İncele</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {hasMoreProjects && !showAll && (
          <CButton type="secondary" onClick={() => setShowAll(true)} className={styles['c-projects__load-more']}>
            Daha Fazla
          </CButton>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

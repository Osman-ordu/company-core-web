import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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
    {
      id: 1,
      name: 'Savaştepe',
      location: 'Balıkesir',
      image: 'https://via.placeholder.com/400x300',
      status: 'ongoing',
      category: ['ongoing', 'investment'],
    },
    {
      id: 2,
      name: 'Belha 2',
      location: 'Kapadokya',
      image: 'https://via.placeholder.com/400x300',
      status: 'ongoing',
      category: ['ongoing', 'investment'],
    },
    {
      id: 3,
      name: 'Konut Edindirme Projeleri (KEP)',
      location: 'Kırıkkale Yahşihan',
      image: 'https://via.placeholder.com/400x300',
      status: 'ongoing',
      category: ['ongoing', 'kep'],
    },
    {
      id: 4,
      name: 'Akyaka',
      location: 'Köyüm Muğla',
      image: 'https://via.placeholder.com/400x300',
      status: 'ongoing',
      category: ['ongoing', 'village'],
    },
    {
      id: 5,
      name: 'Villa Projesi',
      location: 'Şile',
      image: 'https://via.placeholder.com/400x300',
      status: 'ongoing',
      category: ['ongoing', 'villa'],
    },
    {
      id: 6,
      name: '3. Etap Kazdağları',
      location: 'İlk Tarlam',
      image: 'https://via.placeholder.com/400x300',
      status: 'completed',
      category: ['completed', 'first-farm'],
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section className={styles['c-projects']}>
      <div className={`section-container ${styles['c-projects__wrapper']}`}>
        <h2 className={styles['c-projects__title']}>projeler</h2>
        <div className={styles['c-projects__filter-tabs']}>
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`${styles['c-projects__filter-tab']} ${activeFilter === filter.id ? styles['c-projects__filter-tab--active'] : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className={styles['c-projects__grid']}>
          {filteredProjects.map(project => (
            <Link key={project.id} to={`/projeler/${project.id}`} className={styles['c-projects__card']}>
              <div 
                className={styles['c-projects__image']} 
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div 
                  className={`${styles['c-projects__status']} ${
                    project.status === 'ongoing' 
                      ? styles['c-projects__status--ongoing'] 
                      : styles['c-projects__status--completed']
                  }`}
                >
                  {project.status === 'ongoing' ? 'Satışı Devam Eden' : 'Satışı Tamamlandı'}
                </div>
              </div>
              <div className={styles['c-projects__info']}>
                <h4 className={styles['c-projects__location']}>{project.location}</h4>
                <h3 className={styles['c-projects__name']}>{project.name}</h3>
                <span className={styles['c-projects__view-button']}>İncele</span>
              </div>
            </Link>
          ))}
        </div>
        <button className={styles['c-projects__load-more']}>Daha Fazla</button>
      </div>
    </section>
  );
};

export default ProjectsSection;


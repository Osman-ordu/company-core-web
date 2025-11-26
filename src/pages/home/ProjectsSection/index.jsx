import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CButton from '../../../components/CButton';
import { projects, projectFilters } from '../../../db/General';
import styles from './styles.module.scss';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter((project) => project.category.includes(activeFilter));
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  return (
    <section className={styles['c-projects']}>
      <div className={`section-container ${styles['c-projects__wrapper']}`}>
        <h2 className={styles['c-projects__title']}>Projeler</h2>
        <div className={styles['c-projects__filter-tabs']}>
          {projectFilters.map((filter) => (
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

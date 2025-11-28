import React from 'react';
import ProjectsSection from '../../pages/home/ProjectsSection';
import styles from './styles.module.scss';

const Projects = () => {
  return (
    <div className={styles['c-projects']}>
      <ProjectsSection />
    </div>
  );
};

export default Projects;

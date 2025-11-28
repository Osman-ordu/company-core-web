import React from 'react';
import ProjectsSection from '../../pages/home/ProjectsSection';
import styles from './styles.module.scss';
import CContactContainer from '../../components/CContactContainer';

const Projects = () => {
  return (
    <div className={styles['c-projects']}>
      <ProjectsSection />
      <CContactContainer />
    </div>
  );
};

export default Projects;

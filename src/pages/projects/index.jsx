import React from 'react';
import ProjectsSection from '../../pages/home/ProjectsSection';
import styles from './styles.module.scss';
import CContactContainer from '../../components/CContactContainer';
import { CAnimatedWrapper } from '../../components/CAnimatedWrapper';

const Projects = () => {
  return (
    <div className={styles['c-projects']}>
      <CAnimatedWrapper variant="scaleOpacity" delay={0.1}>
        <ProjectsSection />
      </CAnimatedWrapper>

      <CAnimatedWrapper variant="scaleOpacity" delay={0.15}>
        <CContactContainer />
      </CAnimatedWrapper>
    </div>
  );
};

export default Projects;

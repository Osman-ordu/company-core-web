import React from 'react';
import ProjectsSection from '../../pages/home/ProjectsSection';
import styles from './styles.module.scss';
import CContactContainer from '../../components/CContactContainer';
import { CAnimatedWrapper } from '../../components/CAnimatedWrapper';
import CMetaGenerator from '../../components/CMetaGenerator';
import { metaData } from '../../db/MetaData';

const Projects = () => {
  return (
    <>
      <CMetaGenerator title={metaData.projects.title} description={metaData.projects.description} keywords={metaData.projects.keywords} path={metaData.projects.path} />
      <div className={styles['c-projects']}>
        <CAnimatedWrapper variant="scaleOpacity" delay={0.1}>
          <ProjectsSection />
        </CAnimatedWrapper>

        <CAnimatedWrapper variant="scaleOpacity" delay={0.15}>
          <CContactContainer />
        </CAnimatedWrapper>
      </div>
    </>
  );
};

export default Projects;

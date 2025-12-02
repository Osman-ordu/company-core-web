import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ProjectsSection from './ProjectsSection';
import AboutSection from './AboutSection';
import PartnerSection from './PartnerSection';
import CStats from '../../components/CStats';
import CSocialMedia from '../../components/CSocialMedia';
import { CAnimatedWrapper } from '../../components/CAnimatedWrapper';
import CMetaGenerator from '../../components/CMetaGenerator';
import { metaData } from '../../db/MetaData';

const HomePage = () => {
  return (
    <>
      <CMetaGenerator title={metaData.home.title} description={metaData.home.description} keywords={metaData.home.keywords} path={metaData.home.path} />
      <CAnimatedWrapper variant="scaleOpacity" delay={0.1}>
        <HeroSection />
      </CAnimatedWrapper>
      <CAnimatedWrapper variant="scaleOpacity" delay={0.1}>
        <FeaturesSection />
      </CAnimatedWrapper>
      <CAnimatedWrapper variant="scaleOpacity" delay={0.15}>
        <ProjectsSection />
      </CAnimatedWrapper>
      <CAnimatedWrapper variant="scaleOpacity" delay={0.1}>
        <CStats />
      </CAnimatedWrapper>
      <CAnimatedWrapper variant="scaleOpacity" delay={0.15}>
        <AboutSection />
      </CAnimatedWrapper>
      <CAnimatedWrapper variant="scaleOpacity" delay={0.1}>
        <PartnerSection />
      </CAnimatedWrapper>
      <CAnimatedWrapper variant="scaleOpacity" delay={0.15}>
        <CSocialMedia />
      </CAnimatedWrapper>
    </>
  );
};

export default HomePage;

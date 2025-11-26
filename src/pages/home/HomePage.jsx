import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ProjectsSection from './ProjectsSection';
import AboutSection from './AboutSection';
import PartnerSection from './PartnerSection';
import StatsSection from './StatsSection';
import { CAnimatedWrapper } from '../../components/CAnimatedWrapper';

const HomePage = () => {
  return (
    <>
      <CAnimatedWrapper variant="rotateFade" delay={0.1}>
        <HeroSection />
      </CAnimatedWrapper>
      <CAnimatedWrapper variant="scaleOpacity" delay={0.1}>
        <FeaturesSection />
      </CAnimatedWrapper>
      <CAnimatedWrapper variant="scaleOpacity" delay={0.15}>
        <ProjectsSection />
      </CAnimatedWrapper>
      <CAnimatedWrapper variant="scaleOpacity" delay={0.1}>
        <StatsSection />
      </CAnimatedWrapper>
      <CAnimatedWrapper variant="scaleOpacity" delay={0.15}>
        <AboutSection />
      </CAnimatedWrapper>
      <CAnimatedWrapper variant="scaleOpacity" delay={0.1}>
        <PartnerSection />
      </CAnimatedWrapper>
    </>
  );
};

export default HomePage;

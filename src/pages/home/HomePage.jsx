import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ProjectsSection from './ProjectsSection';
import AboutSection from './AboutSection';
import PartnerSection from './PartnerSection';
import StatsSection from './StatsSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProjectsSection />
      <StatsSection />
      <AboutSection />
      <PartnerSection />
    </>
  );
};

export default HomePage;

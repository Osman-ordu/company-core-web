import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ContactForm from './ContactForm';
import ProjectsSection from './ProjectsSection';
import AboutSection from './AboutSection';
import StatsSection from './StatsSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProjectsSection />
      <StatsSection />
      <AboutSection />
      <ContactForm />
    </>
  );
};

export default HomePage;

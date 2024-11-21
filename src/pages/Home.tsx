import React from 'react';
import { Hero } from '../components/Hero';
import { WhoWeAre } from '../components/WhoWeAre';
import { NDISSection } from '../components/NDISSection';
import { Features } from '../components/Features';
import { Contact } from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <NDISSection />
      <Features />
      <Contact />
    </>
  );
};

export default Home;
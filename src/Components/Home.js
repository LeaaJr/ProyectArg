import React from 'react';
import Carousel from './Carousel';
import FeaturedCards from './FeaturedCards';
import FeatureCircles from './FeatureCircles';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Carousel />
        <FeaturedCards />
        <FeatureCircles />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
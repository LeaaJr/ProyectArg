import React from 'react';
import Carousel from '../Components/Carousel';
import FeaturedCards from '../Components/FeaturedCards';
import FeatureCircles from '../Components/FeatureCircles';
import DiagonalCards from '../Components/DiagonalCards';

const Home = () => {
  return (
    <div>
      <Carousel />
      <FeaturedCards />
      <FeatureCircles />
      <DiagonalCards />
    </div>
  );
};

export default Home;
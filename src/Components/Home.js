import React from 'react';
import Carousel from './Carousel';
import FeaturedCards from './FeaturedCards';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Carousel />
        <FeaturedCards />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
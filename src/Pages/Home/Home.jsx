import React from 'react';
import Article from './Article';
import Aside from './Aside';
import Banner from './Banner';
import Features from './Features';
import Hero from './Hero';


const Home = () => {
  return (
    <>
      <Hero/>
      <Banner/>
      <Features/>
      <Article/>
      <Aside/>
    </>
  )
}

export default Home
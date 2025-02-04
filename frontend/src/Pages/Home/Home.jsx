import React from 'react'
import Hero from '../../components/Hero/Hero'
import Favorite from '../../components/Favorite/Fovorite'
import Products from '../../components/Products/Products'

const Home = ({ products, loading, productsRef }) => {
  return (
    <div>
      <Hero />
      <Favorite />
      <Products products={products} loading={loading} ref={productsRef} />
    </div>
  );
};

export default Home

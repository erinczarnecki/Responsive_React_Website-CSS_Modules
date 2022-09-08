import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Search from './components/search/Search';
import User from './components/user/User';
import Favorites from './components/favorite/Favorites';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Search />
      <User />
      <Favorites />
      <Footer />
    </div>
  );
}

export default App;

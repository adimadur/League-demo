import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ChampionSpotlight from '../components/ChampionSpotlight';
import GameModesSection from '../components/GameModesSection';
import EsportsSection from '../components/EsportsSection';
import NewsSection from '../components/NewsSection';
import CommunitySection from '../components/CommunitySection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ChampionSpotlight />
      <GameModesSection />
      <EsportsSection />
      <NewsSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}

export default Home;
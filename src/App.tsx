import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import NDIS from './pages/NDIS';
import CommunityParticipation from './pages/CommunityParticipation';
import DailyLife from './pages/DailyLife';
import Travel from './pages/Travel';
import Household from './pages/Household';
import Social from './pages/Social';
import Referral from './pages/Referral';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ndis" element={<NDIS />} />
          <Route path="/community-participation" element={<CommunityParticipation />} />
          <Route path="/daily-life" element={<DailyLife />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/household" element={<Household />} />
          <Route path="/social" element={<Social />} />
          <Route path="/referrals" element={<Referral />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
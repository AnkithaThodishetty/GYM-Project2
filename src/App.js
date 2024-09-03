import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from './Components/Header';
import MainSection from './Components/MainSection';
import AboutUs from './Components/AboutUs';
import TrainerSection from './Components/TrainerSection';
import TeamPage from './Components/TeamPage';
import PricingSection from './Components/PricingSection';
import Register from './Components/RegistrationPage';

import Footer from './Components/Footer';


const App = () => {
  return (
    <Router>
       <Header />
      <Routes>
      
        <Route path="/" element={<MainSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/training" element={<TrainerSection />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import News, { ArticleDetail } from './pages/News';
import SafetyTalks from './pages/SafetyTalks';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Donate from './pages/Donate';

const HomePage = Home as React.ComponentType<{ isDark: boolean }>;
const NewsPage = News as React.ComponentType<{ isDark: boolean }>;
const SafetyTalksPage = SafetyTalks as React.ComponentType<{ isDark: boolean }>;
const ResourcesPage = Resources as React.ComponentType<{ isDark: boolean }>;

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('rap-theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('rap-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      <div className={`${
        isDark ? 'bg-[#0D0D0D] text-white' : 'bg-[#F9F9F9] text-neutral-900'
      } min-h-screen selection:bg-[#FF9F00] selection:text-black flex flex-col transition-colors duration-500`}>
        
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        {/* Distribute the state property directly to each view element */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage isDark={isDark} />} />
            <Route path="/news" element={<NewsPage isDark={isDark} />} />
            <Route path="/news/:slug" element={<ArticleDetail isDark={isDark} />} />
            <Route path="/safety-talks" element={<SafetyTalksPage isDark={isDark} />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<ResourcesPage isDark={isDark} />} />
            <Route path="/donate" element={<Donate isDark={isDark} />} />
          </Routes>
        </div>

        <Footer isDark={isDark} />
      </div>
    </Router>
  );
};

export default App;
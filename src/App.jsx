import { useState, useCallback } from 'react';
import { scroller } from 'react-scroll';
import useDarkMode from './hooks/useDarkMode';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ImpactNumbers from './components/sections/ImpactNumbers';
import About from './components/sections/About';
import KeywordLab from './components/sections/KeywordLab';
import CaseStudies from './components/sections/CaseStudies';
import ToolsSkills from './components/sections/ToolsSkills';
import Contact from './components/sections/Contact';

function App() {
  const [isDark, toggleDark] = useDarkMode();
  const [keywordLabFilter, setKeywordLabFilter] = useState('All Sites');

  // When "View Ranked Keywords" is clicked in CaseStudies,
  // scroll to Keyword Lab with that site's filter pre-applied.
  const handleViewKeywords = useCallback((siteName) => {
    setKeywordLabFilter(siteName);
    scroller.scrollTo('keyword-lab', {
      smooth: true,
      offset: -80,
      duration: 600,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] transition-colors duration-300">
      <Navbar isDark={isDark} toggleDark={toggleDark} />

      <main>
        <Hero />
        <ImpactNumbers />
        <About />
        <KeywordLab
          activeSiteFilter={keywordLabFilter}
          onFilterChange={setKeywordLabFilter}
        />
        <CaseStudies onViewKeywords={handleViewKeywords} />
        <ToolsSkills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

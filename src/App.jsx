import { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import { CODE_LINES } from './components/CodeBlock/CodeBlock';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.4 }
    );
    ['hero', 'proyectos', 'sobre-mi'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = document.getElementById('sobre-mi');
    if (!el) return;
    let timer;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisibleLines(0);
        let i = 0;
        const tick = () => {
          if (i < CODE_LINES.length) { i++; setVisibleLines(i); timer = setTimeout(tick, 60); }
        };
        tick();
      } else {
        setVisibleLines(0);
        clearTimeout(timer);
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => { obs.disconnect(); clearTimeout(timer); };
  }, []);

  useEffect(() => {
    const t = setInterval(() => setShowCursor(c => !c), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text-primary)' }}>
      <Navbar activeSection={activeSection} />
      <Hero />
      <Projects />
      <About visibleLines={visibleLines} showCursor={showCursor} />
      <Footer />
    </div>
  );
}

export default App;
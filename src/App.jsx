import { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import ProjectCard from './components/projects/projectCard';
import { HiOutlineDownload } from 'react-icons/hi';
import { GoArrowUpRight } from 'react-icons/go';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiPostgresql, SiBootstrap } from 'react-icons/si';
import profileImg from './assets/about.png';
import ImgProject1 from './assets/pr1.png';
import ImgProject2 from './assets/pr2.png';
import ImgProject3 from './assets/pr3.png';
import ImgProject4 from './assets/pr4.png';
import ImgProject5 from './assets/airport.png';
import ImgProject6 from './assets/Todo.png';

const SKILLS = [
  { Icon: FaReact, label: 'React', color: '#61dafb' },
  { Icon: FaHtml5, label: 'HTML5', color: '#e34f26' },
  { Icon: FaCss3Alt, label: 'CSS3', color: '#1572b6' },
  { Icon: FaJsSquare, label: 'JavaScript', color: '#f7df1e' },
  { Icon: FaJava, label: 'Java', color: '#f89820' },
  { Icon: FaPython, label: 'Python', color: '#3776ab' },
  { Icon: SiSpringboot, label: 'Spring Boot', color: '#6db33f' },
  { Icon: SiMysql, label: 'MySQL', color: '#4479a1' },
  { Icon: SiPostgresql, label: 'PostgreSQL', color: '#336791' },
  { Icon: SiBootstrap, label: 'Bootstrap', color: '#7952b3' },
];

const PROJECTS = [
  { img: ImgProject1, title: 'Foods', date: 'Ene 2024', desc: 'Sitio web para promocionar un restaurante. HTML, CSS, JS.', link: 'https://github.com/XanthusCode/Foods' },
  { img: ImgProject3, title: 'Comic Web', date: 'Feb 2024', desc: 'Experiencia inmersiva en el mundo de Marvel y DC Comics con JS, HTML y CSS.', link: 'https://github.com/XanthusCode/comicWeb' },
  { img: ImgProject2, title: 'Inventario', date: 'Mar 2024', desc: 'Gestion de activos, marcas, personas y asignaciones.', link: 'https://github.com/XanthusCode/Inventario-proyecto' },
  { img: ImgProject4, title: 'Memorie Game', date: 'Dic 2023', desc: 'Juego interactivo de memoria con HTML, CSS y JavaScript.', link: 'https://github.com/XanthusCode/MemoriesGame' },
  { img: ImgProject5, title: 'Sistema de Vuelos', date: 'Jun 2024', desc: 'Sistema de gestion de vuelos con Java y MySQL.', link: 'https://github.com/XanthusCode/airport' },
  { img: 'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg', title: 'Formulario Registro', date: 'Jul 2024', desc: 'Formulario y tabla dinamica con Spring Boot y Thymeleaf.', link: 'https://github.com/XanthusCode/FomularioRegistro' },
  { img: ImgProject6, title: 'TodoApp', date: 'Sep 2024', desc: 'Aplicacion de tareas con React. CRUD completo.', link: 'https://github.com/XanthusCode/TodoApp' },
];

const CODE_LINES = [
  { tokens: [{ t: 'comment', v: '// Johan Alexander Garcia Campos' }] },
  { tokens: [] },
  { tokens: [{ t: 'keyword', v: 'const' }, { t: 'plain', v: ' ' }, { t: 'var', v: 'dev' }, { t: 'plain', v: ' = {' }] },
  { tokens: [{ t: 'plain', v: '  ' }, { t: 'fn', v: 'nombre' }, { t: 'plain', v: ': ' }, { t: 'string', v: '"Johan Campos"' }, { t: 'plain', v: ',' }] },
  { tokens: [{ t: 'plain', v: '  ' }, { t: 'fn', v: 'rol' }, { t: 'plain', v: ': ' }, { t: 'string', v: '"Full Stack Developer"' }, { t: 'plain', v: ',' }] },
  { tokens: [{ t: 'plain', v: '  ' }, { t: 'fn', v: 'stack' }, { t: 'plain', v: ': [' }, { t: 'string', v: '"React"' }, { t: 'plain', v: ', ' }, { t: 'string', v: '"Java"' }, { t: 'plain', v: ', ' }, { t: 'string', v: '"Spring"' }, { t: 'plain', v: '],' }] },
  { tokens: [{ t: 'plain', v: '  ' }, { t: 'fn', v: 'disponible' }, { t: 'plain', v: ': ' }, { t: 'keyword', v: 'true' }, { t: 'plain', v: ',' }] },
  { tokens: [{ t: 'plain', v: '' }] },
  { tokens: [{ t: 'plain', v: '  ' }, { t: 'fn', v: 'construir' }, { t: 'plain', v: ': () => ({' }] },
  { tokens: [{ t: 'plain', v: '    ' }, { t: 'fn', v: 'frontend' }, { t: 'plain', v: ': ' }, { t: 'string', v: '"React + Tailwind"' }, { t: 'plain', v: ',' }] },
  { tokens: [{ t: 'plain', v: '    ' }, { t: 'fn', v: 'backend' }, { t: 'plain', v: ': ' }, { t: 'string', v: '"Spring Boot + REST"' }, { t: 'plain', v: ',' }] },
  { tokens: [{ t: 'plain', v: '    ' }, { t: 'fn', v: 'db' }, { t: 'plain', v: ': ' }, { t: 'string', v: '"MySQL + PostgreSQL"' }, { t: 'plain', v: ',' }] },
  { tokens: [{ t: 'plain', v: '  })' }] },
  { tokens: [{ t: 'plain', v: '};' }] },
  { tokens: [] },
  { tokens: [{ t: 'comment', v: '// listo para el siguiente reto' }] },
];

const TOKEN_COLOR = { keyword: 'var(--accent2)', string: 'var(--accent3)', comment: 'var(--text-muted)', fn: 'var(--accent)', var: '#f6c90e', num: '#f97583', plain: 'var(--text-secondary)' };

const CodeLine = ({ tokens }) => (
  <div style={{ minHeight: '1.5rem' }}>
    {tokens.map((tok, i) => (
      <span key={i} style={{ color: TOKEN_COLOR[tok.t] || 'var(--text-secondary)' }}>{tok.v}</span>
    ))}
  </div>
);

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const sections = ['hero', 'proyectos', 'sobre-mi'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.4 }
    );
    sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  // animate code lines when sobre-mi section is visible
  useEffect(() => {
    const el = document.getElementById('sobre-mi');
    if (!el) return;
    let timer;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisibleLines(0);
        let i = 0;
        const tick = () => {
          if (i < CODE_LINES.length) {
            i++;
            setVisibleLines(i);
            timer = setTimeout(tick, 60);
          }
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

  const W = { maxWidth: '60rem', margin: '0 auto', padding: '0 1.5rem' };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text-primary)' }}>
      <Navbar activeSection={activeSection} />

      {/* ─── HERO ─── */}
      <section id="hero" className="grid-bg" style={{ paddingTop: '8rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
        {/* decorative blobs */}
        <div className="hero-blob" style={{ width: '30rem', height: '30rem', background: 'var(--accent)', top: '-8rem', right: '-8rem' }} />
        <div className="hero-blob" style={{ width: '20rem', height: '20rem', background: 'var(--accent2)', bottom: '-4rem', left: '10%' }} />

        <div style={W}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div className="section-label">Full Stack Developer</div>

              <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
                Johan<br /><span style={{ color: 'var(--accent)' }}>Campos</span>
              </h1>

              <p className="mono" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 2.1, maxWidth: '28rem' }}>
                Especializado en construir soluciones digitales completas y escalables —
                desde la interfaz hasta la base de datos.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <a href="documents/cv.pdf" download="Johan_Campos_CV.pdf" className="btn-primary">
                  <HiOutlineDownload /> Resume
                </a>
                <button onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
                  Sobre mi <GoArrowUpRight />
                </button>
                <div style={{ display: 'flex', gap: '0.65rem', marginLeft: '0.25rem' }}>
                  <a href="https://github.com/XanthusCode" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', transition: 'color 0.22s' }} onMouseEnter={e => e.currentTarget.style.color='var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color='var(--text-muted)'}><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/johan-alexander-garcia/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', transition: 'color 0.22s' }} onMouseEnter={e => e.currentTarget.style.color='var(--accent)'} onMouseLeave={e => e.currentTarget.style.color='var(--text-muted)'}><FaLinkedin /></a>
                </div>
              </div>

              {/* status */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent3)', animation: 'pulse-dot 2s ease infinite', display: 'inline-block' }} />
                <span className="mono" style={{ fontSize: '0.62rem', color: 'var(--accent3)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Disponible para trabajar</span>
              </div>
            </div>

            {/* photo */}
            <div className="float" style={{ position: 'relative', width: '200px', height: '200px', flexShrink: 0 }}>
              <div style={{ position: 'absolute', top: '-8px', left: '-8px', width: '22px', height: '22px', borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)' }} />
              <div style={{ position: 'absolute', bottom: '-8px', right: '-8px', width: '22px', height: '22px', borderBottom: '2px solid var(--accent2)', borderRight: '2px solid var(--accent2)' }} />
              <img src={profileImg} alt="Johan Campos" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px', border: '1px solid var(--border)', filter: 'grayscale(15%)' }} />
            </div>
          </div>

          {/* skills row */}
          <div style={{ marginTop: '4rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {SKILLS.map(({ Icon, label, color }) => (
              <div key={label} className="skill-pill"
                onMouseEnter={e => { e.currentTarget.querySelector('svg').style.color = color; e.currentTarget.style.color = 'var(--text-primary)'; }}
                onMouseLeave={e => { e.currentTarget.querySelector('svg').style.color = ''; e.currentTarget.style.color = 'var(--text-secondary)'; }}
              >
                <Icon style={{ fontSize: '0.9rem', transition: 'color 0.22s' }} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROYECTOS ─── */}
      <section id="proyectos" style={{ padding: '6rem 0' }}>
        <div style={W}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>Portafolio</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                Proyectos
              </h2>
            </div>
            <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              clic para expandir
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1rem' }}>
            {PROJECTS.map(p => <ProjectCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* ─── SOBRE MI ─── */}
      <section id="sobre-mi" style={{ padding: '6rem 0', borderTop: '1px solid var(--border)', background: 'linear-gradient(180deg, var(--surface) 0%, var(--bg) 100%)' }}>
        <div style={W}>
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>Johan Campos</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '3.5rem' }}>
            Sobre mi
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start' }}>

            {/* LEFT — code block + bio */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Animated code block */}
              <div className="code-block">
                <div className="terminal-dots">
                  <span style={{ background: '#ff5f57' }} />
                  <span style={{ background: '#febc2e' }} />
                  <span style={{ background: '#28c840' }} />
                </div>
                {CODE_LINES.slice(0, visibleLines).map((line, i) => (
                  <CodeLine key={i} tokens={line.tokens} />
                ))}
                {visibleLines < CODE_LINES.length && (
                  <span style={{ color: 'var(--accent)', opacity: showCursor ? 1 : 0 }}>▋</span>
                )}
              </div>

              {/* Bio text */}
              <p className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 2.1 }}>
                Desarrollador Full Stack con formacion en Campuslands. Construyo aplicaciones
                completas — desde APIs en Spring Boot hasta interfaces en React — con enfoque
                en arquitectura limpia, codigo mantenible y experiencias que funcionan.
              </p>

              {/* Competencias como tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {['Adaptacion al cambio', 'Trabajo en equipo', 'Responsabilidad', 'Innovacion', 'Creatividad'].map(c => (
                  <span key={c} className="tag">{c}</span>
                ))}
              </div>
            </div>

            {/* RIGHT — timeline + valores + contacto */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

              {/* Timeline experiencia / formacion */}
              <div>
                <div className="section-label" style={{ marginBottom: '1.25rem' }}>Trayectoria</div>
                <div>
                  {[
                    { year: '2024', label: 'TodoApp', sub: 'React — Proyecto personal', color: 'var(--accent3)' },
                    { year: '2024', label: 'Sistema de Vuelos', sub: 'Java + MySQL — Campuslands', color: 'var(--accent)' },
                    { year: '2024', label: 'Spring Boot & REST APIs', sub: 'Formularios y backend — Campuslands', color: 'var(--accent)' },
                    { year: '2024', label: 'Full Stack con React', sub: 'Inventario y proyectos web — Campuslands', color: 'var(--accent2)' },
                    { year: '2023', label: 'Inicio en Campuslands', sub: 'HTML, CSS, JavaScript', color: 'var(--accent2)' },
                  ].map((item, i) => (
                    <div key={i} className="timeline-item" style={{ paddingLeft: '1.5rem', paddingBottom: i < 4 ? '1.25rem' : '0', position: 'relative', borderLeft: i < 4 ? '1px solid var(--border)' : '1px solid transparent' }}>
                      <div style={{ position: 'absolute', left: '-4px', top: '3px', width: '7px', height: '7px', borderRadius: '50%', background: item.color, boxShadow: `0 0 8px ${item.color}80` }} />
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                        <span className="mono" style={{ fontSize: '0.6rem', color: item.color, letterSpacing: '0.1em', flexShrink: 0 }}>{item.year}</span>
                        <div>
                          <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-primary)', fontWeight: 500 }}>{item.label}</div>
                          <div className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>{item.sub}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Valores */}
              <div>
                <div className="section-label" style={{ marginBottom: '1rem' }}>Valores</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {['Integridad', 'Innovacion', 'Creatividad', 'Colaboracion', 'Adaptabilidad'].map(v => (
                    <span key={v} className="tag tag-accent">{v}</span>
                  ))}
                </div>
              </div>

              {/* Objetivos 2 principales */}
              <div>
                <div className="section-label" style={{ marginBottom: '1rem' }}>Objetivos</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {['Especializarme en tecnologias emergentes', 'Desarrollar soluciones de alto impacto'].map((o, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.65rem 0.9rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '3px' }}>
                      <span className="mono" style={{ color: 'var(--accent)', fontSize: '0.58rem', flexShrink: 0, marginTop: '0.15rem' }}>{String(i+1).padStart(2,'0')}</span>
                      <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{o}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contacto */}
              <div>
                <div className="section-label" style={{ marginBottom: '1rem' }}>Contacto</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a href="mailto:garciacamposjohan18@gmail.com" className="contact-link">
                    <FaEnvelope style={{ color: 'var(--accent)', fontSize: '0.85rem', flexShrink: 0 }} />
                    garciacamposjohan18@gmail.com
                  </a>
                  <a href="https://www.instagram.com/xanthus_24/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <FaInstagram style={{ color: 'var(--accent2)', fontSize: '0.85rem', flexShrink: 0 }} />
                    @xanthus_24
                  </a>
                  <a href="https://www.linkedin.com/in/johan-alexander-garcia/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <FaLinkedin style={{ color: 'var(--accent)', fontSize: '0.85rem', flexShrink: 0 }} />
                    johan-alexander-garcia
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ ...W, padding: '2rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
            © {new Date().getFullYear()} Johan Campos — Full Stack Developer
          </span>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/XanthusCode" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.22s' }} onMouseEnter={e => e.currentTarget.style.color='var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color='var(--text-muted)'}><FaGithub /></a>
            <a href="https://www.linkedin.com/in/johan-alexander-garcia/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.22s' }} onMouseEnter={e => e.currentTarget.style.color='var(--accent)'} onMouseLeave={e => e.currentTarget.style.color='var(--text-muted)'}><FaLinkedin /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
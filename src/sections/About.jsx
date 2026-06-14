import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import PropTypes from 'prop-types';
import CodeBlock from '../components/CodeBlock/CodeBlock';

const TRAYECTORIA = [
  { year: '2026', label: 'AI & Full Stack Vue', sub: 'Code Review AI · Personal Finance App — Vue, .NET, PostgreSQL', color: 'var(--accent2)' },
  { year: '2024', label: 'Full Stack React', sub: 'Movie Search · Shopping Cart · TodoApp', color: 'var(--accent2)' },
  { year: '2024', label: 'Java Backends & Spring Boot', sub: 'BetPlay · Ecommerce · Antiguedades — Spring Security, JPA', color: 'var(--accent3)' },
  { year: '2024', label: 'Frontend & Games', sub: 'Foods Website · Memory Game — HTML, CSS, JavaScript', color: 'var(--accent)' },
  { year: '2023', label: 'Inicio en Campuslands', sub: 'Fundamentos — HTML, CSS, JavaScript, Java', color: 'var(--accent)' },
];

const About = ({ visibleLines, showCursor }) => (
  <section id="sobre-mi" style={{ padding: '6rem 0', borderTop: '1px solid var(--border)', background: 'linear-gradient(180deg, var(--surface) 0%, var(--bg) 100%)' }}>
    <div style={{ maxWidth: '90rem', margin: '0 auto', padding: '0 1.5rem' }}>
      <div className="section-label" style={{ marginBottom: '0.75rem' }}>Johan Campos</div>
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '3.5rem' }}>
        Sobre mi
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start' }}>

        {/* LEFT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <CodeBlock visibleLines={visibleLines} showCursor={showCursor} />

          <p className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 2.1 }}>
            Desarrollador Full Stack con formacion en Campuslands. Construyo aplicaciones
            completas — desde APIs en Spring Boot hasta interfaces en React — con enfoque
            en arquitectura limpia, codigo mantenible y experiencias que funcionan.
          </p>
        </div>

        {/* RIGHT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          <div>
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>Trayectoria</div>
            {TRAYECTORIA.map((item, i) => (
              <div key={i} style={{ position: 'relative', paddingLeft: '1.5rem', paddingBottom: i < TRAYECTORIA.length - 1 ? '1.25rem' : 0, borderLeft: i < TRAYECTORIA.length - 1 ? '1px solid var(--border)' : '1px solid transparent' }}>
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

          <div>
            <div className="section-label" style={{ marginBottom: '1rem' }}>Objetivos</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Especializarme en tecnologias emergentes', 'Desarrollar soluciones de alto impacto'].map((o, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.65rem 0.9rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '3px' }}>
                  <span className="mono" style={{ color: 'var(--accent)', fontSize: '0.58rem', flexShrink: 0, marginTop: '0.15rem' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{o}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="section-label" style={{ marginBottom: '1rem' }}>Contacto</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="mailto:garciacamposjohan18@gmail.com" className="contact-link">
                <FaEnvelope style={{ color: 'var(--accent)', fontSize: '0.85rem', flexShrink: 0 }} />
                garciacamposjohan18@gmail.com
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
);

About.propTypes = {
  visibleLines: PropTypes.number,
  showCursor: PropTypes.bool,
};

About.defaultProps = {
  visibleLines: undefined,
  showCursor: false,
};

export default About;
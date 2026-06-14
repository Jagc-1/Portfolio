import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';
import { GoArrowUpRight } from 'react-icons/go';
import { SKILLS } from '../data/skills';
import profileImg from '../assets/profile.png';

const Hero = () => (
  <section id="hero" className="grid-bg" style={{ paddingTop: '8rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
    <div className="hero-blob" style={{ width: '30rem', height: '30rem', background: 'var(--accent)', top: '-8rem', right: '-8rem' }} />
    <div className="hero-blob" style={{ width: '20rem', height: '20rem', background: 'var(--accent2)', bottom: '-4rem', left: '10%' }} />

    <div style={{ maxWidth: '90rem', margin: '0 auto', padding: '0 1.5rem' }}>
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
              <a href="https://github.com/XanthusCode" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', fontSize: '1.1rem', transition: 'color 0.22s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              ><FaGithub /></a>
              <a href="https://www.linkedin.com/in/johan-alexander-garcia/" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', fontSize: '1.1rem', transition: 'color 0.22s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              ><FaLinkedin /></a>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent3)', animation: 'pulse-dot 2s ease infinite', display: 'inline-block' }} />
            <span className="mono" style={{ fontSize: '0.62rem', color: 'var(--accent3)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Disponible para trabajar</span>
          </div>
        </div>

        <div className="float" style={{ position: 'relative', width: '200px', height: '200px', flexShrink: 0 }}>
          <div style={{ position: 'absolute', top: '-8px', left: '-8px', width: '22px', height: '22px', borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)' }} />
          <div style={{ position: 'absolute', bottom: '-8px', right: '-8px', width: '22px', height: '22px', borderBottom: '2px solid var(--accent2)', borderRight: '2px solid var(--accent2)' }} />
          <img src={profileImg} alt="Johan Campos" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px', border: '1px solid var(--border)', filter: 'grayscale(15%)' }} />
        </div>
      </div>

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
);

export default Hero;
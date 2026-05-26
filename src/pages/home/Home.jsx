import Layout from '../../components/layout/Layout';
import ProjectCard from '../../components/projects/projectCard';
import { Link } from 'react-router-dom';
import { HiOutlineDownload } from 'react-icons/hi';
import { GoArrowUpRight } from 'react-icons/go';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython, FaReact, FaGithub, FaLinkedin
} from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiPostgresql, SiBootstrap } from 'react-icons/si';
import Profile from '../../assets/about.png';
import ImgProject1 from '../../assets/pr1.png';
import ImgProject2 from '../../assets/pr2.png';
import ImgProject3 from '../../assets/pr3.png';
import ImgProject4 from '../../assets/pr4.png';
import About from '../about/About';

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

const Home = () => (
  <div className="grid-bg" style={{ minHeight: 'calc(100vh - 3.5rem)' }}>
    <Layout className="py-24 space-y-32">

      {/* Hero */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
        <div className="space-y-8 opacity-0-init animate-fade-up">
          <div className="section-label">Full Stack Developer</div>

          <div>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Johan<br />
              <span style={{ color: 'var(--accent)' }}>Campos</span>
            </h1>
          </div>

          <p className="mono" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 2, maxWidth: '30rem' }}>
            Especializado en convertir ideas en soluciones digitales completas y efectivas.
            Construyo sistemas robustos con arquitectura limpia y codigo de calidad.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a href="documents/cv.pdf" download="Johan_Campos_CV.pdf" className="btn-primary">
              <HiOutlineDownload /> Resume
            </a>
            <Link to="/me" className="btn-secondary">
              Sobre mi <GoArrowUpRight />
            </Link>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginLeft: '0.5rem' }}>
              <a href="https://github.com/XanthusCode" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', fontSize: '1.1rem', transition: 'color 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              ><FaGithub /></a>
              <a href="https://www.linkedin.com/in/johan-alexander-garcia/" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', fontSize: '1.1rem', transition: 'color 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              ><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <div className="opacity-0-init animate-fade-in delay-300" style={{
          width: '220px', height: '220px', position: 'relative', flexShrink: 0
        }}>
          {/* Corner decorations */}
          <div style={{
            position: 'absolute', top: '-8px', left: '-8px', width: '24px', height: '24px',
            borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)'
          }} />
          <div style={{
            position: 'absolute', bottom: '-8px', right: '-8px', width: '24px', height: '24px',
            borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)'
          }} />
          <img
            src={Profile}
            alt="Johan Campos"
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              borderRadius: '4px',
              filter: 'grayscale(20%)',
              border: '1px solid var(--border)'
            }}
          />
          {/* Status badge */}
          <div style={{
            position: 'absolute', bottom: '-1rem', left: '50%', transform: 'translateX(-50%)',
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: '2px', padding: '0.25rem 0.75rem',
            display: 'flex', alignItems: 'center', gap: '0.4rem', whiteSpace: 'nowrap'
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent3)',
              animation: 'pulse-dot 2s ease infinite'
            }} />
            <span className="mono" style={{ fontSize: '0.6rem', color: 'var(--accent3)', letterSpacing: '0.1em' }}>
              DISPONIBLE
            </span>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-8 opacity-0-init animate-fade-up delay-200">
        <div className="flex items-center justify-between">
          <div className="section-label">Stack Tecnologico</div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {SKILLS.map(({ Icon, label, color }) => (
            <div key={label} className="skill-pill"
              onMouseEnter={e => {
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.color = color;
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={e => {
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.color = '';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <Icon style={{ fontSize: '0.95rem', transition: 'color 0.25s' }} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-8 opacity-0-init animate-fade-up delay-300">
        <div className="flex items-center justify-between">
          <div className="section-label">Proyectos Destacados</div>
          <Link to="/projects"
            className="mono"
            style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '0.3rem', transition: 'color 0.25s', textTransform: 'uppercase' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            Ver todos <GoArrowUpRight />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
          <ProjectCard img={ImgProject1} title="Foods" date="Enero 2024" showLink={false} />
          <ProjectCard img={ImgProject2} title="Inventario" date="Marzo 2024" showLink={false} />
          <ProjectCard img={ImgProject3} title="Comic Web" date="Febrero 2024" showLink={false} />
          <ProjectCard img={ImgProject4} title="Memorie Game" date="Diciembre 2023" showLink={false} />
        </div>
      </div>

      <About></About>

    </Layout>
  </div>
);

export default Home;
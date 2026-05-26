import Layout from '../../components/layout/Layout';
import AboutImg from '../../assets/profile.png';
import { GoArrowUpRight } from 'react-icons/go';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython, FaReact, FaEnvelope, FaInstagram
} from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiPostgresql, SiBootstrap } from 'react-icons/si';

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

const OBJETIVOS = [
  'Desarrollar soluciones tecnologicas de alto impacto',
  'Especializarme en tecnologias emergentes',
  'Contribuir a la evolucion del sector tecnologico',
  'Fomentar una cultura de aprendizaje continuo',
];

const VALORES = ['Integridad', 'Innovacion', 'Creatividad', 'Colaboracion', 'Adaptabilidad'];
const COMPETENCIAS = ['Adaptacion al cambio', 'Innovacion', 'Creatividad', 'Habilidades Sociales', 'Trabajo en equipo', 'Responsabilidad'];

const SectionBlock = ({ label, children }) => (
  <div style={{ position: 'relative', paddingTop: '0.5rem' }}>
    <div className="section-label" style={{ marginBottom: '1.5rem' }}>{label}</div>
    {children}
  </div>
);

const About = () => (
  <div style={{ minHeight: 'calc(100vh - 3.5rem)' }}>
    <Layout className="py-20 space-y-20">

      {/* Profile */}
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '3rem', alignItems: 'start' }}>
        <div style={{ position: 'relative', width: '160px', flexShrink: 0 }}>
          <div style={{
            position: 'absolute', top: '-6px', left: '-6px', width: '20px', height: '20px',
            borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)'
          }} />
          <div style={{
            position: 'absolute', bottom: '-6px', right: '-6px', width: '20px', height: '20px',
            borderBottom: '2px solid var(--accent2)', borderRight: '2px solid var(--accent2)'
          }} />
          <img
            src={AboutImg}
            alt="Johan Campos"
            style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '4px', border: '1px solid var(--border)', filter: 'grayscale(15%)' }}
          />
        </div>

        <div className="space-y-5">
          <div>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              Johan Alexander<br />Garcia Campos
            </h1>
            <div className="section-label" style={{ marginTop: '0.5rem' }}>Full Stack Developer</div>
          </div>

          <p className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 2 }}>
            Busco constantemente nuevos retos que impulsen mi crecimiento profesional.
            Me dedico a aplicar mis habilidades en proyectos colaborativos que generen
            soluciones efectivas y de impacto positivo.
          </p>

          <a
            href="mailto:garciacamposjohan18@gmail.com"
            className="btn-primary"
            style={{ width: 'fit-content' }}
          >
            Contactar <GoArrowUpRight />
          </a>
        </div>
      </div>

      <div className="divider" />

      {/* Vision / Mision */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <SectionBlock label="Vision">
          <p className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 2 }}>
            Transformo conceptos abstractos en soluciones tecnologicas elegantes y efectivas,
            construyendo sistemas robustos y escalables con enfoque en arquitectura solida y
            codigo limpio.
          </p>
        </SectionBlock>
        <SectionBlock label="Mision">
          <p className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 2 }}>
            Crear software que redefine la forma en que interactuamos con la tecnologia,
            enfocado en una arquitectura agil y calidad excepcional para anticipar futuros
            desafios.
          </p>
        </SectionBlock>
      </div>

      <div className="divider" />

      {/* Objetivos */}
      <SectionBlock label="Objetivos Profesionales">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          {OBJETIVOS.map((o, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
              padding: '0.75rem 1rem',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '4px'
            }}>
              <span className="mono" style={{ color: 'var(--accent)', fontSize: '0.6rem', marginTop: '0.2rem', flexShrink: 0 }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{o}</span>
            </div>
          ))}
        </div>
      </SectionBlock>

      <div className="divider" />

      {/* Skills */}
      <SectionBlock label="Stack Tecnologico">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {SKILLS.map(({ Icon, label, color }) => (
            <div key={label} className="skill-pill"
              onMouseEnter={e => {
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.color = color;
              }}
              onMouseLeave={e => {
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.color = '';
              }}
            >
              <Icon style={{ fontSize: '0.95rem', transition: 'color 0.25s' }} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </SectionBlock>

      <div className="divider" />

      {/* Valores + Competencias */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <SectionBlock label="Valores">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {VALORES.map(v => (
              <span key={v} className="tag tag-accent">{v}</span>
            ))}
          </div>
        </SectionBlock>
        <SectionBlock label="Competencias">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {COMPETENCIAS.map(c => (
              <span key={c} className="tag">{c}</span>
            ))}
          </div>
        </SectionBlock>
      </div>

      <div className="divider" />

      {/* Contacto */}
      <SectionBlock label="Contacto">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="mailto:garciacamposjohan18@gmail.com" className="contact-link">
            <FaEnvelope style={{ fontSize: '0.85rem', color: 'var(--accent)' }} />
            garciacamposjohan18@gmail.com
          </a>
          <a href="https://www.instagram.com/xanthus_24/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaInstagram style={{ fontSize: '0.85rem', color: 'var(--accent2)' }} />
            @xanthus_24
          </a>
        </div>
      </SectionBlock>

    </Layout>
  </div>
);

export default About;
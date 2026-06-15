import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { GoArrowUpRight, GoArrowLeft } from 'react-icons/go';
import { PROJECTS } from '../data/projects';
import { SOCIAL } from '../data/config';

const W = { maxWidth: '100rem', margin: '0 auto', padding: '0 1.5rem' };

const VARIANTS = {
  blue:   { bg: 'rgba(99,179,255,0.1)',  color: '#63b3ff', border: 'rgba(99,179,255,0.28)' },
  green:  { bg: 'rgba(52,211,153,0.1)',  color: '#34d399', border: 'rgba(52,211,153,0.28)' },
  orange: { bg: 'rgba(251,146,60,0.1)',  color: '#fb923c', border: 'rgba(251,146,60,0.28)' },
  purple: { bg: 'rgba(167,139,250,0.1)', color: '#a78bfa', border: 'rgba(167,139,250,0.28)' },
  red:    { bg: 'rgba(248,113,113,0.1)', color: '#f87171', border: 'rgba(248,113,113,0.28)' },
  yellow: { bg: 'rgba(250,204,21,0.1)',  color: '#facc15', border: 'rgba(250,204,21,0.28)' },
  teal:   { bg: 'rgba(45,212,191,0.1)',  color: '#2dd4bf', border: 'rgba(45,212,191,0.28)' },
};

const CircuitDecoration = () => (
  <svg width="52" height="44" viewBox="0 0 52 44" fill="none">
    <circle cx="8"  cy="38" r="2.5" fill="rgba(99,179,255,0.35)" />
    <circle cx="28" cy="22" r="2.5" fill="rgba(99,179,255,0.25)" />
    <circle cx="46" cy="6"  r="2.5" fill="rgba(99,179,255,0.18)" />
    <line x1="8" y1="38" x2="28" y2="22" stroke="rgba(99,179,255,0.2)"  strokeWidth="0.8" />
    <line x1="28" y1="22" x2="46" y2="6"  stroke="rgba(99,179,255,0.14)" strokeWidth="0.8" />
  </svg>
);

// ── Drawer ───────────────────────────────────────────────────────────────────
const ProjectDrawer = ({ project, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 380);
  }, [onClose]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [handleClose]);

  return (
    <>
      <div
        onClick={handleClose}
        aria-hidden="true"
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(8,12,16,0.7)', backdropFilter: 'blur(4px)',
          opacity: visible ? 1 : 0, transition: 'opacity 0.35s ease',
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        style={{
          position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 201,
          maxHeight: '95vh', background: 'var(--bg)',
          borderTop: '1px solid var(--border)', borderRadius: '20px 20px 0 0',
          overflowY: 'auto',
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.38s cubic-bezier(0.32, 0.72, 0, 1)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', padding: '0.9rem 0 0' }}>
          <div style={{ width: '40px', height: '4px', borderRadius: '2px', background: 'var(--border)' }} />
        </div>

        <div style={{ ...W, padding: '1rem 1.5rem 2rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <button
              onClick={handleClose}
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <GoArrowLeft style={{ color: '#080c10', fontSize: '1rem' }} />
              </div>
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'var(--text-secondary)', letterSpacing: '0.08em' }}>
                Volver
              </span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', align: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.12em' }}>
                  {project.type}
                </span>
              </div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
                {project.title}
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.stack.map(({ Icon, color, label }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.3rem 0.7rem', borderRadius: '999px', background: color + '18', border: `1px solid ${color}44` }}>
                    <Icon style={{ fontSize: '0.8rem', color }} />
                    <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color, letterSpacing: '0.06em' }}>{label}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.5rem', background: 'var(--accent)', borderRadius: '999px', textDecoration: 'none', fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#080c10', width: 'fit-content', transition: 'opacity 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  <FaGithub /> Ver Código <GoArrowUpRight />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.5rem', background: 'transparent', border: '1px solid var(--accent3)', borderRadius: '999px', textDecoration: 'none', fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent3)', width: 'fit-content', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    open.live() <GoArrowUpRight />
                  </a>
                )}
              </div>
            </div>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 2, paddingTop: '0.5rem' }}>
              {project.desc}
            </p>
          </div>

          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--surface2)' }}>
            {project.img ? (
              <img src={project.img} alt={project.title} style={{ width: '100%', display: 'block', maxHeight: '520px', objectFit: 'contain', background: 'var(--surface2)' }} />
            ) : (
              <div style={{ width: '100%', aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', background: 'var(--surface)' }}>
                <FaGithub style={{ fontSize: '3rem', color: 'var(--text-muted)' }} />
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>preview próximamente</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// ── Card ─────────────────────────────────────────────────────────────────────
const ProjectCard = ({ project, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const v = VARIANTS[project.categoryVariant] || VARIANTS.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: 'pointer',
        background: 'var(--surface)',
        border: '1px solid',
        borderColor: hovered ? 'var(--border-hover)' : 'var(--border)',
        borderRadius: '8px',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.1rem',
        transition: 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.28s ease, border-color 0.28s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 55px rgba(0,0,0,0.45), 0 0 30px rgba(99,179,255,0.04)' : '0 2px 12px rgba(0,0,0,0.2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle glow on hover */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: hovered ? `linear-gradient(90deg, transparent, ${v.color}44, transparent)` : 'transparent',
        transition: 'background 0.3s ease',
      }} />

      {/* Top row: category tag + circuit + number */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <span
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '0.6rem',
            letterSpacing: '0.1em',
            padding: '0.25rem 0.65rem',
            borderRadius: '3px',
            background: v.bg,
            color: v.color,
            border: `1px solid ${v.border}`,
            textTransform: 'uppercase',
          }}
        >
          {project.category}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <CircuitDecoration />
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.12em' }}>
            /{project.number}
          </span>
        </div>
      </div>

      {/* Title */}
      <div>
        <h3
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.3rem, 2.2vw, 1.65rem)',
            color: 'var(--text-primary)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '0.35rem',
            transition: 'color 0.22s',
          }}
        >
          {project.title}
        </h3>
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
          {project.type}
        </p>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '0.75rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.85,
          flexGrow: 1,
        }}
      >
        {project.shortDesc}
      </p>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {project.stack.map(({ label }) => (
          <span
            key={label}
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.58rem',
              letterSpacing: '0.08em',
              padding: '0.2rem 0.55rem',
              border: '1px solid var(--border)',
              borderRadius: '3px',
              color: 'var(--text-muted)',
            }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Footer: GitHub link */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', marginTop: '0.25rem' }}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '0.68rem',
            color: hovered ? 'var(--accent)' : 'var(--text-muted)',
            letterSpacing: '0.08em',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            transition: 'color 0.22s',
          }}
        >
          open.code() <GoArrowUpRight style={{ fontSize: '0.85rem' }} />
        </a>
      </div>
    </motion.div>
  );
};

// ── Section ───────────────────────────────────────────────────────────────────
ProjectDrawer.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    desc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    liveUrl: PropTypes.string,
    img: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.shape({
      Icon: PropTypes.elementType.isRequired,
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    categoryVariant: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shortDesc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    stack: PropTypes.array.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

const Projects = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <section id="proyectos" style={{ padding: '6rem 0' }}>
      <div style={W}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Portafolio</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              Proyectos
            </h2>
          </div>
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.22s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <FaGithub style={{ fontSize: '0.9rem' }} /> Ver GitHub <GoArrowUpRight />
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={() => setSelected(p)} />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectDrawer project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default Projects;
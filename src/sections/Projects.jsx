import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { GoArrowUpRight, GoArrowLeft } from 'react-icons/go';
import { PROJECTS } from '../data/projects';
import { SOCIAL } from '../data/config';

const W = { maxWidth: '90rem', margin: '0 auto', padding: '0 1.5rem' };

// ── Drawer que sube desde abajo ─────────────────────────────────────────────
const ProjectDrawer = ({ project, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 380);
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* overlay oscuro */}
      <div
        onClick={handleClose}
        aria-hidden="true"
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(8,12,16,0.7)', backdropFilter: 'blur(4px)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.35s ease',
        }}
      />

      {/* panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        style={{
          position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 201,
          maxHeight: '90vh',
          background: 'var(--bg)',
          borderTop: '1px solid var(--border)',
          borderRadius: '20px 20px 0 0',
          overflowY: 'auto',
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.38s cubic-bezier(0.32, 0.72, 0, 1)',
        }}
      >
        {/* drag handle decorativo */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '0.9rem 0 0' }}>
          <div style={{ width: '40px', height: '4px', borderRadius: '2px', background: 'var(--border)' }} />
        </div>

        <div style={{ ...W, padding: '2rem 1.5rem 4rem' }}>

          {/* botón volver — igual al ref: icono circulo + texto */}
          <div style={{ marginBottom: '2.5rem' }}>
            <button
              onClick={handleClose}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              }}
            >
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <GoArrowLeft style={{ color: '#080c10', fontSize: '1rem' }} />
              </div>
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'var(--text-secondary)', letterSpacing: '0.08em' }}>
                Volver
              </span>
            </button>
          </div>

          {/* titulo + tags + desc */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.5rem', background: 'var(--accent)', borderRadius: '999px', textDecoration: 'none', fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#080c10', width: 'fit-content', transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <FaGithub /> Ver Codigo <GoArrowUpRight />
              </a>
            </div>

            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 2, paddingTop: '0.5rem' }}>
              {project.desc}
            </p>
          </div>

          {/* imagen */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--surface2)' }}>
            {project.img ? (
              <img src={project.img} alt={project.title} style={{ width: '100%', display: 'block', maxHeight: '520px', objectFit: 'contain', background: 'var(--surface2)' }} />
            ) : (
              <div style={{ width: '100%', aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', backgroundImage: 'linear-gradient(rgba(99,179,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px', background: 'var(--surface)' }}>
                <FaGithub style={{ fontSize: '3rem', color: 'var(--text-muted)' }} />
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>preview proximamente</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// ── Tarjeta del grid ────────────────────────────────────────────────────────
const ProjectCard = ({ project, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer', borderRadius: '16px', overflow: 'hidden',
        background: 'var(--surface)', border: '1px solid var(--border)',
        transition: 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.28s ease, border-color 0.28s ease',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.5)' : '0 2px 12px rgba(0,0,0,0.2)',
        borderColor: hovered ? 'var(--border-hover)' : 'var(--border)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--surface2)' }}>
        {project.img ? (
          <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem', background: 'linear-gradient(135deg, #0e1420 0%, #141c2a 100%)' }}>
            <FaGithub style={{ fontSize: '2rem', color: 'var(--text-muted)' }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>preview proximamente</span>
          </div>
        )}
      </div>
      <div style={{ padding: '1rem 1.1rem 1.2rem' }}>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
          {project.title}
        </h3>
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {project.shortDesc || project.desc}
        </p>
      </div>
    </div>
  );
};

// ── Seccion principal ───────────────────────────────────────────────────────
ProjectDrawer.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    shortDesc: PropTypes.string,
    link: PropTypes.string.isRequired,
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
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    shortDesc: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

const Projects = () => {
  const [selected, setSelected] = useState(null);

  // bloquear scroll del body cuando el drawer esta abierto
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <section id="proyectos" style={{ padding: '6rem 0' }}>
      <div style={W}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Portafolio</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              Proyectos
            </h2>
          </div>
          <a
            href={SOCIAL.github} target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.22s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <FaGithub style={{ fontSize: '0.9rem' }} /> Ver GitHub <GoArrowUpRight />
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {PROJECTS.map(p => (
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
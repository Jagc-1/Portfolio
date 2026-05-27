import { FaGithub } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import { useState } from 'react';

const ProjectCard = ({ img, title, desc, link, date, stack = [], featured = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        textDecoration: 'none',
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        transition: 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.28s ease, border-color 0.28s ease',
        transform: hovered ? 'translateY(-4px) scale(1.008)' : 'translateY(0) scale(1)',
        boxShadow: hovered ? '0 24px 64px rgba(0,0,0,0.55), 0 0 30px rgba(99,179,255,0.06)' : '0 4px 16px rgba(0,0,0,0.2)',
        borderColor: hovered ? 'var(--border-hover)' : 'var(--border)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* image */}
      <div style={{
        position: 'relative', width: '100%',
        aspectRatio: featured ? '21/9' : '16/9',
        overflow: 'hidden', background: 'var(--surface2)'
      }}>
        {img ? (
          <img
            src={img}
            alt={title}
            style={{
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              transition: 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
            background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface2) 100%)',
            backgroundImage: 'linear-gradient(rgba(99,179,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,255,0.03) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}>
            <FaGithub style={{ fontSize: '2rem', color: 'var(--text-muted)' }} />
            <span className="mono" style={{ fontSize: '0.62rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              preview proximamente
            </span>
          </div>
        )}
        {/* arrow - bottom right corner */}
        <div style={{
          position: 'absolute', bottom: 0, right: 0,
          background: 'var(--accent)',
          borderRadius: '10px 0 0 0',
          padding: '7px 8px 8px 9px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <GoArrowUpRight style={{
            color: '#080c10', fontSize: '1.15rem',
            transition: 'transform 0.22s ease',
            transform: hovered ? 'rotate(-5deg) scale(1.15)' : 'rotate(0deg)',
          }} />
        </div>
        {/* featured badge */}
        {featured && (
          <div style={{
            position: 'absolute', top: '1rem', left: '1rem',
            background: 'rgba(8,12,16,0.75)', backdropFilter: 'blur(8px)',
            border: '1px solid var(--border-hover)', borderRadius: '3px',
            padding: '0.2rem 0.55rem',
            fontFamily: 'DM Mono, monospace', fontSize: '0.6rem',
            color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase',
          }}>Destacado</div>
        )}
      </div>

      {/* content */}
      <div style={{ padding: featured ? '1.1rem 1.3rem 1.3rem' : '0.9rem 1.1rem 1.1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <h3 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 700,
            fontSize: featured ? '1.2rem' : '1rem',
            color: 'var(--text-primary)', lineHeight: 1.2,
          }}>{title}</h3>
          {date && (
            <span className="mono" style={{ fontSize: '0.58rem', color: 'var(--text-muted)', letterSpacing: '0.08em', whiteSpace: 'nowrap', paddingTop: '0.2rem', flexShrink: 0 }}>
              {date}
            </span>
          )}
        </div>

        {desc && (
          <p className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '0.8rem' }}>
            {desc}
          </p>
        )}

        {/* stack icons */}
        {stack.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {stack.map(({ Icon, color, label }) => (
              <div
                key={label}
                title={label}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                  padding: '0.22rem 0.5rem',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = color + '55'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <Icon style={{ fontSize: '0.85rem', color }} />
                <span className="mono" style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
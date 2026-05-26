import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';

const ProjectCard = ({ img, title, desc, link, date }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="project-card" onClick={() => setOpen(!open)}>
      <div style={{ position: 'relative', overflow: 'hidden', height: '10rem' }}>
        <img src={img} alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', display: 'block', transform: open ? 'scale(1.04)' : 'scale(1)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(8,12,16,0.97))' }} />
        <div style={{ position: 'absolute', bottom: '0.75rem', left: '1rem', right: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>{title}</h3>
          {date && <span className="mono" style={{ fontSize: '0.58rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>{date}</span>}
        </div>
      </div>

      <div style={{
        maxHeight: open ? '180px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
        borderTop: open ? '1px solid var(--border)' : 'none',
        padding: open ? '1rem' : '0 1rem',
      }}>
        {desc && <p className="mono" style={{ fontSize: '0.73rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '0.75rem' }}>{desc}</p>}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="btn-primary" style={{ fontSize: '0.62rem', padding: '0.35rem 0.8rem' }}>
            <FaGithub /> Codigo <GoArrowUpRight />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
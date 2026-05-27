import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--border)' }}>
    <div style={{ maxWidth: '60rem', margin: '0 auto', padding: '2rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
      <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
        © {new Date().getFullYear()} Johan Campos — Full Stack Developer
      </span>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="https://github.com/XanthusCode" target="_blank" rel="noopener noreferrer"
          style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.22s' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
        ><FaGithub /></a>
        <a href="https://www.linkedin.com/in/johan-alexander-garcia/" target="_blank" rel="noopener noreferrer"
          style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.22s' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
        ><FaLinkedin /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
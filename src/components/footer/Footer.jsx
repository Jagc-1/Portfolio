import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--border)', marginTop: '6rem' }}>
    <div className="w-full max-w-5xl mx-auto px-6 py-8 flex items-center justify-between flex-wrap gap-4">
      <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
        © {new Date().getFullYear()} Johan Campos — Full Stack Developer
      </span>
      <div className="flex items-center gap-4">
        <a href="https://github.com/XanthusCode" target="_blank" rel="noopener noreferrer"
          style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.25s' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
        ><FaGithub /></a>
        <a href="https://www.linkedin.com/in/johan-alexander-garcia/" target="_blank" rel="noopener noreferrer"
          style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.25s' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
        ><FaLinkedin /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
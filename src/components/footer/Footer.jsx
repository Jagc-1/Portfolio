import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SOCIAL, OWNER } from '../../data/config';

const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--border)' }}>
    <div style={{ maxWidth: '90rem', margin: '0 auto', padding: '2rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
      <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
        © {new Date().getFullYear()} {OWNER.name} — {OWNER.role}
      </span>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a
          href={SOCIAL.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="footer-social-link"
        >
          <FaGithub />
        </a>
        <a
          href={SOCIAL.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="footer-social-link footer-social-link--linkedin"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

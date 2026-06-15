import PropTypes from 'prop-types';

const Navbar = ({ activeSection }) => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(8, 12, 16, 0.88)', backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: '90rem', margin: '0 auto', padding: '0 1.5rem', height: '3.5rem', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', gap: '1.75rem' }}>
            {[['hero', 'Inicio'], ['proyectos', 'Proyectos'], ['sobre-mi', 'Sobre mi']].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className={`nav-link ${activeSection === id ? 'active' : ''}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  activeSection: PropTypes.string,
};

Navbar.defaultProps = {
  activeSection: '',
};
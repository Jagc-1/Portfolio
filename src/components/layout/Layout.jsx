import PropTypes from 'prop-types';

const Layout = ({ children, className }) => (
  <div className={`w-full max-w-5xl mx-auto px-6 ${className || ''}`}>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Layout;
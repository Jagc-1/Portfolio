const Layout = ({ children, className }) => (
  <div className={`w-full max-w-5xl mx-auto px-6 ${className || ''}`}>
    {children}
  </div>
);

export default Layout;
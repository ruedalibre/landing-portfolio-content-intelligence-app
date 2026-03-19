const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar__content">
        <div className="navbar__logo">Content Intelligence</div>

        <div className="navbar__actions">
          <button>About</button>
          <button>Contact</button>
          <button className="primary">Request Access</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
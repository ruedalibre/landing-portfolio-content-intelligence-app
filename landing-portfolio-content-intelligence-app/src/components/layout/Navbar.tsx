const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar__content">
        {/* LOGO / BRAND */}
        <div className="navbar__logo">
          Content <span>Intelligence</span>
        </div>

        {/* LINKS */}
        <div className="navbar__links">
          <a href="#product">Product</a>
          <a href="#how">How it works</a>
          <a href="#contact">Contact</a>
        </div>

        {/* CTA */}
        <div className="navbar__actions">
          <button className="btn btn--primary">Request Access</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

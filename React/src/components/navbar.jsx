import "./navbar.css";

function Navbar() {
  return (
    <header className="site-navbar">
      <div className="brand-block">
        <span className="brand-mark">S</span>
        <div>
          <p className="brand-name">Summer Studio</p>
          <p className="brand-tag">React components</p>
        </div>
      </div>

      <nav className="nav-links" aria-label="main navigation">
        <a href="#login">Login</a>
        <a href="#signup">Signup</a>
        <a href="#dashboard">Dashboard</a>
      </nav>

      <button type="button" className="nav-action">
        Start now
      </button>
    </header>
  );
}

export default Navbar;
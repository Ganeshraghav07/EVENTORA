import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("eventoraUser"));

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("eventoraUser");
    setMenuOpen(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        ✦ EVENTORA
      </Link>

      {/* Desktop + Mobile Navigation */}
      <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/events" onClick={closeMenu}>
          Events
        </Link>

        {user ? (
          <>
            <Link to="/bookings" onClick={closeMenu}>
              Bookings
            </Link>

            <Link to="/wishlist" onClick={closeMenu}>
              ❤️ Wishlist
            </Link>

            <Link to="/profile" onClick={closeMenu}>
              Profile
            </Link>

            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={closeMenu}>
              Login
            </Link>

            <Link
              to="/register"
              className="nav-register"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;
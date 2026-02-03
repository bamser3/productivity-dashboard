import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Dashboard</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/stats">Stats</Link>
    </nav>
  );
}

export default Navbar;

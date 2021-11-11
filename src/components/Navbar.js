import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <div className="nav-links">
            <Link to="/" className="text-link">
              Home
            </Link>
            <Link to="/About" className="text-link">
              AboutUS
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

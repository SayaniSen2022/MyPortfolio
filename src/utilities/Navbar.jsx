import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className={showMenu ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? "text-orange-500" : "text-white";
                }}
                onClick={() => setShowMenu(!showMenu)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive ? "text-orange-500" : "text-white";
                }}
                onClick={() => setShowMenu(!showMenu)}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMenu(!showMenu)}>
            <GiHamburgerMenu className="ham" />
          </a>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

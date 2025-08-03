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
                  return isActive ? "text-yellow-200" : "text-white";
                }}
                onClick={() => setShowMenu(!showMenu)}
              >
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive ? "text-yellow-200" : "text-white";
                }}
                onClick={() => setShowMenu(!showMenu)}
              >
                About
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                  to="/projects"
                  className={({ isActive }) => {
                    return isActive ? "text-yellow-200" : "text-white";
                  }}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Projects
              </NavLink>
            </li> */}
            <li>
              <NavLink
                  to="/contact"
                  className={({ isActive }) => {
                    return isActive ? "text-yellow-200" : "text-white";
                  }}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Contact Me
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

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { IconContext } from "react-icons";

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
                  return isActive ? "text-orange-500" : "text-blue-500";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive ? "text-orange-500" : "text-blue-500";
                }}
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

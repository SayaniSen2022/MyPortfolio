import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
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
                  return isActive ? "text-teal-300" : "text-zinc-200";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive ? "text-teal-300" : "text-zinc-200";
                }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://twitter.com/sayani___" target="_blank">
                <FaTwitterSquare className="twitter" />
              </a>
            </li>
            <li>
              <a href="https://github.com/SayaniSen2022" target="_blank">
                <FaGithubSquare className="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sayani-sen-535749147/"
                target="_blank"
              >
                <FaLinkedin className="linkedin" />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMenu(!showMenu)}>
              <GiHamburgerMenu className="ham" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

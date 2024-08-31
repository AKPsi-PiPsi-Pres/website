import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

export default function NavLinks({ isMobile, closeMobileMenu }) {
  const linkClass = isMobile ? "NavLink mobile" : "NavLink";
  const handleClick = isMobile ? closeMobileMenu : () => {};

  return (
    <ul className={`nav-links ${isMobile ? "mobile" : ""}`}>
      <li>
        <NavLink
          exact
          to="/"
          activeclassname="active"
          className={linkClass}
          onClick={handleClick}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          activeclassname="active"
          className={linkClass}
          onClick={handleClick}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/meet-us"
          activeclassname="active"
          className={linkClass}
          onClick={handleClick}
        >
          Meet Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/brotherhood"
          activeclassname="active"
          className={linkClass}
          onClick={handleClick}
        >
          Brotherhood
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/careers"
          activeclassname="active"
          className={linkClass}
          onClick={handleClick}
        >
          Careers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/recruitment"
          activeclassname="active"
          className={linkClass}
          onClick={handleClick}
        >
          Recruitment
        </NavLink>
      </li>
    </ul>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

export default function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink exact to="/" activeclassname="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeclassname="active">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/meet-us" activeclassname="active">
          Meet Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/brotherhood" activeclassname="active">
          Brotherhood
        </NavLink>
      </li>
      <li>
        <NavLink to="/careers" activeclassname="active">
          Careers
        </NavLink>
      </li>
      <li>
        <NavLink to="/recruitment" activeclassname="active">
          Recruitment
        </NavLink>
      </li>
    </ul>
  );
}

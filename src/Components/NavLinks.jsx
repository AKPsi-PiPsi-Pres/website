import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

export default function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink exact to="/" activeclassname="active" className={"NavLink"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeclassname="active" className={"NavLink"}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/meet-us" activeclassname="active" className={"NavLink"}>
          Meet Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/brotherhood" activeclassname="active" className={"NavLink"}>
          Brotherhood
        </NavLink>
      </li>
      <li>
        <NavLink to="/careers" activeclassname="active" className={"NavLink"}>
          Careers
        </NavLink>
      </li>
      <li>
        <NavLink to="/recruitment" activeclassname="active" className={"NavLink"}>
          Recruitment
        </NavLink>
      </li>
    </ul>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

export default function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/meet-us" activeClassName="active">
          Meet Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/brotherhood" activeClassName="active">
          Brotherhood
        </NavLink>
      </li>
      <li>
        <NavLink to="/careers" activeClassName="active">
          Careers
        </NavLink>
      </li>
      <li>
        <NavLink to="/recruitment" activeClassName="active">
          Recruitment
        </NavLink>
      </li>
    </ul>
  );
}

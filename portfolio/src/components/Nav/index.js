import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <Navbar expand="lg" bg="dark navcustom justify-content-end" sticky="top">
        <NavLink className="nav-link " to="/aboutMe">
          <div class="text-light">
            <h4 class="nav-title-font">Mathew Calkins</h4>
          </div>
        </NavLink>
        <ul class="navbar-nav nav justify-content-end ml-auto navitem-indent navcustom">
          <li class="nav-item">
            <NavLink to="/aboutMe">
              <div class="nav-font text-light">About Me</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/portfolio">
              <div class="nav-font text-light">Portfolio</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/contact">
              <div class="nav-font text-light">Contact</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/resume">
              <div class="nav-font text-light">Resume</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Nav;
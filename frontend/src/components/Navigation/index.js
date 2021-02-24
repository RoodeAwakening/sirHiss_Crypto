import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

import nav_logo from "../../images/nav_logo.png";

function Navigation({ isLoaded }) {
  // get the user session
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" id="nav_login-btn">
          <h1>Log In</h1>
        </NavLink>

        <NavLink to="/signup" id="nav_signup-btn">
          <h1>Sign Up</h1>
        </NavLink>
      </>
    );
  }
  return (
    <div className="nav_body">
      <div className="nav_links">

        <ul>
          <li id="nav_home_logo">
            <NavLink exact to="/" id="nav_home-btn">
              <img src={nav_logo} />
            </NavLink>
          </li>
        </ul>

<div className="nav_linkButtons-spacer">
    <div>

        <ul className="nav_general-links">
          <li>
            <h1>Products <i class="fas fa-chevron-down"></i> </h1>
          </li>
          <li>
            <h1>Learn <i class="fas fa-chevron-down"></i></h1>
          </li>
          <li>
            <h1>Support</h1>
          </li>
          <li>
            <h1>Who we are <i class="fas fa-chevron-down"></i></h1>
          </li>
        </ul>
    </div>

<div>

        <ul>
          <li id="nav_login-signup">{isLoaded && sessionLinks}</li>
        </ul>
</div>

        
</div>
      </div>
    </div>
  );
}

export default Navigation;

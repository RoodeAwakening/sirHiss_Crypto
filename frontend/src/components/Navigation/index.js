import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  // get the user session
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }
  return (
    <div className="nav_body">
      <ul className="nav_links">
        <li id="nav_home_logo">
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li id="nav_login-signup">{isLoaded && sessionLinks}</li>
      </ul>
    </div>
  );
}

export default Navigation;

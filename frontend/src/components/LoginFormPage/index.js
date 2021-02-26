import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./LoginForm.css";
import loginBackground from "../../images/login_left.jpg";

function LoginFormPage() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/dashboard" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };
  return (
    <div className="login_Body">
      <div className="login_left">
        <div className="login_left-container">
          <img src={loginBackground} id="login_left-image" />
        </div>
      </div>

      <div className="login_right">
        <div className="login_Form_Container">
          <form className="login_Form" onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <h1 id="login_header">Welcome to SirHiss Crypto</h1>
            <h2 className="login_text">Email or username</h2>
            <label id="login_Name">
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                placeholder="Username or Email"
              />
            </label>
            <h2 className="login_text">Password</h2>
            <label id="login_Password">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </label>
            <button type="submit" id="login_Button">
              Sign In
            </button>
          </form>
                <div>
          <h4>Demo login </h4>
          <h4>Username: Demo-lition </h4>
          <h4>Password: password</h4>
                </div>
        </div>
      </div>
    </div>
  );
}

export default LoginFormPage;

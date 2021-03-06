import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./LoginForm.css";
import loginBackground from "../../images/login_left.jpg";

function LoginFormPage() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  let [credential, setCredential] = useState("");
  let [password, setPassword] = useState("");

  const [errors, setErrors] = useState([]);
  console.log("credential-", credential);
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

  const setDemoLogin = (e) => {
    e.preventDefault();
    credential = "Demo-lition";
    password = "password";
    return dispatch(sessionActions.login({ credential, password }));
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
          <div>
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
          {/* ------------------- */}
          
          <form onSubmit={setDemoLogin}>
            <button type="submit" id="login_Button-demo">
              Demo Login
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginFormPage;

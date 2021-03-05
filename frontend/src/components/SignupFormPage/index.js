import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); //added
  const [funds, setFunds] = useState(0.0); //added
  const [password, setPassword] = useState(""); //added
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/dashboard" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({
          email,
          username,
          password,
          firstName,
          lastName,
          funds,
        })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors(["Passwords don't match."]);
  };

  return (
    <div className="signup_wrapper">
      <div className="signup_left">
        <div className="signup_Body">
          <div className="signup_Form_Container">
            <form className="signup_Form" onSubmit={handleSubmit}>
              <ul>
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>
              <label id="signup_Email">
                Email
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label id="signup_Username">
                Username
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
              <label id="signup_firstName">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </label>
              <label id="signup_lastName">
                <input
                  placeholder="Last Name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </label>
              <label id="signup_Password">
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <label id="signup_Confirm_Password">
                Confirm Password
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </label>
              <button id="signup_Button" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="signup_right">
        <div>
          <ul>
            <li>
              <h1>Commission-free trading</h1>
              <h2>
                Break free from commission-fees and make unlimited
                commission-free trades in crypto with SirHiss Crypto. Other fees
                may apply.{" "}
              </h2>
            </li>
            <li>
              <h1>Account Protection</h1>
              <h2>
                SirHiss Crypto is a member of SIPC. Securities in your account
                protected up to $500,000.
              </h2>
            </li>
            <li>
              <h1>Stay on top of your portfolio</h1>
              <h2>
                Set up customized news and notifications to stay on top of your
                assets as casually or as relentlessly as you like. Controlling
                the flow of info is up to you.
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SignupFormPage;

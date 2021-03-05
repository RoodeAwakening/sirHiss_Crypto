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
        <h1>Make Your Money Move</h1>
        <h2>
          Robinhood lets you invest in companies you love, commission-free.
        </h2>
        <h3>
          Please enter your full legal name. Your legal name should match any
          form of government ID.
        </h3>
        <div className="signup_Body">
          <div className="signup_Form_Container">
            <form className="signup_Form" onSubmit={handleSubmit}>
              <ul>
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>
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
              <label id="signup_Email">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label id="signup_Username">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
              <label id="signup_Password">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <label id="signup_Confirm_Password">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </label>
              <div className="signup_button-container">
                <button id="signup_Button" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <h4>
          All investments involve risk, including the possible loss of
          principal. Investors should consider their investment objectives and
          risks carefully before investing.
        </h4>
        <h4>
          Commission-free trading means $0 commission trading on self-directed
          individual cash or margin brokerage accounts that trade U.S. listed
          securities via mobile devices or web. Keep in mind, other fees such as
          trading (non-commission) fees, Gold subscription fees, wire transfer
          fees, and paper statement fees may apply to your brokerage account.
          Please see SirHiss's fee schedule to learn more.
        </h4>
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

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../SignUp.css"; // Import your CSS file for styling

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    /* if statement should check if email and password match a email username combo in database */
    if (email && password) {
      /* should actually do something to be on user's account, not just go to explore */
      navigate("/explore");
    } else {
      alert("Incorrect username or password.");
      return;
    }
  };

  return (
    <div className="supage-container">
      <div className="signup-container">
        <h2>Log In</h2>
        {/* Email */}
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="inputStyle"
              required
            />
          </label>
        </div>
        {/* Password */}
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="inputStyle"
              required
            />
          </label>
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>
            Log In
          </button>
        </div>
      </div>

      <div className="signup-container">
        <h2>Don't have an account? Sign Up</h2>
        <div className="signup-box">
          <Link to="/student-signup">
            <div className="box-content">
              <h3>I am a Student</h3>
            </div>
          </Link>
        </div>
        <div className="signup-box">
          <Link to="/advisor-signup">
            <div className="box-content">
              <h3>I am a Research Advisor</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

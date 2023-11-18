import React from "react";
import { Link } from "react-router-dom";
import "../SignUp.css"; // Import your CSS file for styling

const SignUp = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
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
  );
};

export default SignUp;

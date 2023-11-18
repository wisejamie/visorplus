import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SignUp.css";

const AdvisorSignup = () => {
  const [step, setStep] = useState(1); // Initial step is 1
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Additional fields for the second step
  const [researchInterests, setResearchInterests] = useState("");
  const [levelOfEducation, setDesiredLevelOfEducation] = useState("");
  const [skills, setDesiredSkills] = useState("");
  const [experience, setDesiredExperience] = useState("");
  const [fieldOfResearch, setFieldOfResearch] = useState("");

  const navigate = useNavigate();

  const handleNext = () => {
    // Validate the required fields before proceeding to the next step
    if (step === 1 && firstName && lastName && email && password) {
      // Move to the next step
      setStep(step + 1);
    } else {
      alert("Please fill in all required fields.");
      return;
    }
  };

  const handleSubmit = () => {
    // Perform form submission logic here
    console.log("Form submitted!");
    console.log({
      firstName,
      lastName,
      email,
      password,
      researchInterests,
      levelOfEducation,
      skills,
      experience,
      fieldOfResearch,
    });

    if (
      step === 2 &&
      researchInterests &&
      levelOfEducation &&
      skills &&
      experience &&
      fieldOfResearch
    ) {
      navigate("/explore");
    } else {
      alert("Please fill in all required fields.");
      return;
    }
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Step 1: Personal Information</h2>
          <form>
            {/* First Name */}
            <div>
              <label>
                First Name:
                <input
                  type="text"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  className="inputStyle"
                  required
                />
              </label>
            </div>
            {/* Last Name */}
            <div>
              <label>
                Last Name:
                <input
                  type="text"
                  value={lastName}
                  onChange={handleLastNameChange}
                  className="inputStyle"
                  required
                />
              </label>
            </div>
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
            {/* Next button */}
            <div>
              <button type="button" onClick={handleNext}>
                Next
              </button>
            </div>
          </form>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Additional Information</h2>
          <form onSubmit={handleSubmit}>
            {/* Research Interests */}
            <div>
              <label>
                Research Interests:
                <input
                  type="text"
                  value={researchInterests}
                  onChange={(e) => setResearchInterests(e.target.value)}
                  required
                />
              </label>
            </div>
            {/* Level of Education */}
            <div>
              <label>
                Desired Level of Education:
                <input
                  type="text"
                  value={levelOfEducation}
                  onChange={(e) => setDesiredLevelOfEducation(e.target.value)}
                  required
                />
              </label>
            </div>
            {/* Skills */}
            <div>
              <label>
                Desired Skills:
                <input
                  type="text"
                  value={skills}
                  onChange={(e) => setDesiredSkills(e.target.value)}
                  required
                />
              </label>
            </div>
            {/* Experience */}
            <div>
              <label>
                Desired Experience:
                <input
                  type="text"
                  value={experience}
                  onChange={(e) => setDesiredExperience(e.target.value)}
                  required
                />
              </label>
            </div>
            {/* Field of Study */}
            <div>
              <label>
                Field of Research:
                <input
                  type="text"
                  value={fieldOfResearch}
                  onChange={(e) => setFieldOfResearch(e.target.value)}
                  required
                />
              </label>
            </div>
            {/* Submit button */}
            <div>
              <button type="button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdvisorSignup;

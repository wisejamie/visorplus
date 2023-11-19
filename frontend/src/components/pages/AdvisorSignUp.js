import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SignUp.css";

const AdvisorSignup = () => {
  const [step, setStep] = useState(1); // Initial step is 1
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [loggedInEmail, setLoggedInEmail] = useState("");
  const [adviseeOrAdvisor, setAorA] = useState("");

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

  const handleProfilePictureChange = (e) => {
    // Update the profile picture state when a file is selected
    setProfilePicture(e.target.files[0]);
  };

  // Additional fields for the second step
  const [researchInterest1, setResearchInterest1] = useState("");
  const [researchInterest2, setResearchInterest2] = useState("");
  const [researchInterest3, setResearchInterest3] = useState("");
  const [levelOfEducation, setLevelOfEducation] = useState("");
  const [school, setSchool] = useState("");
  const [fieldOfResearch, setFieldOfResearch] = useState("");
  const [bio, setBio] = useState("");

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
      researchInterest1,
      researchInterest2,
      researchInterest3,
      levelOfEducation,
      school,
      fieldOfResearch,
      bio,
    });

    if (
      step === 2 &&
      researchInterest1 &&
      levelOfEducation &&
      school &&
      fieldOfResearch
    ) {
      const postData = {
        firstNameAdvisors: firstName,
        lastNameAdvisors: lastName,
        emailAdvisors: email,
        passwordAdvisors: password,
        interest1Advisors: researchInterest1,
        interest2Advisors: researchInterest2,
        interest3Advisors: researchInterest3,
        openToAdvisors: levelOfEducation,
        schoolAdvisors: school,
        departmentAdvisors: fieldOfResearch,
        bioAdvisors: bio,
      };

      fetch("http://127.0.0.1:5000/advisor/add_user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server
          console.log("Server response:", data);
          // Redirect or perform additional actions as needed
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      setLoggedInEmail(email);
      setAorA("advisor");
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
            {/* Profile Picture */}
            <div>
              <label>
                Profile Picture:
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
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
                Research Interest #1 *:
                <input
                  type="text"
                  value={researchInterest1}
                  onChange={(e) => setResearchInterest1(e.target.value)}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Research Interest #2:
                <input
                  type="text"
                  value={researchInterest2}
                  onChange={(e) => setResearchInterest2(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Research Interest #3:
                <input
                  type="text"
                  value={researchInterest3}
                  onChange={(e) => setResearchInterest3(e.target.value)}
                />
              </label>
            </div>
            {/* Level of Education */}
            <div>
              <label>
                Minimum Desired Level of Education *:
                <select
                  value={levelOfEducation}
                  onChange={(e) => setLevelOfEducation(e.target.value)}
                  required
                >
                  <option value="">Select...</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="PhD">PhD</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>
            {/* School */}
            <div>
              <label>
                School *:
                <input
                  type="text"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  required
                />
              </label>
            </div>
            {/* Field of Research */}
            <div>
              <label>
                Field of Research *:
                <input
                  type="text"
                  value={fieldOfResearch}
                  onChange={(e) => setFieldOfResearch(e.target.value)}
                  required
                />
              </label>
            </div>
            {/* Bio */}
            <div>
              <label>
                Bio:
                <input
                  type="text"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
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

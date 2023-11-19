// import React from "react";
// import Navbar from "./components/Navbar";
// import "./App.css";
// import Home from "./components/pages/Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Profile from "./components/pages/Profile";
// import Explore from "./components/pages/Explore";
// import Connections from "./components/pages/Connections";
// import SignUp from "./components/pages/SignUp";
// import StudentSignup from "./components/pages/StudentSignUp";
// import AdvisorSignup from "./components/pages/AdvisorSignUp";

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" exact element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/explore" element={<Explore />} />
//           <Route path="/connections" element={<Connections />} />
//           <Route path="/sign-up" element={<SignUp />} />
//           <Route path="/student-signup" element={<StudentSignup />} />
//           <Route path="/advisor-signup" element={<AdvisorSignup />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/pages/SignUp.js";
import StudentSignUp from "./components/pages/StudentSignUp.js";
import AdvisorSignUp from "./components/pages/AdvisorSignUp.js";
import Explore from "./components/pages/Explore.js";
import Profile from "./components/pages/Profile.js";
import Home from "./components/pages/Home";

function App() {
  const [loggedInEmail, setLoggedInEmail] = useState("");

  const handleLogin = (email) => {
    setLoggedInEmail(email);
  };

  return (
    <Router>
      <Navbar loggedInEmail={loggedInEmail} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sign-up" element={<SignUp onLogin={handleLogin} />} />
        <Route
          path="/student-signup"
          element={<StudentSignUp onLogin={handleLogin} />}
        />
        <Route
          path="/advisor-signup"
          element={<AdvisorSignUp onLogin={handleLogin} />}
        />
        <Route
          path="/explore"
          element={<Explore loggedInEmail={loggedInEmail} />}
        />
        <Route
          path="/profile"
          element={<Profile loggedInEmail={loggedInEmail} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

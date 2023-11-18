import React from "react";
import "../../App.css";
import "../Profile.css";
import Card from "../Card";

export default function Profile() {
  const cardData = {
    type: "Student",
    profilePicture: "../../../images/profile-icon.jpg",
    name: "John Doe",
    researchInterests: "Machine Learning",
    educationLevel: "Ph.D.",
    school: "McGill Univeristy",
    fieldOfStudy: "Computer Science",
    bio: "I like dogs and hockey",
  };
  return (
    <div className="profile">
      <h1 className="profile">PROFILE</h1>
      <Card {...cardData} />
    </div>
  );
}

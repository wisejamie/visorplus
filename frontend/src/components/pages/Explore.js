import React from "react";
import Card from "../Card"; // Adjust the import path based on your project structure
import "../../App.css";
import "../Explore.css";

export default function Explore() {
  const cardData = [
    {
      type: "Student",
      profilePicture: "../../../images/profile-icon.jpg",
      name: "John Doe",
      researchInterests: "Machine Learning",
      educationLevel: "Ph.D.",
    },
    {
      type: "Advisor",
      profilePicture: "../../../images/profile-icon.jpg",
      name: "Jane Smith",
      researchInterests: "Artificial Intelligence",
      educationLevel: "Professor",
    },
    {
      type: "Student",
      profilePicture: "../../../images/profile-icon.jpg",
      name: "Alice Johnson",
      researchInterests: "Data Science",
      educationLevel: "Master's",
    },
    {
      type: "Student",
      profilePicture: "../../../images/profile-icon.jpg",
      name: "Alice Johnson",
      researchInterests: "Data Science",
      educationLevel: "Master's",
    },
    {
      type: "Student",
      profilePicture: "../../../images/profile-icon.jpg",
      name: "Alice Johnson",
      researchInterests: "Data Science",
      educationLevel: "Master's",
    },
    {
      type: "Student",
      profilePicture: "../../../images/profile-icon.jpg",
      name: "Alice Johnson",
      researchInterests: "Data Science",
      educationLevel: "Master's",
    },
    {
      type: "Student",
      profilePicture: "../../../images/profile-icon.jpg",
      name: "Alice Johnson",
      researchInterests: "Data Science",
      educationLevel: "Master's",
    },
    {
      type: "Student",
      profilePicture: "../../../images/profile-icon.jpg",
      name: "Alice Johnson",
      researchInterests: "Data Science",
      educationLevel: "Master's",
    },
    {
      type: "Student",
      profilePicture: "../../../images/profile-icon.jpg",
      name: "Alice Johnson",
      researchInterests: "Data Science",
      educationLevel: "Master's",
    },
    {
      type: "Student",
      profilePicture: "../../../images/profile-icon.jpg",
      name: "Alice Johnson",
      researchInterests: "Data Science",
      educationLevel: "Master's",
    },
    {
      type: "Student",
      profilePicture: "../../../images/profile-icon.jpg",
      name: "Alice Johnson",
      researchInterests: "Data Science",
      educationLevel: "Master's",
    },
  ];

  // Function to chunk the array into rows of specified size
  const chunkArray = (array, size) => {
    return array
      .slice(0, 12)
      .reduce(
        (acc, _, i) => (i % size ? acc : [...acc, array.slice(i, i + size)]),
        []
      );
  };

  // Organize cards into rows with a maximum of 3 cards per row
  const rows = chunkArray(cardData, 3);

  return (
    <div className="explore">
      <h1>EXPLORE</h1>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="card-container">
          {row.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      ))}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "../../App.css";
import "../Profile.css";
import Card from "../Card";

export default function Profile({ loggedInEmail }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [interest1, setInterest1] = useState("");
  const [interest2, setInterest2] = useState("");
  const [interest3, setInterest3] = useState("");
  const [degree, setDegree] = useState("");
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [bio, setBio] = useState(""); // State to store the bio value

  useEffect(() => {
    // Fetch the bio value when the component mounts
    const fetchData = async () => {
      console.log("Clicked on Profile link. loggedInEmail:", loggedInEmail);
      const firstNameResponse = await fetch(
        `http://127.0.0.1:5000/advisee/firstname/${loggedInEmail}`
      );
      const firstNameData = await firstNameResponse.json();

      console.log(firstNameData);
      setFirstName(firstNameData.firstNameAdvisees[0]);

      console.log(firstName);

      const lastNameResponse = await fetch(
        `http://127.0.0.1:5000/advisee/lastname/${loggedInEmail}`
      );
      const lastNameData = await lastNameResponse.json();
      setLastName(lastNameData.lastNameAdvisees[0]);

      const interest1Response = await fetch(
        `http://127.0.0.1:5000/advisee/interest1/${loggedInEmail}`
      );
      const interest1Data = await interest1Response.json();
      setInterest1(interest1Data.interest1Advisees[0]);

      const interest2Response = await fetch(
        `http://127.0.0.1:5000/advisee/interest2/${loggedInEmail}`
      );
      const interest2Data = await interest2Response.json();
      setInterest2(interest2Data.interest2Advisees[0]);

      const interest3Response = await fetch(
        `http://127.0.0.1:5000/advisee/interest3/${loggedInEmail}`
      );
      const interest3Data = await interest3Response.json();
      setInterest3(interest3Data.interest3Advisees[0]);

      const degreeResponse = await fetch(
        `http://127.0.0.1:5000/advisee/degree/${loggedInEmail}`
      );
      const degreeData = await degreeResponse.json();
      setDegree(degreeData.degreeAdvisees[0]);

      const schoolResponse = await fetch(
        `http://127.0.0.1:5000/advisee/school/${loggedInEmail}`
      );
      const schoolData = await schoolResponse.json();
      setSchool(schoolData.schoolAdvisees[0]);

      const majorResponse = await fetch(
        `http://127.0.0.1:5000/advisee/major/${loggedInEmail}`
      );
      const majorData = await majorResponse.json();
      setMajor(majorData.majorAdvisees[0]);

      const bioResponse = await fetch(
        `http://127.0.0.1:5000/advisee/bio/${loggedInEmail}`
      );
      const bioData = await bioResponse.json();
      setBio(bioData.bioAdvisees[0]);
    };

    fetchData();
  }, []);

  const cardData = {
    type: "Student",
    profilePicture: "../../../images/profile-icon.jpg",
    name: firstName + " " + lastName,
    researchInterests: interest1 + ", " + interest2 + ", " + interest3,
    educationLevel: degree,
    school: school,
    fieldOfStudy: major,
    bio: bio,
  };
  return (
    <div className="profile">
      <h1 className="profile">PROFILE</h1>
      <Card {...cardData} />
    </div>
  );
}

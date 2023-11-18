import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card(props) {
  const {
    type,
    profilePicture,
    name,
    researchInterests,
    educationLevel,
    onConnect,
  } = props;

  return (
    <div className="card">
      <img src={profilePicture} alt="Profile" className="profile-picture" />
      <div className="card-info">
        <div className="name">{name}</div>
        <div className="details">
          <p>
            <strong></strong> {type}
          </p>
          <p>
            <strong>Research Interests:</strong> {researchInterests}
          </p>
          <p>
            <strong>Education Level:</strong> {educationLevel}
          </p>
        </div>
        <button className="connect-button" onClick={onConnect}>
          Connect
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  researchInterests: PropTypes.string.isRequired,
  educationLevel: PropTypes.string.isRequired,
  onConnect: PropTypes.func.isRequired,
};

export default Card;

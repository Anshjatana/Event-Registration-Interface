import React from "react";
import "./Modules/UserDetailPopup.css";
import Popup from "reactjs-popup";
import "../App.css";

const UserDetailPopup = ({ user, onClose, open }) => {
  return (
    <Popup open={open} onClose={onClose}>
      <div className="Popup-container">
        <h2>User Details</h2>
        <p>Full Name: {user.fullName}</p>
        <p>Email: {user.email}</p>
        <p>Contact Number: {user.contactNumber}</p>
        <p id="bio">Bio: {user.bio}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Popup>
  );
};

export default UserDetailPopup;

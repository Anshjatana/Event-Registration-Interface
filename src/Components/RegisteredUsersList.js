import React, { useState } from "react";
import "./Modules/RegisteredUsers.css";
import UserDetailPopup from "./UserDetailPopup";
import "../App.css";

const RegisteredUsersList = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

  return (
    <div className="List-container">
      <img
        src="https://img.freepik.com/free-vector/hiring-concept-illustration_114360-532.jpg?w=740&t=st=1697198560~exp=1697199160~hmac=aff754d1dd49a60f6ac84bfdee8056be5a4546678c2849abaf97b6e63bf537e7"
        alt="list-img"
        id="list-img"
      />
      <div className="User-Details">
        <h2>Registered Users for the Event</h2>
        {users.length === 0 ? (
          <p className="no-users-message">
            No user registered for the event yet.
          </p>
        ) : (
          <ul className="User-list">
            {users.map((user, index) => (
              <li key={index} className="list-items">
                {user.fullName} - {user.timestamp}{" "}
                <button
                  id="close-button"
                  onClick={() => handleViewDetails(user)}
                >
                  View Details
                </button>
                {selectedUser && (
                  <UserDetailPopup
                    user={selectedUser}
                    onClose={handleCloseDetails}
                    open={true}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RegisteredUsersList;

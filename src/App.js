import React, { useState, useEffect } from 'react';
import RegistrationForm from './Components/RegistrationForm';
import RegisteredUsersList from './Components/RegisteredUsersList';
import UserDetailPopup from './Components/UserDetailPopup';
import './App.css'; 
const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Load users from localStorage on component mount
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(savedUsers);
  }, []);

  useEffect(() => {
    // Save users to localStorage whenever the users state changes
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleRegister = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <h2 id='heading'>Event Registration Interface</h2>
      <RegistrationForm onRegister={handleRegister} />
      <RegisteredUsersList users={users} onViewDetails={handleViewDetails} />
      {isPopupVisible && selectedUser && (
        <UserDetailPopup user={selectedUser} onClose={handleClosePopup} />
      )}
    </>
  );
};

export default App;


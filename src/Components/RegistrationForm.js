import React, { useState } from "react";
import "./Modules/RegistrationForm.css";
import "../App.css";

const RegistrationForm = ({ onRegister }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState({}); // State to track form validation errors

  const validateForm = () => {
    const errors = {};

    // Regular expression for a valid email format
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    // Regular expression for a valid phone number format
    const phoneNumberPattern = /^\+[0-9]{10,}$/;

    if (!fullName.trim()) {
      errors.fullName = "Full Name is required.";
    }

    if (!email.match(emailPattern)) {
      errors.email = "Invalid email format.";
    }

    if (!contactNumber.match(phoneNumberPattern)) {
      errors.contactNumber =
        "Invalid phone number format.(Include country code)";
    }

    if (bio.length > 70) {
      errors.bio = "Bio should be less than 70 characters.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      alert("Registration Successful");
      const newUser = {
        fullName,
        email,
        contactNumber,
        bio,
        timestamp: new Date().toLocaleString(),
      };
      onRegister(newUser);
      setFullName("");
      setEmail("");
      setContactNumber("");
      setBio("");
      setErrors({});
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="Form-container">
        <h3>Registration Form</h3>
        <div>
          <label htmlFor="fullName" className="Label">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            className="Input"
            value={fullName}
            placeholder="John Doe"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          {errors.fullName && <div className="error">{errors.fullName}</div>}
        </div>
        <div>
          <label htmlFor="Email" className="Label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="johndoe123@gmail.com"
            className="Input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="Contact" className="Label">
            Contact Number:
          </label>
          <input
            type="text"
            placeholder="+918123456789"
            id="contactNumber"
            className="Input"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
          {errors.contactNumber && (
            <div className="error">{errors.contactNumber}</div>
          )}
        </div>
        <div>
          <label htmlFor="Contact" className="Label">
            Short Bio:
          </label>
          <textarea
            type="text"
            id="bio"
            placeholder="A Passionate Frontend developer"
            value={bio}
            className="Input"
            onChange={(e) => setBio(e.target.value)}
            required
          />
          {errors.bio && <div className="error">{errors.bio}</div>}
        </div>

        <button type="submit" id="Submit-button">
          Submit
        </button>
      </form>

      <img
        src="https://img.freepik.com/free-vector/business-people-writing-agreement-shaking-hands-tiny-man-with-magnifying-glass-researching-checklist-document-clipboard-paper-flat-vector-illustration-survey-paperwork-management-concept_74855-21676.jpg?w=740&t=st=1697179654~exp=1697180254~hmac=4f1b5a7c7bfcb05caa512afff84fbd49a3bf947f1b1f1a01159f5228eb8f9242"
        alt="registration"
      />
    </div>
  );
};

export default RegistrationForm;

import React, { useState } from 'react';
import './RoommateFinderApp.css'; // Import a CSS file for styling

const RoommateFinderApp = () => {
  const [preferences, setPreferences] = useState({
    gender: '',
    age: '',
    budget: '',
  });

  const [potentialRoommates, setPotentialRoommates] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform logic to fetch potential roommates based on preferences
    // For demonstration purposes, let's assume potential roommates are hardcoded
    const hardcodedRoommates = [
      { name: 'John Doe', gender: 'Male', age: 25, budget: '$800' },
      { name: 'Jane Doe', gender: 'Female', age: 22, budget: '$750' },
      // Add more potential roommates as needed
    ];
    setPotentialRoommates(hardcodedRoommates);
  };

  return (
    <div className="roommate-finder-container">
      <h1 className="title">NestPals Roommate Finder</h1>
      <form className="preferences-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Gender:
          <input
            className="form-input"
            type="text"
            name="gender"
            value={preferences.gender}
            onChange={handleInputChange}
          />
        </label>
        <label className="form-label">
          Age:
          <input
            className="form-input"
            type="text"
            name="age"
            value={preferences.age}
            onChange={handleInputChange}
          />
        </label>
        <label className="form-label">
          Budget:
          <input
            className="form-input"
            type="text"
            name="budget"
            value={preferences.budget}
            onChange={handleInputChange}
          />
        </label>
        <button className="submit-button" type="submit">
          Find Roommates
        </button>
      </form>

      <h2 className="sub-heading">Potential Roommates:</h2>
      <ul className="roommates-list">
        {potentialRoommates.map((roommate, index) => (
          <li key={index} className="roommate-item">
            {roommate.name} - {roommate.gender}, {roommate.age}, Budget: {roommate.budget}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoommateFinderApp;
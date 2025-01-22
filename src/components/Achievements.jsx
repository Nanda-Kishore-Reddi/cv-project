import React, { useState } from "react";
import "../styles/Achievements.css";

const Achievements = ({ onChange }) => {
  const [achievements, setAchievements] = useState([
    { id: Date.now(), name: "", description: "", date: "" },
  ]);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setAchievements((prevAchievements) => {
      const updatedAchievements = prevAchievements.map((ach) =>
        ach.id === id ? { ...ach, [name]: value } : ach
      );
      onChange("achievements", updatedAchievements);
      return updatedAchievements;
    });
  };

  const addAchievement = () => {
    setAchievements((prevAchievements) => [
      ...prevAchievements,
      { id: Date.now(), name: "", description: "", date: "" },
    ]);
  };

  const removeAchievement = (id) => {
    setAchievements((prevAchievements) =>
      prevAchievements.filter((ach) => ach.id !== id)
    );
  };

  return (
    <div className="form-section">
      <h2>Achievements</h2>
      {achievements.map((ach) => (
        <div key={ach.id} className="achievement-entry">
          <input
            type="text"
            name="name"
            value={ach.name}
            onChange={(e) => handleChange(ach.id, e)}
            placeholder="Achievement Name"
          />
          <textarea
            name="description"
            value={ach.description}
            onChange={(e) => handleChange(ach.id, e)}
            placeholder="Description"
          />
          <input
            type="date"
            name="date"
            value={ach.date}
            onChange={(e) => handleChange(ach.id, e)}
            placeholder="Date"
          />
          <button type="button" onClick={() => removeAchievement(ach.id)} className="remove-button">
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addAchievement} className="add-button">
        Add Achievement
      </button>
    </div>
  );
};

export default Achievements;

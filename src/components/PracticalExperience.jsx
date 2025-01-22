import React, { useState } from 'react';
import "../styles/PracticalExperience.css";

const PracticalExperience = ({ onChange }) => {
  const [experienceList, setExperienceList] = useState([
    { id: Date.now(), company: '', title: '', responsibilities: '', Startdate: '' , Enddate: '' },
  ]);
  

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setExperienceList((prevList) => {
      const updatedList = prevList.map((exp) =>
        exp.id === id ? { ...exp, [name]: value } : exp
      )
    
    onChange('experience', updatedList);

    return updatedList;

    });
  };

  const addExperience = () => {
    setExperienceList((prevList) => [
      ...prevList,
      { id: Date.now(), company: '', title: '', responsibilities: '', Startdate: '' , Enddate: '' },
    ]);
  };

  const removeExperience = (id) => {
    setExperienceList((prevList) => prevList.filter((exp) => exp.id !== id));
  };

  return (
    <div className="form-section">
      <h2>Work Experience</h2>
      {experienceList.map((exp) => (
        <div key={exp.id} className="experience-entry">
          <input
            type="text"
            name="company"
            value={exp.company}
            onChange={(e) => handleChange(exp.id, e)}
            placeholder="Company Name"
          />
          <input
            type="text"
            name="title"
            value={exp.title}
            onChange={(e) => handleChange(exp.id, e)}
            placeholder="Job Title"
          />
          <textarea
            name="responsibilities"
            value={exp.responsibilities}
            onChange={(e) => handleChange(exp.id, e)}
            placeholder="Main Responsibilities"
          />
          <input
            type="date"
            name="Startdate"
            value={exp.Startdate}
            onChange={(e) => handleChange(exp.id, e)}
            placeholder="Start"
          />
          <input
            type="date"
            name="Enddate"
            value={exp.Enddate}
            onChange={(e) => handleChange(exp.id, e)}
            placeholder="End"
          />
          <button
            type="button"
            onClick={() => removeExperience(exp.id)}
            className="remove-button"
          >
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addExperience} className="add-button">
        Add Work Experience
      </button>
    </div>
  );
};

export default PracticalExperience;

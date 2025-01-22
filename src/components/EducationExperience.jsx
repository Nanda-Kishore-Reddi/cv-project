import React, { useState } from 'react';
import "../styles/EducationExperience.css";

const EducationExperience = ({ onChange }) => {
  const [educationList, setEducationList] = useState([
    { id: Date.now(), school: '', degree: '', dates: '' },
  ]);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
  
    setEducationList((prevList) => {
      const updatedList = prevList.map((edu) =>
        edu.id === id ? { ...edu, [name]: value } : edu
      );
  
      // Call onChange with the updated list
      onChange('education', updatedList);
  
      return updatedList;
    });
  };
  

  const addEducation = () => {
    setEducationList((prevList) => [
      ...prevList,
      { id: Date.now(), school: '', degree: '', dates: '' },
    ]);
  };

  const removeEducation = (id) => {
    setEducationList((prevList) => prevList.filter((edu) => edu.id !== id));
  };

  return (
    <div className="form-section">
      <h2>Education</h2>
      {educationList.map((edu) => (
        <div key={edu.id} className="education-entry">
          <input
            type="text"
            name="school"
            value={edu.school}
            onChange={(e) => handleChange(edu.id, e)}
            placeholder="School Name"
          />
          <input
            type="text"
            name="degree"
            value={edu.degree}
            onChange={(e) => handleChange(edu.id, e)}
            placeholder="Degree"
          />
          <input
            type="text"
            name="dates"
            value={edu.dates}
            onChange={(e) => handleChange(edu.id, e)}
            placeholder="Years of Study"
          />
          <button
            type="button"
            onClick={() => removeEducation(edu.id)}
            className="remove-button"
          >
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addEducation} className="add-button">
        Add Education
      </button>
    </div>
  );
};

export default EducationExperience;

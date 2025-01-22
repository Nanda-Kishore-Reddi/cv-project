import React, { useState } from "react";
import "../styles/Skills.css";

const Skills = ({ onChange }) => {
  const [skills, setSkills] = useState({
    technical: "",
    soft: "",
    interests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkills((prevSkills) => {
      const updatedSkills = {
        ...prevSkills,
        [name]: value,
      };
      onChange("skills", updatedSkills);
      return updatedSkills;
    });
  };

  return (
    <div className="form-section">
      <h2>Skills</h2>
      <div className="skills-entry">
      <textarea
        name="technical"
        value={skills.technical}
        onChange={handleChange}
        placeholder="Technical Skills (e.g., JavaScript, React, Python)"
      />
      <textarea
        name="soft"
        value={skills.soft}
        onChange={handleChange}
        placeholder="Soft Skills (e.g., Leadership, Communication)"
      />
      <textarea
        name="interests"
        value={skills.interests}
        onChange={handleChange}
        placeholder="Interests (e.g., Photography, Gaming)"
      />
      </div>
    </div>
  );
};

export default Skills;

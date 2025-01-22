import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = ({ onChange }) => {
  const [projects, setProjects] = useState([
    { id: Date.now(), name: "", tools: "", description: "", startDate: "", endDate: "" },
  ]);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((proj) =>
        proj.id === id ? { ...proj, [name]: value } : proj
      );
      onChange("projects", updatedProjects);
      return updatedProjects;
    });
  };

  const addProject = () => {
    setProjects((prevProjects) => [
      ...prevProjects,
      { id: Date.now(), name: "", tools: "", description: "", startDate: "", endDate: "" },
    ]);
  };

  const removeProject = (id) => {
    setProjects((prevProjects) => prevProjects.filter((proj) => proj.id !== id));
  };

  return (
    <div className="form-section">
      <h2>Projects</h2>
      {projects.map((proj) => (
        <div key={proj.id} className="project-entry">
          <input
            type="text"
            name="name"
            value={proj.name}
            onChange={(e) => handleChange(proj.id, e)}
            placeholder="Project Name"
          />
          <textarea
            name="tools"
            value={proj.tools}
            onChange={(e) => handleChange(proj.id, e)}
            placeholder="Tools/Technologies Used"
          />
          <textarea
            name="description"
            value={proj.description}
            onChange={(e) => handleChange(proj.id, e)}
            placeholder="Project Description"
          />
          <input
            type="date"
            name="startDate"
            value={proj.startDate}
            onChange={(e) => handleChange(proj.id, e)}
            placeholder="Start Date"
          />
          <input
            type="date"
            name="endDate"
            value={proj.endDate}
            onChange={(e) => handleChange(proj.id, e)}
            placeholder="End Date"
          />
          <button type="button" onClick={() => removeProject(proj.id)} className="remove-button">
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addProject} className="add-button">
        Add Project
      </button>
    </div>
  );
};

export default Projects;

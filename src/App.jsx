import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationExperience from './components/EducationExperience';
import PracticalExperience from './components/PracticalExperience';
import Preview from './components/Preview';
import Skills from './components/skills';
import Projects from './components/projects';
import Achievements from './components/Achievements';

import "./styles/App.css"


const App = () => {
  const [formData, setFormData] = useState({
    generalInfo: { name: '', email: '', phone: '' },
    education: { school: '', degree: '', dates: '' },
    experience: { company: '', title: '', responsibilities: '', Startdate: '', Enddate: '' },
    skills: { technical: "", soft: "", interests: "" },
    projects: [],
    achievements: [],
  });

  const handleFormChange = (section, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };

  return (
    <div className="app">
      <div className="form">
        <GeneralInfo onChange={handleFormChange} />
        <EducationExperience onChange={handleFormChange} />
        <PracticalExperience onChange={handleFormChange} />
        <Projects onChange={handleFormChange} />
        <Skills onChange={handleFormChange}/>
        <Achievements onChange={handleFormChange} />
      </div>
      <div className="Preview">
        <Preview formData={formData} />
      </div>
    </div>
  );
};

export default App;

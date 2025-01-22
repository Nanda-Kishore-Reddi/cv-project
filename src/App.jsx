import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationExperience from './components/EducationExperience';
import PracticalExperience from './components/PracticalExperience';
import Preview from './components/Preview';
import "./styles/App.css"


const App = () => {
  const [formData, setFormData] = useState({
    generalInfo: { name: '', email: '', phone: '' },
    education: { school: '', degree: '', dates: '' },
    experience: { company: '', title: '', responsibilities: '', Startdate: '', Enddate: '' },
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
      </div>
      <div className="Preview">
        <Preview formData={formData} />
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import "../styles/Preview.css";

const formatDate = (date) => {
    const newdate = new Date().toLocaleDateString('en-GB');
    const parsedDate = new Date(date).toLocaleDateString('en-GB');
    if (newdate === parsedDate) {
        // If no Enddate, return "Current"
        return "Current";
      }
      // Check if the date is valid
      if (isNaN(parsedDate)) return new Date(date).toLocaleDateString('en-GB');
      return parsedDate // Returns in DD/MM/YYYY format
  };
  

const Preview = ({ formData }) => {
  return (
    <div className="preview">
      <h2>CV Preview</h2>

      {/* General Information */}
      <div className="general-info">
        <h3>{formData.generalInfo.name}</h3>
        <p>
          {formData.generalInfo.email} | {formData.generalInfo.phone}
        </p>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h4>Education</h4>
        {formData.education.length > 0 ? (
          formData.education.map((edu, index) => (
            <div key={index} className="education-entry">
              <p>
                {edu.school} - {edu.degree} ({edu.dates})
              </p>
            </div>
          ))
        ) : (
          <p>No education information provided.</p>
        )}
      </div>

      {/* Work Experience Section */}
      <div className="work-experience-section">
        <h4>Work Experience</h4>
        {formData.experience.length > 0 ? (
          formData.experience.map((exp, index) => (
            <div key={index} className="experience-entry">
              <p>
                {exp.company} - {exp.title} ({formatDate(exp.Startdate)} to {formatDate(exp.Enddate)})
              </p>
              <p>{exp.responsibilities}</p>
            </div>
          ))
        ) : (
          <p>No work experience provided.</p>
        )}
      </div>
    </div>
  );
};

export default Preview;

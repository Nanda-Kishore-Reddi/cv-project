import React, { useState } from 'react';
import "../styles/GeneralInfo.css"


const GeneralInfo = ({ onChange }) => {
  const [info, setInfo] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setInfo((prevState) => {
      const updatedValue =
      name === 'phone' ? value.startsWith('+91') ? value : '+91 ' + value : value;

      const updatedInfo = {
        ...prevState,
        [name]: updatedValue,
      };
  
      // Call onChange with the updated info
      onChange('generalInfo', updatedInfo);
  
      return updatedInfo;
    });
  };

  return (
    <div className="form-section">
      <h2>Personal Information</h2>
      <div className="general-entry">
        <input
          type="text"
          name="name"
          value={info.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          value={info.email}
          onChange={handleChange}
          placeholder="Email Address"
        />
        <input
          type="text"
          name="phone"
          value={info.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
      </div>
    </div>
  );
};

export default GeneralInfo;

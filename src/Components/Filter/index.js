import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <form className="contactForm">
      <label>Find a contact:</label>
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
};

export default Filter;

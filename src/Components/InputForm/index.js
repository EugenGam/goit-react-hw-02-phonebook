import React, { useState } from 'react';
import './style.scss';

const InputForm = ({ onSubmit }) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const submit = event => {
    onSubmit(event, name, number);
    setName('');
    setNumber('');
  };
  const handleChange = event => {
    if (event.target.type === 'number') {
      return setNumber(event.target.value);
    } else {
      return setName(event.target.value);
    }
  };
  return (
    <form className="contactForm" onSubmit={submit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={handleChange} />
      <label>Number:</label>
      <input type="number" value={number} onChange={handleChange} />
      <input
        className="contactForm__button"
        type="submit"
        value="Add contact"
      />
    </form>
  );
};

export default InputForm;

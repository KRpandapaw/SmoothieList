import React, { useState } from 'react';
import InputField from './InputField';

const SmoothieForm = ({ addSmoothie }) => {
    const [smoothieTitle, setSmoothieTitle] = useState('');
    const [smoothieRate, setSmoothieRate] = useState('');
    const [titleError, setTitleError] = useState('');
    const [rateError, setRateError] = useState('');
  
    const resetForm = () => {
        setSmoothieTitle('');
        setSmoothieRate('');
    };

    const validateForm = () => {
      resetErrors();
      let validated = true;
      if (!smoothieTitle) {
        setTitleError('Enter Name');
        validated = false;
      }

      if (!smoothieRate) {
        setRateError('Enter Rate Out of 5');
        validated = false;
      }

      return validated;
    };

    const resetErrors = () => {
      setTitleError('');
      setRateError('');
    };

    const onSubmit = (event) => {
      event.preventDefault();
      if (validateForm()) {
        addSmoothie({
          id: Date.now(),
          title: smoothieTitle,
          rate: smoothieRate,
        });
        resetErrors();
        resetForm();
      }
    };
    return (
    <form onSubmit={onSubmit}>
        <InputField 
          type="text"
          value={smoothieTitle}
          placeholder="Smoothie Name"
          onChange={e => setSmoothieTitle(e.target.value)}
          errorMessage={titleError}
        />
        <InputField 
          type="text"
          value={smoothieRate}
          placeholder="Rate Out of 5"
          onChange={e => setSmoothieRate(e.target.value)}
          errorMessage={rateError}
        />
        <button type="submit">Add Smoothie</button>
    </form>
    );
};

export default SmoothieForm;
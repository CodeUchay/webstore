import React, { useState } from 'react';
import './CustomInput.css';

const CustomInput = ({ id, label, variant }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className={`custom-textfield ${variant}`}>
      <input
        id={id}
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`textfield-input ${focused || value ? 'focused' : ''}`}
      />
      <label
        htmlFor={id}
        className={`textfield-label text-black ${focused || value ? 'focused' : ''}`}
      >
        {label}
      </label>
    </div>
  );
};

export default CustomInput;

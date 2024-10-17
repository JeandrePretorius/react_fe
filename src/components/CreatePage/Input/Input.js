import React from 'react';
import './Input.css';

const Input = ({ title, onChange }) => {
  return (
    <div className="Input">
      <input 
        type="text" 
        id="haiku_input" 
        name="haiku_input"
        value={title}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

import React from 'react';
import './Input.css';

const Input = ({title}) => {

  return (
    <div className="Input">
      <input 
        type="text" 
        id="haiku_input" 
        name="haiku_input"
        value={title}
      />
    </div>
  );
};

export default Input;

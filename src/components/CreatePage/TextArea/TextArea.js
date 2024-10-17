import React from 'react';
import './TextArea.css';

const TextArea = ({ description, onChange }) => {
  return (
    <div className="TextArea">
      <textarea
        id="haiku_textarea"
        name="haiku_textarea"
        value={description}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;

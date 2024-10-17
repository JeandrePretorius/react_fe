import React from 'react';
import './TextArea.css';

const TextArea = ({description}) => {
  return (
    <div className="TextArea">
      <textarea
        id="haiku_textarea"
        name="haiku_textarea"
        value={description}
      />
    </div>
  )
};

export default TextArea;

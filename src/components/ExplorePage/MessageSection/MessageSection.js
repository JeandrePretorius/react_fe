import React from 'react';
import './MessageSection.css';

const MessageSection = () => (
  <div className="outer-container">
    <div className="background-container">
      <div className="overlay">
        <u><h1 className="fancy-text">Haiku</h1></u>
        <p className="fancy-subtext">a Japanese poem of seventeen syllables, in three lines of five, seven, and five, traditionally evoking images of the natural world.</p>
      </div>
    </div>
  </div>
);

export default MessageSection;

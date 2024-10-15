import React from 'react';
import './MessageSection.css';

const MessageSection = () => (
  <div className="outer-container">
    <div className="background-container">
      <div className="overlay">
        <h1>Your Overlay Text Here</h1>
        <p>Additional text can go here.</p>
      </div>
    </div>
  </div>
);

MessageSection.propTypes = {};

MessageSection.defaultProps = {};

export default MessageSection;

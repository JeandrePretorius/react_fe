import React from 'react';
import './Button.css';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, link, kanji, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link); // Handle navigation if link is provided
    }
    if (onClick) {
      onClick(); // Call the passed onClick function (e.g., handleSave)
    }
  };

  return (
    <div className="ButtonComponent">
      <button className="Button rounded-xl" onClick={handleClick} type={text === "Save" ? "submit" : "button"}>
        {text} {kanji}
      </button>
    </div>
  );
};

export default Button;

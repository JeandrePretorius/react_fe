import React from 'react';
import './Button.css';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, link, kanji }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
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

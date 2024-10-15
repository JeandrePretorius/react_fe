import React from 'react';
import './Button.css';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div className="ButtonComponent">
      <button className="Button rounded-xl" onClick={handleClick}>
        {text} 造
      </button>
    </div>
  );
};

Button.propTypes = {};

Button.defaultProps = {};

export default Button;

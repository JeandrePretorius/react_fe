import React from 'react';
import './Button.css';

const Button = ({text}) => (
  <div className="ButtonComponent">
    <button className="Button rounded-xl">
     {text} 造
    </button>
  </div>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;

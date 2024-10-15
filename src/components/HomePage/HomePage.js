import React from 'react';
import './HomePage.css';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';
import Button from '../Button/Button';

const HomePage = () => (
  <div className="HomePage">
    <div className="MainText">
      <WelcomeMessage/>
      <Button text="Get Started"/>
    </div>
  </div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;

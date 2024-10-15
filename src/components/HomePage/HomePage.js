import React from 'react';
import './HomePage.css';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';
import Button from '../Button/Button';

const HomePage = () => (
  <div className="HomePage">
    <header className="Header">Made with ♡ from Jeandre</header>
    <div className="MainText">
      <WelcomeMessage/>
      <Button text="Get Started" link="/explore"/>
    </div>
  </div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;

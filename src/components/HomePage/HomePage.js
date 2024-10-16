import React from 'react';
import './HomePage.css';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';
import Button from '../Button/Button';

const HomePage = () => (
  <div className="HomePage">
    <header className="Header">Made with ♡ by Jeandre</header>
    <div className="MainText">
      <WelcomeMessage/>
      <Button text="Get Started" link="/explore" kanji='造'/>
    </div>
  </div>
);

export default HomePage;

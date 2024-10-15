import React from 'react';
import './ExplorePage.css';
import MessageSection from './MessageSection/ExplorePage/MessageSection';

const ExplorePage = () => (
  <div class="container">
        <div class="section section-1">
            <MessageSection/>
        </div>
        <div class="section section-2">
            <h1>Section 2</h1>
            <p>This section takes up one-third of the screen.</p>
        </div>
    </div>
);

ExplorePage.propTypes = {};

ExplorePage.defaultProps = {};

export default ExplorePage;

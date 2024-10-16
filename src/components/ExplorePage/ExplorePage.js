import React from 'react';
import './ExplorePage.css';
import MessageSection from './MessageSection/MessageSection';
import ExploreSection from './ExploreSection/ExploreSection';

const ExplorePage = () => (
  <div class="container">
        <div class="section section-1">
            <MessageSection/>
        </div>
        <div class="section section-2">
            <ExploreSection/>
        </div>
    </div>
);

ExplorePage.propTypes = {};

ExplorePage.defaultProps = {};

export default ExplorePage;

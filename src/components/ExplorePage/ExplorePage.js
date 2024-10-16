import React from 'react';
import './ExplorePage.css';
import MessageSection from './MessageSection/MessageSection';
import ExploreSection from './ExploreSection/ExploreSection';

const ExplorePage = () => (
    <div className="container">
        <div className="section section-1">
            <MessageSection/>
        </div>
        <div className="section section-2">
            <ExploreSection/>
        </div>
    </div>
);

export default ExplorePage;

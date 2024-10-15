import React from 'react';
import ReactDOM from 'react-dom';
import ExplorePage/ExploreMessage from './ExplorePage/ExploreMessage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExplorePage/ExploreMessage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
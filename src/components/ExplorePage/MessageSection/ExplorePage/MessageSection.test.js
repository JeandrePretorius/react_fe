import React from 'react';
import ReactDOM from 'react-dom';
import ExplorePage/MessageSection from './ExplorePage/MessageSection';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExplorePage/MessageSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
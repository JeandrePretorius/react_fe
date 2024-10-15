import React from 'react';
import ReactDOM from 'react-dom';
import ExplorePage from './ExplorePage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExplorePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
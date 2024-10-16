import React from 'react';
import ReactDOM from 'react-dom';
import ExploreSection from './ExploreSection';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExploreSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
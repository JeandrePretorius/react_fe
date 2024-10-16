import React from 'react';
import ReactDOM from 'react-dom';
import CreatePage from './CreatePage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreatePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
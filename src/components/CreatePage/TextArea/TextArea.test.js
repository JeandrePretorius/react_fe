import React from 'react';
import ReactDOM from 'react-dom';
import TextArea from './TextArea';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextArea />, div);
  ReactDOM.unmountComponentAtNode(div);
});
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App renders without crashing', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><App /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

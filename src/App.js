import React, { Component } from 'react';
import './app.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './routes';

const App = () => {
  return (
    <Router>
      <Pages />
    </Router>
  );
}

export default App;

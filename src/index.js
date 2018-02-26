import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import './App.css';

import App from './App';
import About from './About';
import Store from './Store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={ App }/>
      <Route path="/about" component={ About }/>
      <Route path="/store" component={ Store }/>
    </Switch>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();

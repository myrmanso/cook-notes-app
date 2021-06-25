import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.scss'
import LoginPages from './pages/LoginPages';
import SignupPages from './pages/SignupPages';

const App = () => (
  <Switch>
    <Route exact path="/signup" component={SignupPages} />
    <Route exact path="/login" component={LoginPages} />
  </Switch>
);


export default App;
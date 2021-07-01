import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './index.scss'
import CreateRecipe from './pages/CreateRecipe';
import LoginPages from './pages/LoginPages';
import RecipesPage from './pages/RecipesPage';
import SignupPages from './pages/SignupPages';

const App = () => (
  <Switch>
    <Route exact path="/" component={RecipesPage} />
    <Route exact path="/recipe" component={CreateRecipe} />
    <Route exact path="/signup" component={SignupPages} />
    <Route exact path="/login" component={LoginPages} />
  </Switch>
);

export default App;

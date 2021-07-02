import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './index.scss'
import CreateRecipe from './pages/CreateRecipePage';
import LoginPages from './pages/LoginPage';
import RecipesPage from './pages/RecipesPage';
import SignupPages from './pages/SignupPages';
import UserRecipesPage from './pages/UserRecipesPage';
import UpdateRecipePage from './pages/UpdateRecipePage';

const App = () => (
  <Switch>
    <Route exact path="/" component={RecipesPage} />
    <Route exact path="/user" component={UserRecipesPage} />
    <Route exact path="/recipe" component={CreateRecipe} />
    <Route exact path="/recipe/:recipeId" component={UpdateRecipePage} />
    <Route exact path="/signup" component={SignupPages} />
    <Route exact path="/login" component={LoginPages} />
  </Switch>
);

export default App;

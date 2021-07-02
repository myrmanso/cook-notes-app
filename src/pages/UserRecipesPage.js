import React from 'react';

import apiService from '../services/api.services';

import Navbar from '../components/templades/Navbar';
import CardRecipe from '../components/organismos/CardRecipe';

class UserRecipesPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      availableFilters: [],
    }
  }

  getRecipes = async () => {
    const response = await apiService.getAllUserRecipes();

    this.setState({ recipes: response.recipes, availableFilters: response.availableFilters })
  };

  componentDidMount() {
    this.getRecipes();
  }


  handleSearch = async (values) => {
    const { name } = values;

    if (!name) {
      return this.getRecipes();
    }

    const response = await apiService.getRecipeByNameAndUserId(name);

    this.setState({ recipes: response.recipes })
  };

  render() {
    const { recipes } = this.state;
    return (
      <section className="recipes-page">
        <Navbar handleSearch={this.handleSearch} showSearch history={this.props.history} />

        <section className="recipes-page__cards--containers">
          {recipes.map(recipe => (
            < CardRecipe
              key={recipe.recipeId}
              url={recipe.externalLink}
              title={recipe.recipeName}
              editRecipeUrl={`/recipe/${recipe.recipeId}`}
            />
          ))}
        </section>
      </section>
    );
  }
};

export default UserRecipesPage;

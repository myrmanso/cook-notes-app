import React from 'react';

import apiService from '../services/api.services';

import Navbar from '../components/templades/Navbar';
import CardRecipe from '../components/organismos/CardRecipe';
class RecipesPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      availableFilters: [],
    }
  }

  getRecipes = async () => {
    const response = await apiService.getAllRecipes();

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

    const response = await apiService.getRecipeByName(name);

    this.setState({ recipes: response.recipes })
  };

  handleFilter = (values) => this.setState({ ...values });

  addRecipe = async (recipeId) => {
    try {
      const response = await apiService.addRecipe(recipeId)

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  };

  render() {
    const { recipes } = this.state;
    return (
      <section className="recipes-page">
        <Navbar handleSearch={this.handleSearch} history={this.props.history} showSearch />

        <section className="recipes-page__cards--containers">
          {recipes.map(recipe => (
            <CardRecipe
              key={recipe.recipeId}
              url={recipe.externalLink}
              title={recipe.recipeName}
              addRecipe={() => this.addRecipe(recipe.recipeId)}
            />
          ))}
        </section>
      </section>
    );
  }
};

export default RecipesPage;

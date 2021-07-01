import React from 'react';

import apiService from '../services/api.services';

import Navbar from '../components/templades/Navbar';
import CardRecipe from '../components/organismos/CardRecipe';
class RecipesPage extends React.Component {
  constructor(props) {
    super()
    this.state = {
      meals: 'Todos',
      flavor: 'Todos',
      cost: 'Todos',
      level: 'Todos',
      occasion: 'Todos',
      recipes: [],
      availableFilters: [],
    }
  }

  getRecipes = async () => {
    const response = await apiService.getAllRecipes();
    console.log({ response })
    this.setState({ recipes: response.recipes, availableFilters: response.availableFilters })
  };

  componentDidMount() {
    this.getRecipes();
  }


  handleSearch = async (values) => {
    const { name } = values;
    const response = await apiService.getRecipeByName(name);

    this.setState({ recipes: response.recipes })
  };

  handleFilter = (values) => this.setState({ ...values });

  addRecipe = (id) => console.log(id);

  render() {
    const { recipes } = this.state;
    return (
      <section className="recipes-page">
        <Navbar handleSearch={this.handleSearch} showSearch />

        <section className="recipes-page__cards--containers">
          {recipes.map(recipe => (
            < CardRecipe url={recipe.externalLink} title={recipe.recipeName} addRecipe={() => this.addRecipe(recipe.recipeId)} />
          ))}
        </section>
      </section>
    );
  }
};

export default RecipesPage;

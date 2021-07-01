import React from 'react';
import FormRecipes from '../components/organismos/FormRecipe';
import Navbar from '../components/templades/Navbar';
import apiServices from '../services/api.services';

class CreateRecipe extends React.Component {
  constructor() {
    super()

    this.state = {
      availableFilters: [],
    }
  }

  getRecipes = async () => {
    const response = await apiServices.getAllRecipes();
    console.log(response.availableFilters)
    this.setState({ availableFilters: response.availableFilters })
  };

  componentDidMount() {
    this.getRecipes();
  }

  handleRecipe = async (params) => {
    const querysList = Object.entries(params);

    querysList.forEach(query => {
      const [key, value] = query;

      if (!value) delete params[key]
    });

    const data = {
      ...params
    };

    try {
      const response = await apiServices.postCreateRecipe(data);

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <section className="recipes-page">
        <Navbar />
        <FormRecipes handleRecipe={this.handleRecipe} availableFilters={this.state.availableFilters} />
      </section>
    )
  }
}

export default CreateRecipe;

import React from 'react';

import Banner from '../components/moleculas/Banner';
import FormRecipes from '../components/organismos/FormRecipe';
import Navbar from '../components/templades/Navbar';

import apiServices from '../services/api.services';


class UpdateRecipePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipeId: props.match.params.recipeId,
      recipe: {},
      showBanner: false,
    }
  }

  getRecipe = async () => {
    const { recipeId } = this.state;
    const response = await apiServices.getRecipeById(recipeId);

    this.setState({ recipe: response })
  };

  componentDidMount() {
    this.getRecipe();
  }

  handleRecipe = async (data) => {
    const { recipeId } = this.state;
    try {
      await apiServices.updateRecipe(data, recipeId);

      this.setState({ showBanner: true })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const {
      recipe: {
        name = '',
        externalLink = '',
        imgUrl = '',
      },
      showBanner
    } = this.state;
    return (
      <section className="recipes-page">
        <Navbar history={this.props.history} />
        {showBanner && <Banner label="Receita atualizada com sucesso!!!" />}
        <FormRecipes
          name={name}
          externalLink={externalLink}
          imgUrl={imgUrl}
          handleRecipe={this.handleRecipe}
          buttonLabel="Atualizar"
        />
      </section>
    )
  }
}

export default UpdateRecipePage;

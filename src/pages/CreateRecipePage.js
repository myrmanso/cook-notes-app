import React from 'react';
import Banner from '../components/moleculas/Banner';

import FormRecipes from '../components/organismos/FormRecipe';
import Navbar from '../components/templades/Navbar';

import apiServices from '../services/api.services';

class CreateRecipe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showBanner: false,
    }
  }

  handleRecipe = async (data) => {
    try {
      await apiServices.postCreateRecipe(data);

      this.setState({ showBanner: true })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { showBanner } = this.state;
    return (
      <section className="recipes-page">
        <Navbar history={this.props.history} />
        {showBanner && <Banner label="Receita criada com sucesso!!!" />}
        <FormRecipes handleRecipe={this.handleRecipe} buttonLabel="Criar" />
      </section>
    )
  }
}

export default CreateRecipe;

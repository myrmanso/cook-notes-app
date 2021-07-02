import React from 'react'
import { isYoutube } from '../../helpers/validations'
import Ancor from '../moleculas/Ancor'
import Button from '../moleculas/Button'
import ImageCard from '../moleculas/ImageCard'
import Player from '../moleculas/Player'

const CardRecipe = ({ url, title, addRecipe, editRecipeUrl }) => (
  <section className="card-recipes">
    <div className="card-recipes__content">
      {isYoutube(url) &&
        <Player url={url} />
      }
      <ImageCard url={url} />
      {url
        ? <Ancor className="card-recipes__content__title" href={url} target={"_blank"}>{title}</Ancor>
        : <h4 className="card-recipes__content__title">{title}</h4>
      }
    </div>
    <div className="card-recipes__button">
      {addRecipe && <Button action={addRecipe}>Adicionar</Button>}
      {editRecipeUrl && <Ancor href={editRecipeUrl} className="card-recipes__button__ancor">Editar</Ancor>}
    </div>
  </section>
);

export default CardRecipe;

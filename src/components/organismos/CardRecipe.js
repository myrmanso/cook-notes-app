import React from 'react'
import { isYoutube } from '../../helpers/validations'
import Ancor from '../moleculas/Ancor'
import Button from '../moleculas/Button'
import ImageCard from '../moleculas/ImageCard'
import Player from '../moleculas/Player'

const CardRecipe = ({ url, title, addRecipe }) => (
  <section className="card-recipes">
    <div>
      {isYoutube(url) &&
        <Player url={url} />
      }
      <ImageCard url={url} />
      {url
        ? <Ancor className="card-recipes__title" href={url, "_blank"}>{title}</Ancor>
        : <h4 className="card-recipes__title">{title}</h4>
      }
    </div>
    <div className="card-recipes__button">
      <Button action={addRecipe}>Add</Button>
    </div>
  </section>
);

export default CardRecipe;

import React from 'react';
import emptyImg from '../../assets/img/empty-img.jpg'

const ImageCard = ({ url }) => (
  <div className={`image-card ${!url && 'empty'}`}>
    <img src={url || emptyImg} alt="" className="image-card__image" />
  </div>
);

export default ImageCard;

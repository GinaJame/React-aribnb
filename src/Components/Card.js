import React from 'react';
import '../styles/card.css'
const Card = (props) => {
  return (
    <>
    <div class="card">
        <img src={"https://picsum.photos/240/340?r="+ props.place.id} class="card-image" />
        <img src="heart.svg" class="like" />
        <img src="star.svg" class="star" /><span class="rating">{props.place.rating}</span><span class="reviews">({props.place.reviews})</span><span class="country">· {props.place.country}</span>
        <p class="place">{props.place.place}</p>
        <p class="price">From ${props.place.price} MXN / <span>person</span></p>
    </div>
    </>
  );
}

export default Card;
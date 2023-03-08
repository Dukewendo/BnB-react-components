import React from "react";

export default function Card(props) {
  return (
    <div className="card container">
      <img src={props.soldStatus} alt="sold-status" />
      <img className="main--img" src={props.img} alt="card"/>
      <img src={props.starFav} alt="favourite" />
      <p>{props.score}</p>
      <p>{props.totalRatings}</p>
      <p>{props.title}</p>
      <p>{props.price}</p>
    </div>
  );
}

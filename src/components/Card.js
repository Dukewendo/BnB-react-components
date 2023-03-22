import React from "react";
import star from "../images/Star.png"

export default function Card(props) {


  let badgeText;
  if (props.openSpots === 0)
  {badgeText = "SOLD OUT"}
  else if (props.openSpots > 1){
   badgeText ="Availability"
  }


  return (
    <div className="card--container" >
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src= {props.coverImg} alt="cardPics" />
      <div className="card--stats" >
        <img className="card--star" src= {star} alt="starpic" />
      <span>{props.stats.rating}</span>
      <span>({props.stats.reviewCount})</span>
      <span> • {props.location}</span>
      </div>

      <div>
        <p className="card--title" >{props.title}</p>      
        <p><span className="bold">from ${props.price} </span> /person
        </p>
      </div>
    </div>
  );
}

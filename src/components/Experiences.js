import React from "react";
import Card from "../components/Card";
import image12 from "../images/image12.png";
import wedding from "../images/wedding.png";
import mountain from "../images/mountain.png";
import soldOut from "../images/Group80.png";
import favStar from "../images/Star.png";

export default function Experiences() {
  return (
    <div className="exp--container">
      <h1 className="exp--title">Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts- all
        without leaving home
      </p>
      <div className="card--container">
        <Card img={image12}
         soldStatus={soldOut}
          starFav={favStar}
          score= "5.0"
          totalRatings = "(6)"
          country ="USA"
          title = "Life Lessons with Katie"
          price="From $136 / person"
           />

        <Card img={wedding}
         soldStatus={soldOut}
          starFav={favStar}
          score= "5.0"
          totalRatings = "(30)"
          country ="USA"
          title = "Learn wedding photography"
          price="From $125 / person"
           />

        <Card img={mountain}
         soldStatus={soldOut}
          starFav={favStar}
          score= "4.8"
          totalRatings = "(2)"
          country ="USA"
          title = "Group mountain biking"
          price="From $50 / person"
           />
      </div>
    </div>
  );
}

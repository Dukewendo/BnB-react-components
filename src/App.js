import React from "react";
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from './components/data.js'

import "./App.css";

const elements = data.map(element => {
  return (<Card
  key ={element.id}
  {...element}
  />
)})

function App() {
  return (
    <div className="app--container">
      <NavBar />
      <Hero />
      <section className="cards--list">
      {elements}
      </section>
    
      
    </div>
  );
}

export default App;

import React from "react";
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Experiences from "./components/Experiences"
import "./App.css";

function App() {
  return (
    <div className="app--container">
      <NavBar />
      <Hero />
      <Experiences />
    </div>
  );
}

export default App;

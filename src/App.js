import React, { useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import { recipes } from "./components/pizzaList";
import Header from "./components/Header";
import Ingredients from "./components/Ingredients";

function App() {
  return (
    <div className="App">
      <section className="firstLook">
        <Header />
        <Ingredients />
      </section>

      {recipes.map((recipe) => (
        <Recipe
          id={recipe.pizza_id}
          title={recipe.title}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;

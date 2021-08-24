import React from "react";
import styled from "styled-components";
import blackboardPattern from "../assets/images/bgImages/blackboard.png";
import Recipes from './Recipes'
import { useContext } from "react";
import { SelectedIngredientsContext } from "../contexts/SelectedIngredientsContext";

const PizzaCards = () => {
  const [selectedIngredients] = useContext(SelectedIngredientsContext)
  const mappedSelected = selectedIngredients.map(item => item.name)

  const isEveryItemOfArrayInAnotherArray = (array, searchElements) =>
    searchElements.every((el) => {
      return array.match(new RegExp(el, "i"));
    })

  const filteredRecipes = Recipes.filter(recipe => (isEveryItemOfArrayInAnotherArray(recipe.ingredients.join(', '), mappedSelected)))

  return (
    <>
      {filteredRecipes.map((recipe) => {
        return (
          <Card key={recipe.name}>
            <img src={recipe.image} alt={recipe.name} className="imageOfPizza" />
            <h1 className="name">{recipe.name}</h1>
            <h2 className="igt">{recipe.ingredients.join(', ')}</h2>
          </Card>
        )
      })}
    </>
  );
};

const Card = styled.div`
  background-image: url(${blackboardPattern});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 28rem;
  height: 12rem;
  border-radius: 15px;
  transition: ease background-image 250ms;
  
  display: grid;
  grid-template-columns: repeat(22, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-template-areas:
  "img img img img img img img img . . . . . . . . . . . . . ."
  "img img img img img img img img . name name name name name name name name name name name name ."
  "img img img img img img img img . name name name name name name name name name name name name ."
  "img img img img img img img img . igt igt igt igt igt igt igt igt igt igt igt igt ."
  "img img img img img img img img . igt igt igt igt igt igt igt igt igt igt igt igt ."
  "img img img img img img img img . igt igt igt igt igt igt igt igt igt igt igt igt ."
  "img img img img img img img img . . . . . . . . . . . . . ."
  "img img img img img img img img . . . . . . . . . . . . . ."
  "img img img img img img img img . . . . . . . . . . . . . ."
  "img img img img img img img img . . . . . . . . . . . . . .";
  
  @media (max-width: 496px) {
  width: 18rem;
  height: 7.8rem;
  }
  @media (max-width: 318px) {
  width: 14rem;
  height: 6rem;
  }

  .imageOfPizza {
    grid-area: img;
    align-self: center;
    justify-self: center;
  }

  .name {
    grid-area: name;
    color: white;
    border-bottom: 2px dashed white;
    font-family: "Archistico Bold";
    font-size: 1.7rem;

    @media (max-width: 496px) {
      font-size: 1rem; 
  }
    @media (max-width: 318px) {
      font-size: 0.78rem; 
  }
  }

  .igt {   
    padding-top: 5px;
    grid-area: igt;
    color: white;
    font-size: 0.75rem;
    font-weight: 500;
    align-self: start;

    @media (max-width: 496px) {
      font-size: 0.48rem; 
  }
    @media (max-width: 318px) {
      font-size: 0.38rem; 
  }
  }

  img {
    max-width: 82%;
    height: auto;
  }
`;

export default PizzaCards;

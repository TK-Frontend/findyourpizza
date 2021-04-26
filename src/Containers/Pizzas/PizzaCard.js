import React from "react";
import styled from "styled-components";
import pizzaList from "./pizzaList";
import pizzaImage from "../../assets/images/pizza-img.png";
import backgroundPattern from "../../assets/images/cardBgImgNoRad.png";

const PizzaCard = ({ chosen }) => {
  return (
    <>
      {
        // Sprawdzic ktory element z tablicy pizzaList pasuje do zaznaczonych
        // Metodą filter zostawić tylko te pizze z pizzaList które includes chosen
        // Na podstawie tego wyswietlic te karty dynamicznie nadajac im nazwy i skladniki
      }
      <Card>
        <img src={pizzaImage} alt="img" className="imageOfPizza" />
        <h1 className="name">1. Pepperoni</h1>
        <h2 className="ing">tomato sauce, mozzarella, pepperoni</h2>
        {console.log(chosen)}
      </Card>
    </>
  );
};

const Card = styled.div`
  background-image: url(${backgroundPattern});
  background-repeat: no-repeat;
  background-size: 100%;

  width: 484px;
  height: 220px;
  border-radius: 15px;

  display: grid;
  grid-template-columns: repeat(22, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-template-areas:
    "img img img img img img img img  . . . . . . . . . . . . . . "
    "img img img img img img img img . name name name name name name name name name name name name ."
    "img img img img img img img img . name name name name name name name name name name name name ."
    "img img img img img img img img . . . . . . . . . . . . . . "
    "img img img img img img img img . ing ing ing ing ing ing ing ing ing ing ing ing ."
    "img img img img img img img img . ing ing ing ing ing ing ing ing ing ing ing ing ."
    "img img img img img img img img . ing ing ing ing ing ing ing ing ing ing ing ing ."
    "img img img img img img img img . . . . . . . . . . . . . ."
    "img img img img img img img img . . . . . . . . . . . . . ."
    "img img img img img img img img . . . . . . . . . . . . . .";

  .imageOfPizza {
    grid-area: img;
    align-self: center;
    justify-self: center;
  }

  .name {
    grid-area: name;
    font-family: "Archistico";
    color: white;
    border-bottom: 2px dashed white;
  }

  .ing {
    grid-area: ing;
    color: white;
    font-size: 0.84rem;
    font-weight: 500;
    align-self: start;
  }
`;
export default PizzaCard;

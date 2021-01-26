import React from "react";
import styled from "styled-components";
import pattern from "../../images/pattern.png";
import PizzaCard from "../Pizzas/PizzaCard";
import cardLayout from "../../images/cardLayout.png";

const Pizzas = () => {
  return (
    <AllPizzas>
      <PizzaCard />
      <img src={cardLayout} alt="card" />
    </AllPizzas>
  );
};

const AllPizzas = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  // grid-gap: 20px;

  background-image: url(${pattern});
  background-repeat: no-repeat;
  background-size: 100%;

  padding: 1rem;

  // border: 2px solid cadetblue;

  img {
    margin-top: -12px;
    max-width: 85%;
    height: auto;
  }
`;

export default Pizzas;

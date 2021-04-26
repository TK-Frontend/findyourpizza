import React from "react";
import styled from "styled-components";
import pattern from "../../assets/images/pattern.png";
import PizzaCard from "../Pizzas/PizzaCard";
import cardLayout from "../../assets/images/Layouts/cardLayoutGrid.png";

const Pizzas = ({ chosen }) => {
  return (
    <AllPizzas>
      <PizzaCard chosen={chosen} />
      <img src={cardLayout} alt="card" />
    </AllPizzas>
  );
};

const AllPizzas = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  background-image: url(${pattern});
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 1rem;
  width: 100%;

  img {
    max-width: 88%;
    height: auto;
  }
`;

export default Pizzas;

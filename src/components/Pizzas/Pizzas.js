import React from 'react';
import styled from 'styled-components';
import pattern from '../../images/pattern.png';
import PizzaCard from '../Pizzas/PizzaCard';

const Pizzas = () => {
  return (
    <AllPizzas>
      <PizzaCard />
    </AllPizzas>
  );
};

const AllPizzas = styled.div`
  background-image: url(${pattern});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 500px;
  padding: 5rem;
`;

export default Pizzas;

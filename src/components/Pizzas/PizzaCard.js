import React from 'react';
import styled from 'styled-components';
import pizzaImage from '../../images/pizza-img.png';

import backgroundPattern from '../../images/cardBgImgNoRad.png';

const PizzaCard = () => {
  return (
    <Card>
      <img src={pizzaImage} alt='img' className='imageOfPizza' />
      <h1 className='name'>1. Pepperoni</h1>
      <h2 className='ing'>tomato sauce, mozzarella, pepperoni</h2>
    </Card>
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
    'img img img img img img img img  . . . . . . . . . . . . . . '
    'img img img img img img img img . name name name name name name name name name name name name .'
    'img img img img img img img img . name name name name name name name name name name name name .'
    'img img img img img img img img . . . . . . . . . . . . . . '
    'img img img img img img img img . ing ing ing ing ing ing ing ing ing ing ing ing .'
    'img img img img img img img img . ing ing ing ing ing ing ing ing ing ing ing ing .'
    'img img img img img img img img . ing ing ing ing ing ing ing ing ing ing ing ing .'
    'img img img img img img img img . . . . . . . . . . . . . .'
    'img img img img img img img img . . . . . . . . . . . . . .'
    'img img img img img img img img . . . . . . . . . . . . . .';

  .imageOfPizza {
    grid-area: img;
    align-self: center;
    justify-self: center;
  }

  .name {
    grid-area: name;
    font-family: 'Archistico';
    color: white;
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

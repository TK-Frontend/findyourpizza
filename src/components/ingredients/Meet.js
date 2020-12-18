import styled from 'styled-components';
import uuid from 'react-uuid';
import meet from '../../images/meet.png';

import ButtonsOfIngredients from './ButtonsOfIngredients';

const Meet = () => {
  const ingredients = [
    'ham',
    'beef',
    'matured ham',
    'pepperoni',
    'pork',
    'chicken',
    'bacon',
  ];
  return (
    <Meets>
      <h1>
        Meet <img src={meet} alt='meet' />
      </h1>
      <MeetButtons>
        {ingredients.map((ingredient) => {
          return (
            <ButtonsOfIngredients key={uuid()}>
              {ingredient}
            </ButtonsOfIngredients>
          );
        })}
      </MeetButtons>
    </Meets>
  );
};

const Meets = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 30%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  h1 {
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
  }
  img {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 768px) {
    flex-basis: auto;
  }
`;

const MeetButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Meet;

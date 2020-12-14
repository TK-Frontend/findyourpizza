import styled from 'styled-components';
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
      <h1>Meet</h1>
      <ButtonsOfIngredients ingredients={ingredients} />
    </Meets>
  );
};

const Meets = styled.div`
  padding: 1rem;
  h1 {
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
  }
`;

export default Meet;

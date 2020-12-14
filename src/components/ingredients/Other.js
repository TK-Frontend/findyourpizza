import styled from 'styled-components';
import ButtonsOfIngredients from './ButtonsOfIngredients';

const Other = () => {
  const ingredients = [
    'pineapple',
    'corn',
    'green pepper',
    'rocket',
    'mushrooms',
    'red onion',
    'black olives',
    'pepper mix',
    'cherry tomatoes',
    'jalapenos',
    'tomatoes',
    'spinach leaves',
  ];
  return (
    <Others>
      <h1>Other</h1>
      <ButtonsOfIngredients ingredients={ingredients} />
    </Others>
  );
};

const Others = styled.div`
  padding: 1rem;
  h1 {
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
  }
`;

export default Other;

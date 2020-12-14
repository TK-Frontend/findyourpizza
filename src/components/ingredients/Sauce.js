import styled from 'styled-components';
import ButtonsOfIngredients from './ButtonsOfIngredients';

const Sauce = () => {
  const ingredients = ['tomato', 'white', 'BBQ'];

  return (
    <Sauces>
      <h1>Sauce</h1>
      <ButtonsOfIngredients ingredients={ingredients} />
    </Sauces>
  );
};

const Sauces = styled.div`
  padding: 1rem;
  h1 {
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
  }
`;

export default Sauce;

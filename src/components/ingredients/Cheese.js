import styled from 'styled-components';
import ButtonsOfIngredients from './ButtonsOfIngredients';

const Cheese = () => {
  const ingredients = ['mozarella', 'corregio'];

  return (
    <Cheeses>
      <h1>Cheese</h1>
      <ButtonsOfIngredients ingredients={ingredients} />
    </Cheeses>
  );
};

const Cheeses = styled.div`
  padding: 1rem;
  h1 {
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
  }
`;

export default Cheese;

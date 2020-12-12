import styled from 'styled-components';

const Sauce = () => {
  const sauceIngredients = ['tomato', 'white', 'BBQ'];
  const buttons = sauceIngredients.map((ing) => {
    return <button>{ing}</button>;
  });

  return (
    <Sauces>
      <h1>Sauce</h1>
      {buttons}
    </Sauces>
  );
};

const Sauces = styled.div`
  h1 {
    font-size: 1.2rem;
    text-align: center;
    font-weight: 300;
  }
  button {
    min-width: 100px;
    min-height: 30px;
    border-radius: 5px;
    border: none;
    margin: 3px;
    list-style: none;
  }
`;

export default Sauce;

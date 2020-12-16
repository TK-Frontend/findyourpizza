import styled from "styled-components";
import uuid from "react-uuid";
import ButtonsOfIngredients from "./ButtonsOfIngredients";

const Sauce = () => {
  const ingredients = ["tomato", "white", "BBQ"];

  return (
    <Sauces>
      <h1>Sauce</h1>
      {ingredients.map((ingredient) => {
        return (
          <ButtonsOfIngredients key={uuid()}>{ingredient}</ButtonsOfIngredients>
        );
      })}
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

import styled from "styled-components";
import uuid from "react-uuid";
import ButtonsOfIngredients from "./ButtonsOfIngredients";

const Other = () => {
  const ingredients = [
    "pineapple",
    "corn",
    "green pepper",
    "rocket",
    "mushrooms",
    "red onion",
    "black olives",
    "pepper mix",
    "cherry tomatoes",
    "jalapenos",
    "tomatoes",
    "spinach leaves",
  ];
  return (
    <Others>
      <h1>Other</h1>
      {ingredients.map((ingredient) => {
        return (
          <ButtonsOfIngredients key={uuid()}>{ingredient}</ButtonsOfIngredients>
        );
      })}
    </Others>
  );
};

const Others = styled.div`
  button {
    display: flex;
    flex-direction: column;
  }

  padding: 1rem;
  h1 {
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
  }
`;

export default Other;

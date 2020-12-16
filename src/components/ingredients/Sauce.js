import styled from "styled-components";
import uuid from "react-uuid";
import sauce from "../../images/sauce.png";
import ButtonsOfIngredients from "./ButtonsOfIngredients";

const Sauce = () => {
  const ingredients = ["tomato", "white", "BBQ"];

  return (
    <Sauces>
      <h1>
        Sauce <img src={sauce} alt="sauce" />
      </h1>
      {ingredients.map((ingredient) => {
        return (
          <ButtonsOfIngredients key={uuid()}>{ingredient}</ButtonsOfIngredients>
        );
      })}
    </Sauces>
  );
};

const Sauces = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  align-items: center;
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

export default Sauce;

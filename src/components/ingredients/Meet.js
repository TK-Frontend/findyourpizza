import styled from "styled-components";
import uuid from "react-uuid";
import meet from "../../images/meet.png";

import ButtonsOfIngredients from "./ButtonsOfIngredients";

const Meet = () => {
  const ingredients = [
    "ham",
    "beef",
    "matured ham",
    "pepperoni",
    "pork",
    "chicken",
    "bacon",
  ];
  return (
    <Meets>
      <h1>
        Meet <img src={meet} alt="meet" />
      </h1>
      {ingredients.map((ingredient) => {
        return (
          <ButtonsOfIngredients key={uuid()}>{ingredient}</ButtonsOfIngredients>
        );
      })}
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
  img {
    width: 20px;
    height: 20px;
  }
`;

export default Meet;

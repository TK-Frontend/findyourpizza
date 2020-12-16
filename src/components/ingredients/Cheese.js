import styled from "styled-components";
import uuid from "react-uuid";
import cheese from "../../images/cheese.png";
import ButtonsOfIngredients from "./ButtonsOfIngredients";

const Cheese = () => {
  const ingredients = ["mozarella", "corregio"];

  return (
    <Cheeses>
      <h1>
        Cheese <img src={cheese} alt="cheese" />
      </h1>

      {ingredients.map((ingredient) => {
        return (
          <ButtonsOfIngredients key={uuid()}>{ingredient}</ButtonsOfIngredients>
        );
      })}
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
  img {
    width: 20px;
    height: 20px;
  }
`;

export default Cheese;

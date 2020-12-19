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
      <CheeseButtons>
        {ingredients.map((ingredient) => {
          return (
            <ButtonsOfIngredients key={uuid()}>
              {ingredient}
            </ButtonsOfIngredients>
          );
        })}
      </CheeseButtons>
    </Cheeses>
  );
};

const Cheeses = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  align-items: center;
  padding-top: 1rem;
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

const CheeseButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Cheese;

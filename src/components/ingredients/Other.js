import styled from "styled-components";
import other from "../../images/other.png";
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
      <h1>
        Other <img src={other} alt="other" />
      </h1>
      <OthersButtons>
        {ingredients.map((ingredient) => {
          return (
            <ButtonsOfIngredients key={uuid()}>
              {ingredient}
            </ButtonsOfIngredients>
          );
        })}
      </OthersButtons>
    </Others>
  );
};

const Others = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: 90%;
  align-items: center;

  button {
    display: flex;
    flex-direction: column;
  }

  padding: 1rem;
  h1 {
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
    img {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 768px) {
    flex-basis: auto;
  }
`;

const OthersButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Other;

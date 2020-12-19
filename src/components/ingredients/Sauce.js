import { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import sauce from "../../images/sauce.png";
import ButtonsOfIngredients from "./ButtonsOfIngredients";

const Sauce = () => {
  const ingredients = ["tomato", "white", "BBQ"];
  const [color, setColor] = useState("white");
  const [active, setActive] = useState(false);
  const [activeId, setActiveId] = useState();

  /*  Sauce.defaultProps = { color: "green", ordered: false }; */

  function changeColor() {
    setColor("white" ? "grey" : "white");
  }

  function toggleActive() {
    setActive(!active);
  }

  return (
    <Sauces>
      <h1>
        Sauce <img src={sauce} alt="sauce" />
      </h1>
      <SauceButtons>
        {ingredients.map((ingredient) => {
          return (
            <ButtonsOfIngredients
              color={color}
              active={active}
              activeId={ingredient.id === activeId}
              key={uuid()}
              onClick={toggleActive}
            >
              {ingredient}
            </ButtonsOfIngredients>
          );
        })}
      </SauceButtons>
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

const SauceButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Sauce;

import styled from "styled-components";
import backgroundPhoto from "../../images/backgroundPizza.png";
import Sauce from "./Sauce";
import Cheese from "./Cheese";
import Meet from "./Meet";
import Other from "./Other";

const IngredientsMenu = () => {
  return (
    <Ings>
      <Sauce />
      <Cheese />
      <Meet />
      <Other />
    </Ings>
  );
};

const Ings = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100vw;

  background-image: url(${backgroundPhoto});
  background-repeat: no-repeat;
  background-size: 100%;

  color: white;
`;

export default IngredientsMenu;

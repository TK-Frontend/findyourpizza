import { useState } from "react";
import styled from "styled-components";
import Navbar from "../Containers/Navbar/Navbar";
import IngredientsMenu from "../Containers/Ingredients/IngredientsMenu";
import Pizzas from "../Containers/Pizzas/Pizzas";

const Home = () => {
  const [chosenIngredients, setChosenIngredients] = useState([]);
  return (
    <Container>
      <Navbar />
      <IngredientsMenu
        chosen={chosenIngredients}
        setChosen={setChosenIngredients}
      />
      <Pizzas chosen={chosenIngredients} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

export default Home;

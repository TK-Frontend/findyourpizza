import styled from "styled-components";
import Recipe from "./components/Recipe";
import { recipes } from "./components/pizzaList";
import Navbar from "./components/Navbar";
import Ingredients from "./components/ingredients/Ingredients";

import Pizzas from "./components/Pizzas";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Ingredients />
      <Pizzas />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App;

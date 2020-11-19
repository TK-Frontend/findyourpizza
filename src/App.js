import styled from "styled-components";
import Recipe from "./components/Recipe";
import { recipes } from "./components/pizzaList";
import Ingredients from "./components/Ingredients";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Container>
      <Navbar />

      {/*  <Ingredients />

      {recipes.map((recipe) => (
        <Recipe
          id={recipe.pizza_id}
          title={recipe.title}
          ingredients={recipe.ingredients}
        />
      ))} */}
    </Container>
  );
};

const Container = styled.div`
  background: grey;
`;

export default App;

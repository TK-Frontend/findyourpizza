import { useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import IngredientsMenu from './components/ingredients/IngredientsMenu';
import Pizzas from './components/Pizzas/Pizzas';

const App = () => {
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

export default App;

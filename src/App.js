import styled from 'styled-components';
import Recipe from './components/Recipe';
import { recipes } from './components/pizzaList';
import Navbar from './components/Navbar';
import IngredientsMenu from './components/ingredients/IngredientsMenu';

import Pizzas from './components/Pizzas';

const App = () => {
  return (
    <Container>
      <Navbar />
      <IngredientsMenu />
      <Pizzas />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export default App;

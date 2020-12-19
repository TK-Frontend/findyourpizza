import styled from 'styled-components';
import Navbar from './components/Navbar';
import IngredientsMenu from './components/ingredients/IngredientsMenu';
import Pizzas from './components/Pizzas/Pizzas';

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

  @media (max-width: 768px) {
    overflow: auto;
  }
`;

export default App;

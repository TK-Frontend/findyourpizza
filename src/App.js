import styled from 'styled-components';
import Recipe from './components/Recipe';
import { recipes } from './components/pizzaList';
import Navbar from './components/Navbar';

import Pizzas from './components/Pizzas';

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <Pizzas />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default App;

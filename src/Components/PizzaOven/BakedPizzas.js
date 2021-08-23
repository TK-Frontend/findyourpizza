import styled from "styled-components";
import pattern from "../../assets/images/bgImages/pattern20.png";
import PizzaCards from "./PizzaCards";
import Message from "./Message";
import { useContext } from "react";
import { SelectedIngredientsContext } from '../../Contexts/SelectedIngredientsContext'

const BakedPizzas = () => {
  const [selectedIngredients] = useContext(SelectedIngredientsContext)

  return (
    <Container>
      {!selectedIngredients.length ? <Message /> : <AllPizzas><PizzaCards /></AllPizzas>}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  background-image: url(${pattern});
  background-size: cover;
  background-position: center center;
`;

const AllPizzas = styled.div`
  display: grid;
  gap: 1rem 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  padding: 1rem;
  margin: 0 auto;
  max-width: 88rem;
  height: auto;

  @media (max-width: 1410px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem 0px;
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 1rem 0px;
  }
`

export default BakedPizzas;

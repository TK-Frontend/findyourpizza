import { Element } from "react-scroll";
import { SelectedIngredientsContext } from "../context/SelectedIngredientsContext";
import { useContext } from "react";
import styled from "styled-components";
import pattern from "../assets/images/bgImages/pattern20.png";
import PizzaCards from "../components/PizzaCards";
import Message from "../components/Message";
import FilteredRecipes from "../utils/FilteredRecipes";

const SelectedPizzas = () => {
  const [selectedIngredients] = useContext(SelectedIngredientsContext)
  const result = FilteredRecipes()

  return (
    <Element name="pizzas">
      <Section>
        {!selectedIngredients.length ? null : !result.filteredRecipes.length ? <Message /> : <PizzaCards />}
      </Section>
    </Element>
  )
}

const Section = styled.section`
  width: 100%;
  position: relative;
  background-image: url(${pattern});
  background-size: cover;
  background-position: center center;
`;

export default SelectedPizzas;

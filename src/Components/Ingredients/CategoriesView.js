import styled from "styled-components";
import backgroundPhoto from "../../assets/images/bgImages/backgroundPizza.png";
import Sauces from "./TypesOfIngredients/Sauces";
import Cheeses from "./TypesOfIngredients/Cheeses";
import Meats from "./TypesOfIngredients/Meats";
import Others from "./TypesOfIngredients/Others";
import { themes } from '../../Contexts/ThemeContext';

const CategoriesView = () => {

  return (
    <Container>
      <Section>
        <Sauces />
        <Cheeses />
        <Meats />
        <Others />
      </Section>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  background-image: url(${backgroundPhoto});
  background-repeat: inherit;
  background-size: 100%;
`;

const Section = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 88rem;
  padding: 3rem 0;
  
  color: ${themes.light.color};

  @media (max-width: 768px) {
    background-repeat: repeat-y;
  }
`;

export default CategoriesView;

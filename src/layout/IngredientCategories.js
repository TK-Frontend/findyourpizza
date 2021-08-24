import styled from "styled-components";
import bgWeb from "../assets/images/bgImages/bgWeb2.png";
import bgMobile from "../assets/images/bgImages/bgMob.png";
import Sauces from "../components/ingredients/Sauces";
import Cheeses from '../components/ingredients/Cheeses'
import Meats from "../components/ingredients/Meats";
import Other from "../components/ingredients/Other";
import { themes } from '../contexts/ThemeContext';
import { Element } from "react-scroll";

const IngredientCategories = () => {

  return (
    <Element name="ingredients">
      <Container>
        <Section>
          <Sauces />
          <Cheeses />
          <Meats />
          <Other />
        </Section>
      </Container>
    </Element>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  background-image: url(${bgWeb});
  background-repeat: inherit;
  background-size: 100%;
  @media (min-width: 768px) {
    background-position: center 30%;
    background-size: 100%;
      } 
  @media (max-width: 768px) {
  background-image: url(${bgMobile});   
      }
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

export default IngredientCategories;

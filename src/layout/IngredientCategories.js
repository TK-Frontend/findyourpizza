import { themes } from '../context/ThemeContext';
import { Element } from "react-scroll";
import styled from "styled-components";
import bgWeb from "../assets/images/bgImages/bg-web.jpg";
import bgMobile from "../assets/images/bgImages/bg-mobile.jpg";
import Sauces from "../components/ingredients/Sauces";
import Cheeses from '../components/ingredients/Cheeses'
import Meats from "../components/ingredients/Meats";
import Other from "../components/ingredients/Other";

const IngredientCategories = () => {
  return (
    <Element name="ingredients">
      <Container>
        <Message>
          <h1>Pick some ingredients</h1>
        </Message>
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
  padding: 2rem 0;

  @media (min-width: 821px) {
    background-position: center 30%;
    background-size: 100%;
      } 
  @media (max-width: 820px) {
  background-image: url(${bgMobile});   
      }
  @media (max-width: 410px) {
    padding: 0; 
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
  padding: 1rem 0;
  color: ${themes.light.color};
  

  @media (max-width: 820px) {
    background-repeat: repeat-y;
  }
  @media (max-width: 410px) {
    padding-bottom: 1rem; 
  }
  `;

const Message = styled.div`
color: #fff;
 text-align: center;
 padding-top: 2.5rem;
`;

export default IngredientCategories;

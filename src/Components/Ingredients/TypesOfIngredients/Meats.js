import { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import meat from "../../../assets/images/categories/meat.png";
import SectionButtons from "../SectionButtons";

const Meets = () => {
  const [listOfIngredients, setListOfIngredients] = useState([
    { name: "ham", key: uuid(), active: false },
    { name: "beef", key: uuid(), active: false },
    { name: "matured ham", key: uuid(), active: false },
    { name: "pepperoni", key: uuid(), active: false },
    { name: "pork", key: uuid(), active: false },
    { name: "chicken", key: uuid(), active: false },
    { name: "bacon", key: uuid(), active: false },
  ]);

  const categoryName = 'Meats'
  const categoryImage = meat

  return (
    <Section>
      <SectionButtons
        listOfIngredients={listOfIngredients}
        setListOfIngredients={setListOfIngredients}
        categoryName={categoryName}
        categoryImage={categoryImage}
      />
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 36%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  h1 {
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
  }
  img {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 768px) {
    flex-basis: auto;
  }
`;

export default Meets;

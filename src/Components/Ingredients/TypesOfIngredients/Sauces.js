import { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import sauce from "../../../assets/images/categories/sauce.png";
import SectionButtons from "../SectionButtons";

const Sauces = () => {
  const [listOfIngredients, setListOfIngredients] = useState([
    { name: "tomato", key: uuid(), active: false },
    { name: "white", key: uuid(), active: false },
    { name: "BBQ", key: uuid(), active: false },
  ]);

  const categoryName = 'Sauces'
  const categoryImage = sauce

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
  flex-direction: column;
  flex-basis: 36%;
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

export default Sauces;

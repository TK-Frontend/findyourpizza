import { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import sauce from "../../assets/images/categories/sauce.png";
import Button from "../Button";

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
      <Button
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
  flex-basis: 43%;
  align-items: center;
  padding: 0.5rem;  

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
  @media (max-width: 410px) {
    padding: 0; 
  }
`;

export default Sauces;

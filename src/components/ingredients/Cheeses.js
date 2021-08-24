import { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import cheese from "../../assets/images/categories/cheese.png";
import Button from "../Button";

const Cheeses = () => {
  const [listOfIngredients, setListOfIngredients] = useState([
    { name: "mozzarella", key: uuid(), active: false },
    { name: "corregio", key: uuid(), active: false },
    { name: "fresh mozzarella", key: uuid(), active: false },
  ]);

  const categoryName = 'Cheeses'
  const categoryImage = cheese

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

export default Cheeses;

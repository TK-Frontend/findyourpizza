import { useState } from "react";
import styled from "styled-components";
import other from "../../assets/images/categories/other.png";
import uuid from "react-uuid";
import Button from "../Button";

const Other = () => {
  const [listOfIngredients, setListOfIngredients] = useState([
    { name: "pineapple", key: uuid(), active: false },
    { name: "corn", key: uuid(), active: false },
    { name: "green pepper", key: uuid(), active: false },
    { name: "rocket", key: uuid(), active: false },
    { name: "mushrooms", key: uuid(), active: false },
    { name: "red onion", key: uuid(), active: false },
    { name: "black olives", key: uuid(), active: false },
    { name: "pepper mix", key: uuid(), active: false },
    { name: "cherry tomatoes", key: uuid(), active: false },
    { name: "jalapenos", key: uuid(), active: false },
    { name: "tomatoes", key: uuid(), active: false },
    { name: "spinach leaves", key: uuid(), active: false },
  ]);

  const categoryName = 'Other'
  const categoryImage = other

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
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: 80%;
  align-items: center;
  padding: 0.5rem;

  button {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;

  img {
    width: 20px;
    height: 20px;
    }
  }
  
  @media (max-width: 768px) {
    flex-basis: auto;
  }
  @media (max-width: 410px) {
    padding: 0; 
  }
`;

export default Other;

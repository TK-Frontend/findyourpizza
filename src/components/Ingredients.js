import React from "react";
import styled from "styled-components";
import backgroundPhoto from "../images/backgroundPizza.png";

const Ingredients = () => {
  return (
    <Ings>
      <Souce>
        <h1>Souce</h1>
      </Souce>
      <Cheese>
        <h1>Cheese</h1>
      </Cheese>
      <Meet>
        <h1>Meet</h1>
      </Meet>
      <Other>
        <h1>Other</h1>
      </Other>
    </Ings>
  );
};

const Ings = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: absolute;
  width: 100vw;
  padding: 1rem;

  background-image: url(${backgroundPhoto});
  background-repeat: no-repeat;
  background-size: 100%;

  color: white;
  padding-bottom: 50px;
  h1 {
    font-size: 1rem;
  }
`;

const Souce = styled.div`
  display: flex;
  flex-direction: column;
`;

const Cheese = styled.div`
  display: flex;
  flex-direction: column;
`;
const Meet = styled.div`
  display: flex;
  flex-direction: column;
`;
const Other = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Ingredients;

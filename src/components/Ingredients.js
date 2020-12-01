import React from "react";
import styled from "styled-components";

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
  position: relative;
  top: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: white;
  border: 5px solid blue;
  padding-bottom: 50px;
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

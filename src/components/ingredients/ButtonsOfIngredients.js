import styled from 'styled-components';
import React, { useState } from 'react';

const ButtonsOfIngredients = ({ ingredients }) => {
  const [btnBgColor, setBtnBgColor] = useState('yellow');
  /* ButtonsOfIngredients.defaultProps = { btnBgColor: 'yellow' }; */
  const buttons = ingredients.map((ingredient) => {
    return <button>{ingredient}</button>;
  });

  return <Container>{buttons}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  button {
    min-width: 9rem;
    min-height: 30px;
    border-radius: 5px;
    border: none;
    margin: 3px;
    list-style: none;
  }
`;

export default ButtonsOfIngredients;

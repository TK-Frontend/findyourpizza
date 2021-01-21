import React from 'react';
import styled from 'styled-components';

import backgroundPattern from '../../images/cardBgImg.png';

const PizzaCard = () => {
  return (
    <Card>
      <h1>sth</h1>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background-image: url(${backgroundPattern});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 420px;
  height: 191px;
`;
export default PizzaCard;
